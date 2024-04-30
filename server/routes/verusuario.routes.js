const express = require('express');
const router = express.Router();
const controller = require('../controllers/verusuario.Controller');

router.get('/', controller.verusuario);

module.exports = router;
