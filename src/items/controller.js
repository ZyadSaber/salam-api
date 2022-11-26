const pool = require("../../db.js");
const queries = require('./queries');

const getItems = (req, res) =>{
    const {name} = req.query
if (!name || name === "") {
     pool.query(queries.getItems, (error, results)=>{
        if (error){
             res.send(error)
             return;
        }
        let Response = (results.rows)
        Response.forEach((obj)=>{obj.query_status = "q"})
        res.status(200).send(Response)
    })
} else {
    pool.query(queries.getItemsByName, [name], (error, results)=>{
        if (error) {
             res.send(error)
            return;
        };
        res.status(200).json(results.rows)
    })
}
}

const postItems = (req, res) =>{
    const {name, email, phone, mobile, address, query_status, id} = req.body;
    if (query_status === "n") {
        //add Customer
        if (name !== undefined) {
    pool.query(queries.checkNameExists, [name], (error, results)=>{
        if (results.rows.length){
            res.send("name already exist")
            return
        }
    //postCustomers
    pool.query(queries.addStudent, [name, email, phone, mobile, address], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send("{success: success}")
    })
    })
    }else{
        res.send("Cannot insert Null into name")
        return
    }
    }else if (query_status === "d") {
        // delete customer
        pool.query(queries.checkIdExists, [id], (error, results) => {
        const noCustomerFound = !results.rows.length;
        if(noCustomerFound) {
            res.send("Cannot Delete Null")
            return;
        }
        pool.query(queries.removeCustomer, [id], (error, results) => {
            if (error) {
            res.send(error.detail)
            return;
        };
        res.status(200).send("{success: success}")
        })
    })
    }else if (query_status === "u") {
        pool.query(queries.updateCustomer, [id, name, email, phone, mobile, address], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send("{success: success}")
    })
    }else{
        res.send(`query_status is ${query_status}`)
    }
}
const popItems = (req, res) =>{
    pool.query(queries.popCustomers, (error, results)=>{
        if (error){
            res.send(error)
            return;
        }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.value = item.item_id
            data.label = item.name
            Response.push(data)
        })
        res.status(200).send(Response)
    })
} 

module.exports = {
    getItems,
    popItems,
    postItems
}