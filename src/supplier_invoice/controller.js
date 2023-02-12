const pool = require("../../db.js");
const queries = require('./queries');
const supplierQueries = require("../suppliers/queries")

const postSupplierInvoice = (req, res) =>{
    const {supplier_id, date, items,query_status, invoice_note, total, discount, total_after_discount, paid, credit} = req.body;
    if (query_status === "n") {
        // add supplier_invoice
        if (supplier_id && items.length !== 0 && date) {
            pool.query(supplierQueries.checkIdExists, [supplier_id], (error, result)=>{
                if(!result.rows.length){
                    res.status(406).send({response: "Supplier_id does not exist"});
                    return
                }
            })
            const id = Date.now()
            pool.query(queries.addSupplierInvoice, [id, supplier_id, date, invoice_note, total, discount, total_after_discount, paid, credit], (error, result)=>{
                if(error){
                    console.log(error)
                    res.status(500).send(error)
                    return
                }
                items.map((item)=>{
                    pool.query(queries.addSupplierInvoiceItems, [id, item.item_id, item.width, item.height, item.size, item.quantity, item.price, item.total, item.notes], (error, result)=>{
                    if(error){
                        console.log(error)
                        res.status(500).send(error)
                        return
                    }
                    })
                })
                res.status(201).send({response: "success"})
            })
    }else{
        res.status(500).send({response: "Error in JSON"})
        return
    }
    }else if (query_status === "d") {
    
    }else if (query_status === "u") {

    }else{
        res.status(500).json({status: "can't insert NULL into query_status "})
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