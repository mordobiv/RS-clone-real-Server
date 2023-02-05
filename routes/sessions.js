var express = require('express');
var router = express.Router();
const session_controller = require('../controllers/session');

router.get('/', session_controller.session_all);
router.post('/create', session_controller.session_create);

module.exports = router;
