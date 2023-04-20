// const getCAcherReceiptVoucherTableData = "SELECT * FROM casher_receipt_voucher"
const getCAcherReceiptVoucherTableData = "SELECT receipt_voucher_id, amount, voucher_type, notes, customer_id, supplier_id , TO_CHAR(date:: DATE, 'mm-dd-yyyy') as date FROM casher_receipt_voucher WHERE date BETWEEN $1 AND $2 "
const addCustomerInvoiceItems = ""

module.exports =  {
    getCAcherReceiptVoucherTableData
}