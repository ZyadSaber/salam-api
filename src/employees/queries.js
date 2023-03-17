const getEmployees = "SELECT * FROM employees";
const getEmployeesByName = "SELECT * FROM employees WHERE name = $1"
const checkNameExists = "SELECT s FROM employees s WHERE s.name = $1";
const addEmployee = "INSERT INTO employees (name, date_of_hiring, address, phone, mobile, job_title, email, salary, attendance_time, leaving_time) VALUES ($1,$2, $3, $4, $5, $6, $7, $8, $9, $10)"
const checkIdExists =  "SELECT s FROM employees s WHERE s.employee_id = $1";
const removeCustomer = "DELETE FROM employees WHERE employee_id = $1";
const updateCustomer = "UPDATE employees SET name = $2, date_of_hiring = $3, address = $4, phone = $5, mobile = $6, job_title = $7, email = $8, salary = $9, attendance_time = $10, leaving_time = $11 WHERE employee_id = $1"
const popEmployeeNameList = "SELECT name, employee_id FROM employees";
const getEmployeeAttendanceTime = "SELECT attendance_time FROM employees WHERE employee_id = $1";
const getEmployeeLeavingTime = "SELECT leaving_time FROM employees WHERE employee_id = $1";
const getEmployeeSalary = "SELECT job_title, salary FROM employees WHERE employee_id = $1"

module.exports =  {
    getEmployees,
    getEmployeesByName,
    checkNameExists,
    addEmployee,
    removeCustomer,
    checkIdExists,
    updateCustomer,
    popEmployeeNameList,
    getEmployeeAttendanceTime,
    getEmployeeLeavingTime,
    getEmployeeSalary
}