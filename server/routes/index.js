const express = require('express')
const dashboard = require('./dashboard.routes')
const login = require('./login.routes')
const registrarusuario = require('./registrarusuario.routes')
const verusuario = require('./verusuario.routes')
const asignarconsulta = require('./asignarconsulta.routes')
const verasignacion = require('./verasignacion.routes')
const registrarconsulta = require('./registrarconsulta.routes')
const verconsulta = require('./verconsulta.routes')
const verseguimiento = require('./verseguimiento.routes')

const router = express.Router();

router.use('/dashboard', dashboard);
router.use('/login', login);
router.use('/registrarusuario', registrarusuario);
router.use('/verusuario', verusuario);
router.use('/asignarconsulta', asignarconsulta);
router.use('/verasignacion', verasignacion);
router.use('/registrarconsulta', registrarconsulta);
router.use('/verconsulta', verconsulta);
router.use('/verseguimiento', verseguimiento);



router.get('/', (req, res) => {
    res.redirect('/auth/')
})

router.get('/404', (req, res) => {
    res.render('layouts/404')
})


module.exports = router