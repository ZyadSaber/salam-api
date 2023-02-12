const {Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/users', controller.getUsers);
router.post('/post_users', controller.postUsers );
router.get('/pop_users', controller.popUsers);
router.post('/user_log_in', controller.userLogIn)

module.exports = router