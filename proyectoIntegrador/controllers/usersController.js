const data = require('../data/db')

const controller = {
  login: function (req, res) {
    res.render('login',{
      userLogueado: false
    })
  },

  registro: function (req, res) {
    res.render('registracion',
    {
         
      userLogueado: false

})
  },

  miPerfil: function (req, res) {
    res.render('miPerfil', {
      posteos: data.posteos,
      userLogueado: true
    })
  },

  perfilEditar: function (req, res) {
    res.render('editarPerfil', {
         
      userLogueado: true

})
  },

  usuarioDetalle: function (req, res) {
    
    res.render('detalleUsuario', {
      posteos: data.posteos,
      userLogueado: true
    })
  },

  guardar : function(req, res) {

  },

  loginPost : function(req, res) {

  },

  logout : function(req, res) {

  },

  perfilEditarPost : function(req, res) {

  }



}







module.exports = controller