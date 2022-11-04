const getEmployees = "SELECT * FROM employees";
const getEmployeesByName = "SELECT * FROM employees WHERE name = $1"
const checkNameExists = "SELECT s FROM employees s WHERE s.name = $1";
const addStudent = "INSERT INTO employees (name, email, phone, mobile, address) VALUES ($1,$2, $3, $4, $5)"
const checkIdExists =  "SELECT s FROM employees s WHERE s.id = $1";
const removeCustomer = "DELETE FROM employees WHERE id = $1";
const updateCustomer = "UPDATE employees SET name = $2, email = $3, phone = $4, mobile = $5, address = $6 WHERE ID = $1"

module.exports =  {
    getEmployees,
    getEmployeesByName,
    checkNameExists,
    addStudent,
    removeCustomer,
    checkIdExists,
    updateCustomer
}