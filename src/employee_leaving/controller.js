const pool = require("../../db.js");
const queries = require('./queries');
const employees = require('../employees/queries.js');


const postEmployeeLeaving = (req, res) => {
    const { query_status, employee_id, date, leaving_time, notes } = req.body;
    if (query_status === "n") {
        if (!date) {
            res.status(500).send({ response: "cannot insert null into date" })
            return;
        } else if (!employee_id) {
            res.status(500).send({ response: "cannot insert null into employee_id" })
            return;
        } else if (!leaving_time) {
            res.status(500).send({ response: "cannot insert null into leaving_time" })
            return;
        } else if (leaving_time) {
            pool.query(employees.getEmployeeLeavingTime, [employee_id], (error, result) => {
                if (error) {
                    res.status(500).send({ response: error })
                    return;
                }
                const employeeLeavingTime = result.rows[0].leaving_time
                const employee_leaving_time = new Date(`${date} ${leaving_time}`)
                const expedited_time = new Date(`${date} ${employeeLeavingTime}`)
                const diffHours = employee_leaving_time.getHours() - expedited_time.getHours();
                const diffMinutes = employee_leaving_time.getMinutes() - expedited_time.getMinutes();
                let overTime, earlyTime
                if (employee_leaving_time > expedited_time) {
                    overTime = Math.abs((diffHours * 60) + (diffMinutes))
                } else if (expedited_time > employee_leaving_time) {
                    earlyTime = Math.abs((diffHours * 60) + (diffMinutes))
                }
                pool.query(queries.addEmployeeLeaving, [employee_id, date, leaving_time, notes, overTime, earlyTime], (error, result) => {
                    if (error) {
                        res.status(500).send({ response: error });
                        return;
                    }
                    res.send({ response: "success" })
                })
            })
        }
    }
    // else if (query_status === "d") {

    // }else if (query_status === "u") {

    // }
    else {
        res.send({ response: "error in JSON" })
    }
}

module.exports = {
    postEmployeeLeaving
}