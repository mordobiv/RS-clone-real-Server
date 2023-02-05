var express = require('express');
var router = express.Router();

const client_controller = require('../controllers/client');

router.get('/:id', client_controller.client_detail);
router.post('/register', client_controller.client_create);

module.exports = router;
