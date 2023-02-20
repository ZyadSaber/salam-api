const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get('/get_labels', controller.getLabels);
// router.post('/customers_dml', controller.postCustomers );
// router.get('/customer_pop_data', controller.popCustomers)

module.exports = router