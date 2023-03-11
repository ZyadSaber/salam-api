const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/logo', controller.getLogo );

module.exports = router