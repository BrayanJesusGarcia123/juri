const express = require('express');
const router = express.Router();
const controller = require('../controllers/login.Controller');

router.get('/', controller.login);

module.exports = router;