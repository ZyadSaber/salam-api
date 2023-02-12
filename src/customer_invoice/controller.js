const pool = require("../../db.js");
const queries = require('./queries');
const customerQueriers = require("../customers/queries")

const postCustomerInvoice = (req, res) =>{
    const {customer_id, date, items,query_status, invoice_note, total, discount, total_after_discount, paid, credit} = req.body;
    if (query_status === "n") {
        // add supplier_invoice
        if (customer_id && items.length !== 0 && date) {
            pool.query(customerQueriers.checkIdExists, [customer_id], (error, result)=>{
                if(!result.rows.length){
                    res.status(406).send({response: "customer_id does not exist"});
                    return
                }
            })
            const id = Date.now()
            pool.query(queries.addCustomerInvoice, [id, customer_id, date, invoice_note, total, discount, total_after_discount, paid, credit], (error, result)=>{
                if(error){
                    console.log(error)
                    res.status(500).send(error)
                    return
                }
                items.map((item)=>{
                    pool.query(queries.addCustomerInvoiceItems, [id, item.print_id, item.item_id, item.width, item.height, item.size, item.quantity, item.price, item.total, item.notes], (error, result)=>{
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

let customersData = []
const CustomersDataFun = ()=> {
        pool.query(queries.getCustomersName, (error, result) => {
                if (error){
            res.status(500).send(error)
            return;
            }
            customersData = result.rows
            })
}

const popCustomerInvoices = (req, res) => {
    CustomersDataFun()
    pool.query(queries.popCustomerInvoices, (error, results)=>{
        if (error){
            res.status(500).send(error)
            return;
        }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.invoice_id = item.customer_invoice_id
            data.id = item.customer_id
            data.date = item.date
            data.net_total = item.total_after_discount
            customersData.map((customer)=>{
                if(customer.customer_id == item.customer_id){
                    data.name = customer.name
                }
            })
            Response.push(data)
        })
        res.status(200).send(Response)
    })
}

module.exports = {
    postCustomerInvoice,
    popCustomerInvoices
}