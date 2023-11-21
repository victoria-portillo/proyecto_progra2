
const db = require("../database/models");
const op = db.Sequelize.Op
const posteos = db.Posteo;
const usuario = db.Usuario;
const comentario = db.Comentario;


const controller = {
   
    detalle: function (req, res) {
        let id = req.params.id;
        console.log(id);
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
   
    buscarPosteo: function (req, res) {
        let busqueda = req.query.buscador;

        let filtro = {
            include: {
                all: true,
                nested: true
            },
            where: [
                {
                    [op.or]: [
                        { descripcionPost: { [op.like]: '%' + busqueda + '%' } },
                        { imagenPerfil: { [op.like]: '%' + busqueda + '%' } }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        }
        posteos.findAll(filtro)
            .then((result) => {
                return res.render("resultadoBusqueda", {
                    busqueda: busqueda,
                    posteos: result
                })

            })
            .catch((err) => {
                console.log(err);
            })
    },

    funcionAgregar: function (req, res) {
        let posteoNuevo = {}

        if ( req.body.imagenPosteo === "" ) {
            res.send("No puede quedar vacío el campo de imagen")
        } else {
            posteoNuevo.imagenPerfil = req.body.imagenPosteo
        }

        if ( req.body.descripcionPosteo === "" ) {
            res.send("No puede quedar vacío el campo de descripción")
        } else {
            posteoNuevo.descripcionPost = req.body.descripcionPosteo
        }

        posteoNuevo.idUsuario = req.session.user.id

        posteos.create( posteoNuevo)
            .then(function(resultado) {
                res.redirect("/posteos/detalle/" + resultado.id)
            })
            .catch(function(error) {
                res.send(error)
            })

    },



    funcionComentar: function(req, res){
        
    },

    funcionBorrar: function(req, res){
        
    }

    }
    
    module.exports = controller