const addEmployeeAttendance = "INSERT INTO employee_attendance (employee_id, date, attendance_time, reason, absent, late_time) VALUES ($1,$2, $3, $4, $5, $6)"
const getEmployeeAttendance = "SELECT attendance_no, attendance_time, employee_id, reason, absent, late_time, TO_CHAR(date:: DATE, 'mm-dd-yyyy') as date FROM employee_attendance WHERE (date BETWEEN $2 AND $3) AND employee_id = $1;"

module.exports =  {
    addEmployeeAttendance,
    getEmployeeAttendance
}