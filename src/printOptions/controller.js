const pool = require("../../db.js");
const queries = require('./queries');

const getPrintOptions = (req, res) =>{
     pool.query(queries.getPrintOptions, (error, results)=>{
        if (error){
             res.send(error)
            return;
        }
        let Response = (results.rows)
        Response.forEach((obj)=>{obj.query_status = "q"})
        res.status(200).send(Response)
    })
}

const postPrintOption = (req, res) =>{
    const {print_option, note, print_id, query_status} = req.body;
    if (query_status === "n") {
        //add Suppiers
        if (print_option !== undefined) {
    pool.query(queries.checkOptionExists, [print_option], (error, results)=>{
        if (results.rows.length){
            res.status(406).send({success: "name already exist"})
            return
        }
    //postSuppliers
    pool.query(queries.addPrintOption, [print_option, note], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send({success: "success"})
    })
    })
    }else{
        res.status(406).send({success: "Cannot insert Null into name"})
        return
    }
    }else if (query_status === "d") {
        pool.query(queries.checkIdExists, [print_id], (error, results) => {
        const noPrintId = !results.rows.length;
        if(noPrintId) {
            res.status(406).send({success: "Cannot Delete Null"})    
            return;
        }
        pool.query(queries.removePrintOption, [print_id], (error, results) => {
            if (error) {
            res.send(error.detail)
            return;
        };
        res.status(201).send({success: "success"})
        })
    })
    }else if (query_status === "u") {
        pool.query(queries.updatePrintOption, [print_id, print_option, note], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send({success: "success"})
    })
    }else{
        res.status(406).send({response: "error"})
    }
}

const popPrintOptions = (req, res) =>{
    pool.query(queries.popPrintOptions, (error, results)=>{
        if (error){
            res.send(error)
            return;
        }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.value = item.print_id
            data.label = item.print_option
            Response.push(data)
        })
        res.status(200).send(Response)
    })
}

module.exports = {
    getPrintOptions,
    postPrintOption,
    popPrintOptions
}