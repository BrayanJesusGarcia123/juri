const express = require('express');
const router = express.Router();
const controller = require('../controllers/registrarusuario.Controller');

router.get('/', controller.registrarusuario)



module.exports = router;
