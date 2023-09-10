const controller = {
    login: function(req, res){
      res.render('login')
  },
  
  registro:function(req, res){
    res.render('registracion')
    },
  
    miPerfil: function(req, res){
      res.render('miPerfil')
      },
  
   perfilEditar: function(req, res){
        res.render('editarPerfil')
        },

    usuarioDetalle: function(req, res){
        res.render('detalleUsuario')
        }
      }



  
    
      
  
  module.exports = controller