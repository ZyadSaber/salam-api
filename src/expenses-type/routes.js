const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/expenses_types_data', controller.getExpensesTypes);
router.post('/expenses_types_dml', controller.postExpensesTypes );
router.get('/expenses_types_pop_data', controller.popExpensesTypes)

module.exports = router