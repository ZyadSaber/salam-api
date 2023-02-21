const pool = require("../../db.js");
const queries = require('./queries');

const getLabels = (req, res) => {
    const { label, p_language } = req.query
    if (label) {
        pool.query(queries.getLabels, [label], (error, result) => {
            if (error) {
                res.status(500).send({ response: error })
                return;
            }
            if (result.rows.length != 0) {
                if (p_language == 1) {
                    res.send({ label: result.rows[0].en_name })
                } else if (p_language == 2) {
                    res.send({ label: result.rows[0].ar_name })
                }
            } else {
                res.send({})
            }
        })
    } else {
        res.status(500).send({ response: "null into label" })
    }
}

const postCustomers = (req, res) => {
    const { name, email, phone, mobile, address, query_status, customer_id } = req.body;
    if (query_status === "n") {

    } else if (query_status === "d") {

    } else if (query_status === "u") {

    }
}

module.exports = {
    getLabels,
}