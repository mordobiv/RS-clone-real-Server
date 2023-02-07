var express = require('express');
var router = express.Router();

const doctor_controller = require('../controllers/doctor');
const common_controller = require('../controllers/_common');

router.get('/', doctor_controller.doctor_all);
router.get('/:id', doctor_controller.doctor_detail);
router.post('/register', doctor_controller.doctor_create);
router.delete('/delete/:id', common_controller.delete_node);
router.put('/update/:id', common_controller.update_node);

module.exports = router;
