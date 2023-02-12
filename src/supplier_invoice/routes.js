const {Router} = require('express');
const controller = require("./controller");

const router = Router();

// router.get('/supplier_invoice', controller.getCustomers );
router.post('/supplier_invoice_dml', controller.postSupplierInvoice );
router.get('/pop_supplier_invoices', controller.popSupplierInvoices);

module.exports = router