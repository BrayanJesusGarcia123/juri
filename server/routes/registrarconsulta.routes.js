const express = require('express');
const router = express.Router();
const controller = require('../controllers/registrarconsulta.Controller');

router.get('/', controller.registrarconsulta);

module.exports = router;