const addCustomerInvoice = "INSERT INTO customer_invoices (customer_invoice_id, customer_id, date, invoice_note, total, discount, total_after_discount, paid, credit) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
const addCustomerInvoiceItems = "INSERT INTO customer_invoices_items_details (customer_invoice_id, print_id, item_id, width, height, size, quantity, price, total, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
const popCustomerInvoices = "SELECT customer_invoice_id, customer_id, date, total_after_discount FROM customer_invoices";
const getCustomersName = "SELECT name, customer_id FROM customers";

module.exports =  {
    addCustomerInvoice,
    addCustomerInvoiceItems,
    popCustomerInvoices,
    getCustomersName
}