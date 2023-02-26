const pool = require("../../db.js");
const queries = require('./queries');

const getLabels = (req, res) => {
    const { label, p_language } = req.query
    // if (label) {

    pool.query(queries.getEnglishNames, (error, result) => {
        if (error) {
            res.status(500).send({ response: error })
            return;
        }
        if (p_language == "en") {
            let en_labels = {}
            result.rows.map((item) => {
                en_labels[item.lang_code] = item.en_name
            })
            res.send(en_labels)
        } else if (p_language == "ar") {
            let ar_labels = {}
            result.rows.map((item) => {
                ar_labels[item.lang_code] = item.ar_name
            })
            res.send(ar_labels)
        }
    })
    // pool.query(queries.getLabels, (error, result) => {
    //     if (error) {
    //         res.status(500).send({ response: error })
    //         return;
    //     }

    // })
    // } else {
    //     res.status(500).send({ response: "null into label" })
    // }
}

module.exports = {
    getLabels,
}