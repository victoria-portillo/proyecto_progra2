const express = require('express')
const router = express.Router()
const controller = require('../controllers/posteosController')


router.get('/principal', controller.index)
router.get('/detalle', controller.detalle)
router.get('/agregar', controller.agregarPosteo)
router.get('/busqueda', controller.buscarPosteo)





module.exports = router