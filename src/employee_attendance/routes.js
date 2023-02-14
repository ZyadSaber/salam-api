const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.post('/employee_attendance_dml', controller.postEmployeeAttendance );

module.exports = router