const express = require('express');
const router = express.Router();
const controller = require('../controllers/verconsulta.Controller');

router.get('/', controller.verconsulta);

module.exports = router;