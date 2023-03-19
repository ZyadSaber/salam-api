const pool = require("../../db.js");
const queries = require('./queries');
const employeeLeaving = require("../employee_leaving/queries.js");
const employeeAttendance = require("../employee_attendance/queries.js");
const employees = require("../employees/queries.js")

const getEmployeeSheet = (req, res) => {
    const {employee_id, year, month} = req.query
    if (employee_id, year, month){
        pool.query(employees.getEmployeeSalary, [employee_id], (error, employeesSalary)=>{
            if(error){
                res.status(500).send({response: error});
                return;
            }
            const employeeSalary = employeesSalary.rows[0]
            pool.query(employeeAttendance.getEmployeeAttendance, [employee_id, year, month], (error, employeeAttendance)=>{
                if (error){
                    res.status(500).send({response: error});
                    return;
                }
                const employeeAttendanceTime = employeeAttendance.rows
                pool.query(employeeLeaving.getEmployeeLeavingData, [employee_id, year, month], (error, employeeLeaving)=>{
                    if (error){
                    res.status(500).send({response: error});
                    return;
                }
                const employeeLeavingTime = employeeLeaving.rows;
                let employeeSheet = {daysData:[], total_late_time: 0, total_over_time: 0, total_early_leaving: 0, net_salary:0}
                const monthDays = ()=>{
                    let days = new Date(year, month, 0).getDate();
                    for (i = days;  i >= 1   ; i--) {
                        const day = new Date(`${year}-${month}-${i}`).getDay()
                        if ( employeeSalary.holiday && day === employeeSalary.holiday) {
                            days = days - 1
                        }
                }
                    return days;
                }
                const employeeHours = ()=>{
                    let minutesOfWork
                    const attend_time = new Date(`2023-03-01 ${employeeSalary.attendance_time}`)
                    const leavingTime = new Date(`2023-03-01 ${employeeSalary.leaving_time}`)
                    const diffHours = leavingTime.getHours() - attend_time.getHours();
                    const diffMinutes = leavingTime.getMinutes() - attend_time.getMinutes();
                    if(diffMinutes < 0){
                        minutesOfWork = (diffHours * 60) + (diffMinutes * -1)
                    }else{
                        minutesOfWork = (diffHours * 60) + (diffMinutes )
                    }
                    return minutesOfWork
                }
                const minuteCost = employeeSalary.salary/monthDays()/employeeHours()
                employeeAttendanceTime.map((attendance)=>{
                    let day={};
                    if(attendance.absent === "Y"){
                            day.date = attendance.date
                            day.attendance_time = ""
                            day.late_time = ""
                            day.late_reason = ""
                            day.leaving_time = ""
                            day.over_time = ""
                            day.early_time = ""
                            day.notes = ""
                            day.back_color = "#DB2A30"
                            employeeSheet.daysData.push(day)
                            employeeSheet.net_salary = Math.round(employeeSheet.net_salary - employeeSalary.salary/26)
                        }
                    employeeLeavingTime.map((leaving)=>{
                        if (attendance.date === leaving.date){
                            day.date = attendance.date
                            day.attendance_time = attendance.attendance_time
                            day.late_time = attendance.late_time
                            day.late_reason = attendance.reason
                            day.leaving_time = leaving.leaving_time
                            day.over_time = leaving.over_time
                            day.early_time = leaving.early_time
                            day.notes = leaving.notes
                            employeeSheet.total_late_time = employeeSheet.total_late_time + attendance.late_time
                            employeeSheet.total_over_time = employeeSheet.total_over_time + leaving.over_time
                            employeeSheet.total_early_leaving = employeeSheet.total_early_leaving + leaving.early_time
                            employeeSheet.net_salary = Math.round(minuteCost * employeeHours())
                            employeeSheet.daysData.push(day)
                        }
                    })
                })
                
                // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
               
                employeeSheet.salary = employeeSalary.salary
                employeeSheet.job_title = employeeSalary.job_title
                employeeSheet.late_cost = Math.round(minuteCost * employeeSheet.total_late_time)
                employeeSheet.over_time_cost = Math.round(minuteCost * employeeSheet.total_over_time)
                employeeSheet.net_salary = employeeSheet.net_salary - employeeSheet.late_cost + employeeSheet.over_time_cost 
                res.send(employeeSheet)
                })
            })
        })
    } else {
        res.send()
    }
}

module.exports = {
    getEmployeeSheet
}