const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController')

/* GET users listing. */
router.get('/login', controller.login)
router.get('/registrar', controller.registro)
router.get('/perfil', controller.miPerfil)
router.get('/editarPerfil', controller.perfilEditar)
router.get('/detalleUsuario', controller.usuarioDetalle)



module.exports = router;