const pool = require("../../db.js");
const queries = require('./queries');

const getCasherReceiptVoucher = (req, res) => {
    const { date_from, date_to } = req.query
    pool.query(queries.getCAcherReceiptVoucherTableData, [date_from, date_to], (error, results)=>{
        if(error){
            console.log(error)
            res.send([])
            return;
        }
        let Response = (results.rows)
        results.rows.map((record)=>{
            if (record.voucher_type === "S"){
                record.voucher_name = "Supplier"
            } else if (record.voucher_type === "C"){
                record.voucher_name = "Customer"
            }
        })
        Response.forEach((obj) => { obj.query_status = "q" })
        res.status(200).send(Response)
    })
}

const postCasherReceiptVoucher = (req, res) => {
    const { query_status } = req.body;
    if (query_status === "n") {
    } else if (query_status === "d") {
    } else if (query_status === "u") {
    } else {
        res.status(500).json({ status: "error" })
    }
}

module.exports = {
    postCasherReceiptVoucher,
    getCasherReceiptVoucher
}