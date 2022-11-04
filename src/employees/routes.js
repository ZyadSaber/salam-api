const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/employees', controller.getEpmployees );
router.post('/employees_dml', controller.postCustomers );

module.exports = router