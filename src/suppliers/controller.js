const pool = require("../../db.js");
const queries = require('./queries');

const getSuppiers = (req, res) =>{
    const {name} = req.query
if (!name || name === "") {
     pool.query(queries.getSuppiers, (error, results)=>{
        if (error){
             res.send(error)
            return;
        }
        let Response = (results.rows)
        Response.forEach((obj)=>{obj.query_status = "q"})
        res.status(200).send(Response)
    })
} else {
    pool.query(queries.getSuppiersByName, [name], (error, results)=>{
        if (error) {
             res.send(error)
            return;
        };
        res.status(200).json(results.rows)
    })
}
}

const postSuppliers = (req, res) =>{
    const {name, email, phone, mobile, address, query_status, supplier_id} = req.body;
    if (query_status === "n") {
        //add Suppiers
        if (name !== undefined) {
    pool.query(queries.checkNameExists, [name], (error, results)=>{
        if (results.rows.length){
            res.send("name already exist")
            return
        }
    //postSuppliers
    pool.query(queries.addStudent, [name, email, phone, mobile, address], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send({success: "success"})
    })
    })
    }else{
        res.send("Cannot insert Null into name")
        return
    }
    }else if (query_status === "d") {
        // delete Suppiers
        pool.query(queries.checkIdExists, [supplier_id], (error, results) => {
        const noSuppiersFound = !results.rows.length;
        if(noSuppiersFound) {
            res.send("Cannot Delete Null")
            return;
        }
        pool.query(queries.removeSuppiers, [supplier_id], (error, results) => {
            if (error) {
            res.send(error.detail)
            return;
        };
        res.status(200).send({success: "success"})
        })
    })
    }else if (query_status === "u") {
        pool.query(queries.updateSuppiers, [supplier_id, name, email, phone, mobile, address], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send({success: "success"})
    })
    }else{
        res.send(`query_status is ${query_status}`)
    }
}

module.exports = {
    getSuppiers,
    postSuppliers,
}