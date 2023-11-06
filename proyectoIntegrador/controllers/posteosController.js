
const db = require("../database/models");
const op = db.Sequelize.Op
const posteos = db.Posteo;
const usuario = db.Usuario;
const comentario = db.Comentario;


const controller = {
   
    detalle: function (req, res) {
        let id = req.params.id;

        let filtro = {
            include: [ {association: "usuario"}, {association: "comentarios", include: [{association: "usuario"}]} ]
        };

        posteos.findByPk(id, filtro)
            .then(function(result) {
                if (result == null) {
                    res.send("No se encontró el posteo")
                } else {
                    res.render('detallePost', { posteo : result, userLogueado: true })
                }
            })
            .catch(function(error) {
                res.send(error)
            })
    },
    agregarPosteo: function(req, res){
        res.render('agregarPost', {
         
            userLogueado: true
      
      })
        
    },
    buscarPosteo: function(req, res){
        res.render('resultadoBusqueda', {
            nombre: req.query.posteo,
            
            userLogueado: true,
            posteos: datos.posteos,

      
      })
    },

    funcionAgregar: function(req, res){

    },

    funcionComentar: function(req, res){
        
    },

    funcionBorrar: function(req, res){
        
    }

    }
    
    module.exports = controller