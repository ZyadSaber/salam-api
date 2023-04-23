const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/get_casher_receipt_voucher_invoices', controller.getCasherReceiptVoucher)
router.post('/post_casher_receipt_voucher_invoices_dml', controller.postCasherReceiptVoucher );

module.exports = router