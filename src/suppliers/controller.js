const pool = require("../../db.js");
const queries = require('./queries');

const getSuppiers = (req, res) => {
    pool.query(queries.getSuppiers, (error, results) => {
        if (error) {
            res.send(error)
            return;
        }
        let Response = (results.rows)
        Response.forEach((obj) => { obj.query_status = "q" })
        res.status(200).send(Response)
    })
}

const postSuppliers = (req, res) => {
    const { name, email, phone, mobile, address, query_status, supplier_id } = req.body;
    if (query_status === "n") {
        //add Suppiers
        if (name !== undefined) {
            pool.query(queries.checkNameExists, [name], (error, results) => {
                if (results.rows.length) {
                    res.send({ response: "name already exist" })
                    return
                }
                //postSuppliers
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
        // delete Suppiers
        pool.query(queries.checkIdExists, [supplier_id], (error, results) => {
            const noSuppiersFound = !results.rows.length;
            if (noSuppiersFound) {
                res.send({ response: "Cannot Delete Null" })
                return;
            }
            pool.query(queries.removeSuppiers, [supplier_id], (error, results) => {
                if (error) {
                    res.send({ response: error.detail })

                    return;
                };
                res.status(200).send({ response: "success" })
            })
        })
    } else if (query_status === "u") {
        pool.query(queries.updateSuppiers, [supplier_id, name, email, phone, mobile, address], (error, results) => {
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

const popSuppliers = (req, res) => {
    pool.query(queries.popSuppliers, (error, results) => {
        if (error) {
            res.send({ response: error.detail })
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
}

module.exports = {
    getSuppiers,
    postSuppliers,
    popSuppliers
}