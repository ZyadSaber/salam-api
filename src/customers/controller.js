const pool = require("../../db.js");
const queries = require('./queries');

const getCustomers = (req, res) => {
    pool.query(queries.getCustomers, (error, results) => {
        if (error) {
            res.send({ response: error.detail })
            return;
        }
        let Response = (results.rows)
        Response.forEach((obj) => { obj.query_status = "q" })
        res.status(200).send(Response)
    })
}

const postCustomers = (req, res) => {
    const { name, email, phone, mobile, address, query_status, customer_id } = req.body;
    if (query_status === "n") {
        //add Customer
        if (name !== undefined && name.length !== 0) {
            pool.query(queries.checkNameExists, [name], (error, results) => {
                if (results.rows.length) {
                    res.send({ response: "name already exist" })
                    return
                }
                //postCustomers
                pool.query(queries.addStudent, [name, email, phone, mobile, address], (error, results) => {
                    if (error) {
                        res.send(error.detail)
                        return;
                    };
                    res.status(201).send({ response: "success" })
                })
            })
        } else {
            res.send({ response: "Cannot insert Null into name" })
            return
        }
    } else if (query_status === "d") {
        // delete customer
        pool.query(queries.checkIdExists, [customer_id], (error, results) => {
            const noCustomerFound = !results.rows.length;
            if (noCustomerFound) {
                res.send({ response: "Cannot Delete Null" })
                return;
            }
            pool.query(queries.removeCustomer, [customer_id], (error, results) => {
                if (error) {
                    res.send({ response: error.detail })
                    return;
                };
                res.status(200).send({ response: success })
            })
        })
    } else if (query_status === "u") {
        pool.query(queries.updateCustomer, [customer_id, name, email, phone, mobile, address], (error, results) => {
            if (error) {
                res.send(error.detail)
                return;
            };
            res.status(201).send({ response: "success" })
        })
    } else {
        res.send(`query_status is ${query_status}`)
    }
}
const popCustomers = (req, res) => {
    pool.query(queries.popCustomers, (error, results) => {
        if (error) {
            res.send({ response: error.detail })
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
}

module.exports = {
    getCustomers,
    postCustomers,
    popCustomers
}