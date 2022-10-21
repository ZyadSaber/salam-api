const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/suppliers', controller.getSuppiers);
router.post('/suppliers_dml', controller.postSuppliers );

module.exports = router