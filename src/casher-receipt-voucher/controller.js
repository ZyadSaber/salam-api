const pool = require("../../db.js");
const queries = require('./queries');

const getCasherReceiptVoucher = (req, res) => {
    const { date_from, date_to } = req.query
    if (date_from, date_to){
    pool.query(queries.getCAcherReceiptVoucherTableDataWithDate, [date_from, date_to], (error, results)=>{
        if(error){
            console.log(error)
            res.send([])
            return;
        }
        let Response = (results.rows)
        results.rows.map((record)=>{
            if (record.voucher_type === "S"){
                record.voucher_name = "Supplier"
                record.voucher_type = "suppliers"
            } else if (record.voucher_type === "C"){
                record.voucher_name = "Customer"
                record.voucher_type = "customers"
            }
            if (record.customer_id !== null){
                record.person_id = record.customer_id
            } else {
                record.person_id = record.supplier_id
            }
        })
        Response.forEach((obj) => { obj.query_status = "q" })
        res.status(200).send(Response)
    })
    }else{
         pool.query(queries.getCAcherReceiptVoucherTableData, (error, results)=>{
        if(error){
            console.log(error)
            res.send([])
            return;
        }
        let Response = (results.rows)
        results.rows.map((record)=>{
            if (record.voucher_type === "S"){
                record.voucher_name = "Supplier"
                record.voucher_type = 1
            } else if (record.voucher_type === "C"){
                record.voucher_name = "Customer"
                record.voucher_type = 2
            }
            if (record.customer_id !== null){
                record.person_id = record.customer_id
            } else {
                record.person_id = record.supplier_id
            }
        })
        Response.forEach((obj) => { obj.query_status = "q" })
        res.status(200).send(Response)
    })
    }
}

const postCasherReceiptVoucher = (req, res) => {
    const { query_status, date, amount, person_id, notes , voucher_type, receipt_voucher_id} = req.body;
    if (query_status === "n") {
        if(voucher_type == 1 && date && amount && person_id){
            pool.query(queries.addCAcherReceiptVoucherTableData, [date, "S", person_id, null, amount, notes], (error, results)=>{
                if(error){
                    console.log(error)
                    res.status(500).json({ status: error })
                    return;
                }
                res.status(201).send({ response: "success" })
        })
        } else if (voucher_type == 2 && date && amount && person_id){
             pool.query(queries.addCAcherReceiptVoucherTableData, [date, "C", null, person_id, amount, notes], (error, results)=>{
                if(error){
                    console.log(error)
                    res.status(500).json({ status: error })
                    return;
                }
                res.status(201).send({ response: "success" })
        })
        }
    } else if (query_status === "d") {
        pool.query(queries.deleteCasherReceiptVoucherTableData, [receipt_voucher_id], (error, results)=>{
            if(error){
                    console.log(error)
                    res.status(500).json({ status: error })
                    return;
                }
                res.status(201).send({ response: "success" })
        })
    } else if (query_status === "u") {
         if(voucher_type == 1 && date && amount && person_id){
            pool.query(queries.updateCasherReceiptVoucherTableData, [receipt_voucher_id, date, "S", person_id, null, amount, notes], (error, results)=>{
                if(error){
                    console.log(error)
                    res.status(500).json({ status: error })
                    return;
                }
                res.status(201).send({ response: "success" })
        })
        } else if (voucher_type == 2 && date && amount && person_id){
             pool.query(queries.updateCasherReceiptVoucherTableData, [receipt_voucher_id, date, "C", null, person_id, amount, notes], (error, results)=>{
                if(error){
                    console.log(error)
                    res.status(500).json({ status: error })
                    return;
                }
                res.status(201).send({ response: "success" })
        })
        }
    } else {
        res.status(500).json({ status: "error" })
    }
}

module.exports = {
    postCasherReceiptVoucher,
    getCasherReceiptVoucher
}