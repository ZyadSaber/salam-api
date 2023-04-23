const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/get_invoice_master', controller.getMasterTable);
router.get('/get_invoice_detail', controller.getDetailTable);
router.get('/get_customer_supplier_list', controller.getCustomerSupplierTable);

module.exports = router