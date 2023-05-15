const pool = require("../../db.js");
const queries = require('./queries');
const supplierQueries = require("../suppliers/queries")

const postSupplierInvoice = (req, res) =>{
    const {supplier_id, date, items,query_status, invoice_note, total, discount, total_after_discount, paid, credit} = req.body;
    if (query_status === "n") {
        const id = Date.now()
        // add supplier_invoice
        if (supplier_id && items.length !== 0 && date) {
            pool.query(supplierQueries.checkIdExists, [supplier_id], (error, result)=>{
                if(!result.rows.length){
                    res.status(500).send({response: "Supplier_id does not exist"});
                    return
                }
            })
            const verifyData = ()=>{
                let reply
                items.map((item)=>{
                if(
                    item.item_id == 0 
                    || 
                    item.width == 0
                    ||
                    item.height == 0
                    ||
                    item.size == 0
                    ||
                    item.quantity == 0
                    ||
                    item.price == 0
                    ||
                    item.total == 0
                    ){
                    reply = true
                }
            })
            return reply
            }
            if(verifyData()){
                res.status(500).send({response: "review your data again"})
                return
            }else {
            pool.query(queries.addSupplierInvoice, [id, supplier_id, date, invoice_note, total, discount, total_after_discount, paid, credit], (error, result)=>{
                if(error){
                    console.log(error)
                    res.status(500).send(error)
                    return
                }
                items.map((item)=>{
                    //add to invoice details
                    pool.query(queries.addSupplierInvoiceItems, [id, item.item_id, item.width, item.height, item.size, item.quantity, item.price, item.total, item.notes], (error, result)=>{
                    if(error){
                        console.log(error)
                        res.status(500).send(error)
                        return
                    }
                    })
                    //add to item inventory
                    const total_size = item.size * item.quantity
                    pool.query(queries.addItemInventory, [id, item.item_id, total_size], (error, result)=>{
                    if(error){
                        console.log(error)
                        res.status(500).send(error)
                        return
                    }
                    })
                })
            })
            res.send({response: "success"})
            }
    }else{
        res.status(500).send({response: "Error in JSON"})
        return
    }
    }else if (query_status === "d") {
     
    }else if (query_status === "u") {

    }else{
        res.status(500).json({response: "can't insert NULL into query_status"})
    }
}

let suppliersData = []
const suppliersDataFun = ()=> {
        pool.query(queries.getSuppliersName, (error, result) => {
                if (error){
            res.status(500).send(error)
            return;
            }
            suppliersData = result.rows
            })
}

const popSupplierInvoices = (req, res) => {
    suppliersDataFun()
    pool.query(queries.popSupplierInvoices, (error, results)=>{
        if (error){
            res.status(500).send(error)
            return;
        }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.invoice_id = item.supplier_invoice_id
            data.id = item.supplier_id
            data.date = item.date
            data.net_total = item.total_after_discount
            suppliersData.map((supplier)=>{
                if(supplier.supplier_id == item.supplier_id){
                    data.name = supplier.name
                }
            })
            Response.push(data)
        })
        res.status(200).send(Response)
    })
}

module.exports = {
    postSupplierInvoice,
    popSupplierInvoices
}