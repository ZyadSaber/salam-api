const addEmployeeLeaving = "INSERT INTO employee_leaving (employee_id, date, leaving_time, notes, over_time, early_time) VALUES ($1,$2, $3, $4, $5, $6)"
const getEmployeeLeavingData = "SELECT leaving_id, employee_id, leaving_time, notes, over_time, early_time, TO_CHAR(date:: DATE, 'mm-dd-yyyy') as date FROM employee_leaving WHERE (date BETWEEN $2 AND $3) AND employee_id = $1;"

module.exports = {
    addEmployeeLeaving,
    getEmployeeLeavingData
}