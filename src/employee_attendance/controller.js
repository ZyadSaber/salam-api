const pool = require("../../db.js");
const queries = require('./queries');
const employees = require('../employees/queries.js');


const postEmployeeAttendance = (req, res) =>{
    const {query_status, employee_id, date, attendance_time, reason, absent} = req.body;
    if (query_status === "n") {
        if(!date){
            res.send({response: "cannot insert null into date"})
        } else if (!employee_id){
            res.send({response: "cannot insert null into employee_id"})
        } else if (!absent){
            res.send({response: "cannot insert null into absent"})
        } else if (attendance_time) {
            pool.query(employees.getEmployeeAttendanceTime, [employee_id], (error, result) => {
                if(error){
                    res.status(500).send({response: error})
                    return;
                }
                const employeeAttendanceTime = result.rows[0].attendance_time
                const realHour = employeeAttendanceTime.slice(0,2)
                const realMinute = employeeAttendanceTime.slice(3,5)
                const attendanceHour = attendance_time.slice(0,2)
                const attendanceMinute = attendance_time.slice(3,5)
                console.log(realMinute)
                console.log(attendanceMinute)
                console.log(+(realMinute-attendanceMinute))
                const finalTime = `${+(realHour-attendanceHour)}:${+(realMinute-attendanceMinute)}`
                console.log(finalTime)
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