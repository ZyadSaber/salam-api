const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/print_options', controller.getPrintOptions);
router.post('/print_options_dml', controller.postPrintOption );
router.get('/print_options_pop_data', controller.popPrintOptions)

module.exports = router