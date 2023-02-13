const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/employees', controller.getEmployees );
router.post('/employees_dml', controller.postEmployees );
router.get('/pop_employee_name', controller.popEmployeeNameList)

module.exports = router