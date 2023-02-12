const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/suppliers', controller.getSuppiers);
router.post('/suppliers_dml', controller.postSuppliers );
router.get('/supplier_pop_data', controller.popSuppliers)

module.exports = router