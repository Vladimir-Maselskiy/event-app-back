const express = require('express');
const ctrl = require('../controllers/cron');
const ctrlWrapper = require('../utils/ctrlWrapper');
const router = express.Router();

router.post('/', ctrlWrapper(ctrl.cron));

module.exports = router;
