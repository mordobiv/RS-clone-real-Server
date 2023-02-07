var express = require('express');
var router = express.Router();
const session_controller = require('../controllers/session');

router.get('/', session_controller.session_all);
router.get('/:id', session_controller.session_detail);
router.post('/create', session_controller.session_create);
// router.post('/update/:id', client_controller.client_create);
// router.post('/delete/:id', client_controller.client_create);

module.exports = router;
