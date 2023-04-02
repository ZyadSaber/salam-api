const pool = require("../../db.js");
const queries = require('./queries');

const getCasherReceiptVoucher = (req, res) => {
    res.status(200).send(Response)
}

const postCasherReceiptVoucher = (req, res) =>{
    const {query_status} = req.body;
    if (query_status === "n") {
    }else if (query_status === "d") {
    }else if (query_status === "u") {
    }else{
        res.status(500).json({status: "error"})
    }
}

module.exports = {
    postCasherReceiptVoucher,
    getCasherReceiptVoucher
}