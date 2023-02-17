const pool = require("../../db.js");
const queries = require('./queries');
const employees = require('../employees/queries.js');


const postEmployeeAttendance = (req, res) =>{
    const {query_status, employee_id, date, attendance_time, reason, absent} = req.body;
    if (query_status === "n") {
        if(!date){
            res.status(500).send({response: "cannot insert null into date"})
            return;
        } else if (!employee_id){
            res.status(500).send({response: "cannot insert null into employee_id"})
            return;
        } else if (!absent){
            res.status(500).send({response: "cannot insert null into absent"})
            return;
        } else if (!attendance_time){
            res.status(500).send({response: "cannot insert null into attendance_time"})
            return;
        } else if (attendance_time) {
            pool.query(employees.getEmployeeAttendanceTime, [employee_id], (error, result) => {
                if(error){
                    res.status(500).send({response: error})
                    return;
                }
                const employeeAttendanceTime = result.rows[0].attendance_time
                const attend_time = new Date(`${date} ${attendance_time}`)
                const expedited_time = new Date(`${date} ${employeeAttendanceTime}`)
                const diffHours = attend_time.getHours() - expedited_time.getHours() ;
                const diffMinutes =  attend_time.getMinutes() - expedited_time.getMinutes();
                let finalTIme 
                if(diffHours < 0){
                    finalTIme = 0
                } else if(diffMinutes < 0){
                    finalTIme = (diffHours * 60) + (diffMinutes * -1)
                } else {
                    finalTIme = (diffHours * 60) + (diffMinutes)
                }
                pool.query(queries.addEmployeeAttendance, [employee_id, date, attendance_time, reason, absent, finalTIme], (error, result)=>{
                    if(error){
                        res.status(500).send({response: error});
                        return;
                    }
                    res.send({response: "success"})
                })
            })
        }
    }
    // else if (query_status === "d") {
        
    // }else if (query_status === "u") {
        
    // }
    else{
        res.send({response: "error in JSON"})
    }
}

module.exports = {
    postEmployeeAttendance
}