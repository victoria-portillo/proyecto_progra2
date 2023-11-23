const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController')

/* GET users listing. */

//Detalle usuario

router.get('/detalleUsuario', controller.usuarioDetalle)

// REGISTER
router.get('/registrar', controller.registro); 
router.post('/registrar', controller.guardar); 

// LOGIN
router.get('/login', controller.login);
router.post('/login', controller.loginPost);

//LOGOUT
router.post('/logout', controller.logout);

//PROFILE
router.get('/perfil/:id?', controller.miPerfil)

//EDIT
router.get('/editarPerfil/:id', controller.perfilEditar);
router.post('/editarPerfil/:id', controller.perfilEditarPost);




module.exports = router;