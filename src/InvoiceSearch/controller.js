const pool = require("../../db.js");
const queries = require('./queries');
const customerQueries = require("../customers/queries.js");
const supplierQueries = require("../suppliers/queries.js")

const getMasterTable = (req, res)=>{
    const {invoice_type, person_id,  authorization, invoice_number = "", date_from, date_to} = req.query
    // console.log(req.query)
    if(invoice_type !== undefined){
        if( invoice_type === "customers"){
            if  (person_id){
                pool.query(queries.getCustomersInvoicesAndID, [invoice_number,  person_id], (error, results)=>{
                if(error){
                    res.status(500).send(error);
                    console.log(error)
                    return;
                }
                let response = [];
                results.rows.map((obj)=>{
                    let newObj = {};
                    newObj.person_id = obj.customer_id;
                    newObj.invoice_id = obj.customer_invoice_id;
                    newObj.date = obj.date;
                    newObj.total = obj.total_after_discount
                    response.push(newObj);
                })
                res.status(200).send(response)
            })
            }else {
                 pool.query(queries.getCustomersInvoices, [invoice_number], (error, results)=>{
                if(error){
                    res.status(500).send(error);
                    console.log(error)
                    return;
                }
                let response = [];
                results.rows.map((obj)=>{
                    let newObj = {};
                    newObj.person_id = obj.customer_id;
                    newObj.invoice_id = obj.customer_invoice_id;
                    newObj.date = obj.date;
                    newObj.total = obj.total_after_discount
                    response.push(newObj);
                })
                res.status(200).send(response)
            })
            }
            
        } else if (invoice_type === "suppliers"){
            if  (person_id){
                pool.query(queries.getSupplierInvoicesAndID, [invoice_number,  person_id], (error, results)=>{
                if(error){
                    res.status(500).send(error);
                    console.log(error)
                    return;
                }
                let response = [];
                results.rows.map((obj)=>{
                    let newObj = {};
                    newObj.person_id = obj.supplier_id;
                    newObj.invoice_id = obj.supplier_invoice_id;
                    newObj.date = obj.date;
                    newObj.total = obj.total_after_discount
                    response.push(newObj);
                })
                res.status(200).send(response)
            })
            }else {
                 pool.query(queries.getSupplierInvoices, [invoice_number], (error, results)=>{
                if(error){
                    res.status(500).send(error);
                    console.log(error)
                    return;
                }
                let response = [];
                results.rows.map((obj)=>{
                    let newObj = {};
                    newObj.person_id = obj.supplier_id;
                    newObj.invoice_id = obj.supplier_invoice_id;
                    newObj.date = obj.date;
                    newObj.total = obj.total_after_discount
                    response.push(newObj);
                })
                res.status(200).send(response)
            })
            }
        }
    } else {
        res.status(200).send([])
    }
}

const getDetailTable = (req, res)=>{
    const {invoice_type, authorization, invoice_number} = req.query
        if(invoice_type === "suppliers" && invoice_number){
            pool.query(queries.getSupplierInvoiceDetails, [invoice_number], (error, results)=>{
                if (error){
                    res.status(500).send(error)
                    return;
                }
                res.send(results.rows)
            })
        } else if(invoice_type === "customers" && invoice_number){
            pool.query(queries.getCustomerInvoiceDetails, [invoice_number], (error, results)=>{
                if (error){
                    res.status(500).send(error)
                    return;
                }
                res.send(results.rows)
            })
        }
}

const postInvoiceSearch = (req, res) =>{
    const {query_status} = req.body

    if (query_status === "n") {

    } else if (query_status === "u"){

    } else if (query_status === "d"){

    } else {
        res.status(500).send({response: error in JSON})
    }
}

const getCustomerSupplierTable = (req, res) => {
    const {invoice_type, authorization} = req.query
    if(invoice_type === "customers"){
        pool.query(customerQueries.popCustomers, (error, results)=>{
            if(error){
                res.status(500).send({response: error})
                return;
            }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.value = item.customer_id
            data.label = item.name
            Response.push(data)
        })
        res.status(200).send(Response)
        })
    }else if (invoice_type === "suppliers"){
        pool.query(supplierQueries.popSuppliers, (error, results)=>{
            if(error){
                res.status(500).send({response: error})
                return;
            }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.value = item.supplier_id
            data.label = item.name
            Response.push(data)
        })
        res.status(200).send(Response)
        })
    }else{
        res.send([])
    }
}

module.exports = {
getMasterTable,
getDetailTable,
postInvoiceSearch,
getCustomerSupplierTable
}