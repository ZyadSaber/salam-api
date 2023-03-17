const getEmployeeAttendance = "INSERT INTO employee_leaving (employee_id, date, leaving_time, notes, over_time, early_time) VALUES ($1,$2, $3, $4, $5, $6)"

module.exports = {
    getEmployeeAttendance
}