const express = require('express')
const router = express.Router()
const controller = require('../controllers/posteosController')



router.get('/detalle/:id', controller.detalle)

router.get('/busqueda', controller.buscarPosteo)

router.post('/comentar', controller.funcionComentar)


// // FUNCIONALIDAD ASOCIADA A LA VISTA DE AGREGAR Posteo

router.post('/agregar', controller.funcionAgregar)
router.get('/agregar', controller.agregarPosteo)



router.post("/borrar/:id", controller.funcionBorrar)



// // FUNCIONALIDAD ASOCIADA A LA VISTA DE EDITAR PRODUCTO

router.get("/editar/:id", controller.funcionEditar); 
router.post("/editar/:id", controller.funcionGuardar); 


module.exports = router