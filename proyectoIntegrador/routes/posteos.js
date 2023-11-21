const express = require('express')
const router = express.Router()
const controller = require('../controllers/posteosController')



router.get('/detalle/:id', controller.detalle)
router.get('/agregar', controller.agregarPosteo)
router.get('/busqueda', controller.buscarPosteo)


// // FUNCIONALIDAD ASOCIADA A LA VISTA DE AGREGAR Posteo
router.post('/agregar', controller.funcionAgregar)


// // FUNCIONALIDADES ASOCIADAS AL DETALLE DE UN Posteo
router.post('/comentar', controller.funcionComentar)
router.post('/borrar', controller.funcionBorrar)



module.exports = router