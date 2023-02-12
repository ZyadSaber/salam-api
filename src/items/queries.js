const getItems = "SELECT * FROM items";
const getItemsByName = "SELECT * FROM items WHERE name = $1"
const checkNameExists = "SELECT s FROM customers s WHERE s.name = $1";
const addStudent = "INSERT INTO customers (name, email, phone, mobile, address) VALUES ($1,$2, $3, $4, $5)"
const checkIdExists =  "SELECT s FROM customers s WHERE s.id = $1";
const removeCustomer = "DELETE FROM customers WHERE id = $1";
const updateCustomer = "UPDATE customers SET name = $2, email = $3, phone = $4, mobile = $5, address = $6 WHERE ID = $1";
const popCustomers = "SELECT item_id, name FROM items"

module.exports =  {
    getItems,
    getItemsByName,
    checkNameExists,
    addStudent,
    removeCustomer,
    checkIdExists,
    updateCustomer,
    popCustomers
}