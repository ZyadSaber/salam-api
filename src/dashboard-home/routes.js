const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/dash_board_get_data', controller.getDashBoard);

module.exports = router