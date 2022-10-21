const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/customers', controller.getCustomers );
router.post('/customers_dml', controller.postCustomers );

module.exports = router