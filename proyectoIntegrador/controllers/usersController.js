const db = require('../database/models')
const usuarios = db.Usuario
const bcrypt = require('bcryptjs');

const controller = 
{
  
  login: function (req, res) {
  if (req.session.user != undefined) {
      return res.redirect('/')
  } else {
      return res.render('login');
  }
},

loginPost: function (req, res) {
  let errores = {}

  usuarios.findOne({
      where: [{
          email: req.body.email
      }]
  })

      .then(function (user) {
          if (user) {
              let compare = bcrypt.compareSync(req.body.contrasenia, user.clave);
              if (compare) {
                  req.session.user = user.dataValues;

                  if (req.body.recordarme) {
                      res.cookie('userId', user.dataValues.id, {
                          maxAge: 1000 * 60 * 100
                      })
                  }
                  return res.redirect('/');

              } else {
                  errores.message = "Contraseña incorrecta"
                  res.locals.errores = errores
                  return res.render('login');
              }

          } else {
              errores.message = "Ese mail no existe"
              res.locals.errores = errores
              return res.render('login');
          }
      })
      .catch(error => console.log(error))

},
  
  registro: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect('/')
    } else {
      return res.render('registracion')
    }
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

  guardar: function (req, res) {

    let errores = {}

    if (req.body.nombreUsuario == '') {
      errores.message = "Debe completar el nombre de usuario"
      res.locals.errores = errores
      return res.render('registracion');
    } else if (req.body.email == '') {
      errores.message = "El email es obligatorio"
      res.locals.errores = errores
      return res.render('registracion');
    } else if (req.body.contrasenia == '') {
      errores.message = "Se necesita contraseña"
      res.locals.errores = errores
      return res.render('registracion');
    } else if (req.body.contrasenia.length < 3) {
      errores.message = "La contraseña tiene que tener al menos 3 caracteres"
      res.locals.errores = errores
      return res.render('registracion');
    } else {
      usuarios.findOne({
        where: [{
          email: req.body.email
        }]
      })
        .then(function (user) {
          if (user !== null) {
            errores.message = "Ese correo ya existe, por favor ingresar otro"
            res.locals.errores = errores
            return res.render('registracion');
          } else {
            usuarios.findOne({
              where: [{
                nombre: req.body.nombreUsuario
              }]
            })
              .then(function (user) {
                if (user !== null) {
                  errores.message = "Ese nombre de usuario ya existe, elija otro"
                  res.locals.errores = errores
                  return res.render('registracion');
                } else {
                  let user = {
                    email: req.body.email,
                    nombre: req.body.nombreUsuario,
                    clave: bcrypt.hashSync(req.body.contrasenia, 10),
                    fecha: req.body.fechaNacimiento,
                    dni: req.body.dni,
                    fotoDePerfil: req.body.fotoPerfil
                  }
                  usuarios.create(user)
                    .then(function (respuesta) {
                      return res.redirect('/')
                    })
                    .catch(error => {
                      console.log(error)
           
                   })
                }
              })
              .catch(error => {
                console.log(error)
     
     res.send(error)         })
          }
        })
        .catch(error => {
          console.log(error)
          res.send(error)
        })
    }
  },

 

  logout: function (req, res) {

  },

  perfilEditarPost: function (req, res) {

  }



}







module.exports = controller