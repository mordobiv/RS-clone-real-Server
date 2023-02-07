var express = require('express');
var router = express.Router();

const specialization_controller = require('../controllers/specialization');

router.get('/', specialization_controller.specialization_all);
router.get('/:id', specialization_controller.specialization_detail);
router.post('/create', specialization_controller.specialization_create);
// router.post('/update/:id', client_controller.client_create);
// router.post('/delete/:id', client_controller.client_create);

module.exports = router;
