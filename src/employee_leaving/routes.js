const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.post('/employee_leaving_dml', controller.postEmployeeLeaving);

module.exports = router