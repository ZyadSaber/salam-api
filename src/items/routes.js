const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/items', controller.getItems );
router.post('/items_dml', controller.postItems );

module.exports = router