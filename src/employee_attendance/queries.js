const addEmployeeAttendance = "INSERT INTO employee_attendance (employee_id, date, attendance_time, reason, absent) VALUES ($1,$2, $3, $4, $5)"

module.exports =  {
    addEmployeeAttendance
}