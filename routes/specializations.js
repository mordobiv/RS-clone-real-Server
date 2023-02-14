var express = require('express');
var router = express.Router();

const specialization_controller = require('../controllers/specialization');
const common_controller = require('../controllers/_common');

router.get('/', specialization_controller.specialization_all);
router.get('/:id', specialization_controller.specialization_detail);
router.post('/create', specialization_controller.specialization_create);
router.delete('/delete/:id', common_controller.delete_node);
router.put('/update/:id', common_controller.update_node);

module.exports = router;
