var express = require('express');
var router = express.Router();

const doctor_controller = require('../controllers/doctor');

// router.get('/:id', doctor_controller.client_detail);
router.post('/register', doctor_controller.doctor_create);

module.exports = router;
