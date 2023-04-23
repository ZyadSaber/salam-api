// const getCAcherReceiptVoucherTableData = "SELECT * FROM casher_receipt_voucher"
const getCAcherReceiptVoucherTableDataWithDate = "SELECT (SELECT name FROM suppliers WHERE supplier_id = casher_receipt_voucher.supplier_id)as supplier_name, (SELECT name FROM customers WHERE customer_id = casher_receipt_voucher.customer_id)as customer_name, receipt_voucher_id, amount, voucher_type, notes, customer_id, supplier_id , TO_CHAR(date:: DATE, 'mm-dd-yyyy') as date FROM casher_receipt_voucher WHERE date BETWEEN $1 AND $2 "
const getCAcherReceiptVoucherTableData = "SELECT (SELECT name FROM suppliers WHERE supplier_id = casher_receipt_voucher.supplier_id)as supplier_name, (SELECT name FROM customers WHERE customer_id = casher_receipt_voucher.customer_id)as customer_name, receipt_voucher_id, amount, voucher_type, notes, customer_id, supplier_id , TO_CHAR(date:: DATE, 'mm-dd-yyyy') as date FROM casher_receipt_voucher"
const addCAcherReceiptVoucherTableData = "INSERT INTO casher_receipt_voucher (date, voucher_type, supplier_id, customer_id, amount, notes) VALUES ($1,$2, $3, $4, $5, $6)"
const deleteCasherReceiptVoucherTableData = "DELETE FROM casher_receipt_voucher WHERE receipt_voucher_id = $1";
const updateCasherReceiptVoucherTableData = "UPDATE casher_receipt_voucher SET date = $2, voucher_type = $3, supplier_id = $4, customer_id = $5, amount = $6, notes = $7 WHERE receipt_voucher_id = $1"

module.exports =  {
    getCAcherReceiptVoucherTableDataWithDate,
    getCAcherReceiptVoucherTableData,
    addCAcherReceiptVoucherTableData,
    deleteCasherReceiptVoucherTableData,
    updateCasherReceiptVoucherTableData
}