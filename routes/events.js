const express = require('express');
const ctrl = require('../controllers/events');
const ctrlWrapper = require('../utils/ctrlWrapper');
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getEvents));

module.exports = router;
