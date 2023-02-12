const getSuppiers = "SELECT * FROM suppliers";
const getSuppiersByName = "SELECT * FROM suppliers WHERE name = $1"
const checkNameExists = "SELECT s FROM suppliers s WHERE s.name = $1";
const addStudent = "INSERT INTO suppliers (name, email, phone, mobile, address) VALUES ($1,$2, $3, $4, $5)"
const checkIdExists =  "SELECT s FROM suppliers s WHERE s.supplier_id = $1";
const removeSuppiers = "DELETE FROM suppliers WHERE supplier_id = $1";
const updateSuppiers = "UPDATE suppliers SET name = $2, email = $3, phone = $4, mobile = $5, address = $6 WHERE supplier_id = $1"
const popSuppliers = "SELECT supplier_id, name FROM suppliers"

module.exports =  {
    getSuppiers,
    getSuppiersByName,
    checkNameExists,
    addStudent,
    removeSuppiers,
    checkIdExists,
    updateSuppiers,
    popSuppliers
}