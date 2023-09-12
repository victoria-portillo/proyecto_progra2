const data = require('../data/db')

const controller = {
  login: function (req, res) {
    res.render('login')
  },

  registro: function (req, res) {
    res.render('registracion')
  },

  miPerfil: function (req, res) {
    res.render('miPerfil', {
      posteos: data.posteos
    })
  },

  perfilEditar: function (req, res) {
    res.render('editarPerfil')
  },

  usuarioDetalle: function (req, res) {
    res.render('detalleUsuario', {
      posteos: data.posteos
    })
  }


}







module.exports = controller