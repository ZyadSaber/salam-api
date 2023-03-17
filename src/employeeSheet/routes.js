const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get('/employee_sheet', controller.getEmployeeSheet);

module.exports = router