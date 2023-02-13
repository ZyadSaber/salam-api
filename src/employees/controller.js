const pool = require("../../db.js");
const queries = require('./queries');

const getEmployees = (req, res) =>{
    const {name} = req.query
if (!name || name === "") {
     pool.query(queries.getEmployees, (error, results)=>{
        if (error){
             res.send(error)
            return;
        }
        let Response = (results.rows)
        Response.forEach((obj)=>{obj.query_status = "q"})
        res.status(200).send(Response)
    })
} else {
    pool.query(queries.getEmployeesByName, [name], (error, results)=>{
        if (error) {
             res.send(error)
            return;
        };
        res.status(200).json(results.rows)
    })
}
}

const postEmployees = (req, res) =>{
    const {employee_id, name, date_of_hiring, address, phone, mobile, job_title, email, salary, attendance_time, leaving_time, query_status} = req.body;
    if (query_status === "n") {
        if (name !== undefined) {
    pool.query(queries.checkNameExists, [name], (error, results)=>{
        if (results.rows.length){
            res.send("name already exist")
            return
        }
    pool.query(queries.addEmployee, [name, date_of_hiring, address, phone, mobile, job_title, email, salary, attendance_time, leaving_time], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send({response: "Success"})
    })
    })
    }else{
        res.send({response: "Cannot insert Null into name"})
        return
    }
    }else if (query_status === "d") {
        // delete customer
        pool.query(queries.checkIdExists, [employee_id], (error, results) => {
        const noCustomerFound = !results.rows.length;
        if(noCustomerFound) {
            res.send("Cannot Delete Null")
            return;
        }
        pool.query(queries.removeCustomer, [employee_id], (error, results) => {
            if (error) {
            res.send(error.detail)
            return;
        };
        res.status(200).send({response: success})
        })
    })
    }else if (query_status === "u") {
        pool.query(queries.updateCustomer, [employee_id, name, date_of_hiring, address, phone, mobile, job_title, email, salary, attendance_time, leaving_time], (error, results)=>{
        if (error) {
             res.send(error.detail)
             return;
        };
        res.status(201).send({response: success})
    })
    }else{
        res.send(`query_status is ${query_status}`)
    }
}

const popEmployeeNameList = (req, res) =>{
    pool.query(queries.popEmployeeNameList, (error, results)=>{
        if (error){
            res.send(error)
            return;
        }
        const Results = results.rows
        const Response = []
        Results.map((item)=>{
            let data = {}
            data.value = item.employee_id
            data.label = item.name
            Response.push(data)
        })
        res.status(200).send(Response)
    })
}

module.exports = {
    getEmployees,
    postEmployees,
    popEmployeeNameList
}