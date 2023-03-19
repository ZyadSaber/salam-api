const pool = require("../../db.js");
const queries = require('./queries');
const customerQueries = require("../customers/queries.js");
const supplierQueries = require("../suppliers/queries.js");
const items = require("../items/queries");

let itemsNames = []
pool.query(items.popCustomers, (error, popItems) => {
    if (popItems){
        itemsNames = popItems.rows
    }
});

let customerNames = []
pool.query(customerQueries.popCustomers, (error, results)=>{
    if(results){
        customerNames = results.rows
    }
})

let supplierNames = []
pool.query(supplierQueries.popSuppliers, (error, results)=>{
    if(results){
        supplierNames = results.rows
    }
})

const getMasterTable = (req, res) => {
    const { invoice_type, person_id, authorization, invoice_number = "", date_from, date_to } = req.query
    if (invoice_type !== undefined || !invoice_type || invoice_number === "") {
        if (invoice_type === "customers") {
            if (person_id) {
                pool.query(queries.getCustomersInvoicesAndID, [invoice_number, person_id], (error, results) => {
                    if (error) {
                        res.status(500).send(error);
                        console.log(error)
                        return;
                    }
                    let response = [];
                    results.rows.map((obj) => {
                        customerNames.map((customerName)=>{
                            if (obj.customer_id === customerName.customer_id){
                                let newObj = {};
                                newObj.person_id = obj.customer_id;
                                newObj.invoice_id = obj.customer_invoice_id;
                                newObj.date = obj.date;
                                newObj.total = obj.total_after_discount
                                newObj.name = customerName.name
                                response.push(newObj);
                            }
                        })
                    })
                    res.status(200).send(response)
                })
            } else {
                pool.query(queries.getCustomersInvoices, [invoice_number], (error, results) => {
                    if (error) {
                        res.status(500).send(error);
                        console.log(error)
                        return;
                    }
                    let response = [];
                    results.rows.map((obj) => {
                        customerNames.map((customerName)=>{
                            if (obj.customer_id === customerName.customer_id){
                                let newObj = {};
                                newObj.person_id = obj.customer_id;
                                newObj.invoice_id = obj.customer_invoice_id;
                                newObj.date = obj.date;
                                newObj.total = obj.total_after_discount
                                newObj.name = customerName.name
                                response.push(newObj);
                            }
                        })
                    })
                    res.status(200).send(response)
                })
            }

        } else if (invoice_type === "suppliers") {
            if (person_id) {
                pool.query(queries.getSupplierInvoicesAndID, [invoice_number, person_id], (error, results) => {
                    if (error) {
                        res.status(500).send(error);
                        console.log(error)
                        return;
                    }
                    let response = [];
                    results.rows.map((obj) => {
                        supplierNames.map((supplierName)=>{
                            if (obj.supplier_id === supplierName.supplier_id){
                                let newObj = {};
                                newObj.person_id = obj.supplier_id;
                                newObj.invoice_id = obj.customer_invoice_id;
                                newObj.date = obj.date;
                                newObj.total = obj.total_after_discount
                                newObj.name = supplierName.name
                                response.push(newObj);
                            }
                        })
                    })
                    res.send(response)
                })
            } else {
                pool.query(queries.getSupplierInvoices, [invoice_number], (error, results) => {
                    if (error) {
                        res.status(500).send(error);
                        console.log(error)
                        return;
                    }
                    let response = [];
                   results.rows.map((obj) => {
                        supplierNames.map((supplierName)=>{
                            if (obj.supplier_id === supplierName.supplier_id){
                                let newObj = {};
                                newObj.person_id = obj.customer_id;
                                newObj.invoice_id = obj.supplier_invoice_id;
                                newObj.date = obj.date;
                                newObj.total = obj.total_after_discount
                                newObj.name = supplierName.name
                                response.push(newObj);
                            }
                        })
                    })
                    res.status(200).send(response)
                })
            }
        }
    } else {
        res.status(200).send()
    }
}

const getDetailTable = (req, res) => {
    pool.query(items.popCustomers, (error, results) => {
    })
    const { invoice_type, authorization, invoice_number } = req.query
    if (invoice_type === "suppliers" && invoice_number) {
        pool.query(queries.getSupplierInvoiceDetails, [invoice_number], (error, results) => {
            if (error) {
                res.status(500).send(error)
                return;
            }
            let detailTable = []
            results.rows.map((item) => {
                itemsNames.map((item_name) => {
                    if (item.item_id === item_name.item_id) {
                        item.item_name = item_name.name
                        detailTable.push(item)
                    }
                })
            })
            res.send(results.rows)
        })
    } else if (invoice_type === "customers" && invoice_number) {
        pool.query(queries.getCustomerInvoiceDetails, [invoice_number], (error, results) => {
            if (error) {
                res.status(500).send(error)
                return;
            }
            res.send(results.rows)
        })
    }
}

const postInvoiceSearch = (req, res) => {
    const { query_status } = req.body

    if (query_status === "n") {

    } else if (query_status === "u") {

    } else if (query_status === "d") {

    } else {
        res.status(500).send({ response: error in JSON })
    }
}

const getCustomerSupplierTable = (req, res) => {
    const { invoice_type, authorization } = req.query
    if (invoice_type === "customers") {
        pool.query(customerQueries.popCustomers, (error, results) => {
            if (error) {
                res.status(500).send({ response: error })
                return;
            }
            const Results = results.rows
            const Response = []
            Results.map((item) => {
                let data = {}
                data.value = item.customer_id
                data.label = item.name
                Response.push(data)
            })
            res.status(200).send(Response)
        })
    } else if (invoice_type === "suppliers") {
        pool.query(supplierQueries.popSuppliers, (error, results) => {
            if (error) {
                res.status(500).send({ response: error })
                return;
            }
            const Results = results.rows
            const Response = []
            Results.map((item) => {
                let data = {}
                data.value = item.supplier_id
                data.label = item.name
                Response.push(data)
            })
            res.status(200).send(Response)
        })
    } else {
        res.send([])
    }
}

module.exports = {
    getMasterTable,
    getDetailTable,
    postInvoiceSearch,
    getCustomerSupplierTable
}