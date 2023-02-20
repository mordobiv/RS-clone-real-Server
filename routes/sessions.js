var express = require('express');
var router = express.Router();
const session_controller = require('../controllers/session');
const common_controller = require('../controllers/_common');

router.get('/', session_controller.session_all);
router.get('/:id', session_controller.session_detail);
router.post('/create', session_controller.session_create);
router.delete('/delete/:id', common_controller.delete_node);
router.put('/update/:id', common_controller.update_node);

module.exports = router;
