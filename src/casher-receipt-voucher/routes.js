const {Router} = require('express');
const controller = require("./controller");

const router = Router();

// router.get('/supplier_invoice', controller.getCustomers );
router.post('/customer_invoice_dml', controller.postCasherReceiptVoucher );
router.get('/pop_customer_invoices', controller.getCasherReceiptVoucher)

module.exports = router