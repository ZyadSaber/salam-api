const addSupplierInvoice = "INSERT INTO supplier_invoices (supplier_invoice_id, supplier_id, date, invoice_note, total, discount, total_after_discount, paid, credit) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
const addSupplierInvoiceItems = "INSERT INTO supplier_invoices_items_details (supplier_invoice_id, item_id, width, height, size, quantity, price, total, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
const popSupplierInvoices = "SELECT supplier_invoice_id, supplier_id, date, total_after_discount FROM supplier_invoices"
const getSuppliersName = "SELECT name, supplier_id FROM suppliers";
const addItemInventory = "INSERT INTO item_inventory (supplier_invoice_id, item_id, in_inv, out_inv) VALUES ($1, $2, $3, 0)"

module.exports =  {
    addSupplierInvoice,
    addSupplierInvoiceItems,
    popSupplierInvoices,
    getSuppliersName,
    addItemInventory
}