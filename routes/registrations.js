const express = require('express');
const ctrl = require('../controllers/registrations');
const ctrlWrapper = require('../utils/ctrlWrapper');
const router = express.Router();

router.get('/:eventId', ctrlWrapper(ctrl.getEventRegistrations));
router.post('/', ctrlWrapper(ctrl.addRegistration));

module.exports = router;
