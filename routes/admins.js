var express = require('express');
var router = express.Router();

const admin_controller = require('../controllers/admin');
// const common_controller = require('../controllers/_common');

// router.get('/:id', client_controller.client_detail);
router.post('/register', admin_controller.admin_create);
// router.delete('/delete/:id', common_controller.delete_node);
// router.put('/update/:id', common_controller.update_node);

module.exports = router;
