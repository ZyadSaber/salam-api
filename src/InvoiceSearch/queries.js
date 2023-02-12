const getCustomersInvoicesAndID = "SELECT customer_id, customer_invoice_id, date, total_after_discount FROM customer_invoices WHERE customer_invoice_id LIKE '%' || $1 || '%' AND  customer_id = $2 ";
const getCustomersInvoices = "SELECT customer_id, customer_invoice_id, date, total_after_discount FROM customer_invoices WHERE customer_invoice_id LIKE '%' || $1 || '%'";
const getSupplierInvoicesAndID = "SELECT supplier_id, supplier_invoice_id, date, total_after_discount FROM supplier_invoices WHERE supplier_invoice_id LIKE '%' || $1 || '%' AND  supplier_id = $2 ";
const getSupplierInvoices = "SELECT supplier_id, supplier_invoice_id, date, total_after_discount FROM supplier_invoices WHERE supplier_invoice_id LIKE '%' || $1 || '%'";
const getSupplierInvoiceDetails = "SELECT row_key, item_id, width, height, size, quantity, price, total  FROM supplier_invoices_items_details WHERE supplier_invoice_id = $1";
const getCustomerInvoiceDetails = "SELECT row_key, item_id, width, height, size, quantity, price, total  FROM customer_invoices_items_details WHERE customer_invoice_id = $1"

module.exports = {
    getCustomersInvoices,
    getCustomersInvoicesAndID,
    getSupplierInvoices,
    getSupplierInvoicesAndID,
    getSupplierInvoiceDetails,
    getCustomerInvoiceDetails
}