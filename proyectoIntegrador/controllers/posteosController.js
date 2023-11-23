
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
            include: [{ association: "usuario" }, { association: "comentarios", include: [{ association: "usuario" }] }]
        };

        posteos.findByPk(id, filtro)
            .then(function (result) {
                if (result == null) {
                    res.send("No se encontró el posteo")
                } else {
                    res.render('detallePost', { posteo: result, userLogueado: true })
                }
            })
            .catch(function (error) {
                res.send(error)
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

        if (req.body.imagenPosteo === "") {
            res.send("No puede quedar vacío el campo de imagen")
        } else {
            posteoNuevo.imagenPerfil = req.body.imagenPosteo
        }

        if (req.body.descripcionPosteo === "") {
            res.send("No puede quedar vacío el campo de descripción")
        } else {
            posteoNuevo.descripcionPost = req.body.descripcionPosteo
        }

        posteoNuevo.idUsuario = req.session.user.id

        posteos.create(posteoNuevo)
            .then(function (resultado) {
                res.redirect("/posteos/detalle/" + resultado.id)
            })
            .catch(function (error) {
                res.send(error)
            })

    },

    funcionEditar: function (req,res) {
        let id = req.params.id
        let filtro = {
            include: [{
              all: true,
              nested: true
            }]
          }; 

          let errores = {}

        posteos.findByPk(id, filtro)
        .then((result) => {
            if (req.session.user && req.session.user.id === result.idUsuario){
                return res.render("editarPosteo", {posteo:result});
             } else {
                errores.message = "Este posteo no le pertenece, no tiene permiso para editarlo"
                res.locals.errores = errores
                return res.render('detallePost', {posteo:result});
        }}).catch((err) => {
            console.log("Error encontrado" + err)
        });
     },

     funcionGuardar: function (req,res) {
        let info = req.body
        let id = req.params.id
        filtro = { where :[{id : id}]}

        posteos.update(info,filtro)
        .then((result) => {
            return res.redirect("/posteos/detalle/" + id)
        }).catch((err) => {
            console.log(err)
            
        })

    },

    funcionComentar: function (req, res) {
            if (req.session.user) {
                let comentarioNuevo = {
                    idUsuario : req.session.user.id,
                    idPost : req.params.id,
                }
    
                if ( req.body.comentario === "" ) {
                    res.send("No puede quedar vacío el campo de comentario")
                } else {
                    comentarioNuevo.comentario = req.body.comentario
                }
    
                comentario.create(comentarioNuevo)
                    .then(function(resultado) {
                        res.redirect("/posteos/detalle/" + req.params.id)
                    })
                    .catch(function(error) {
                        res.send(error)
                    })
    
            } else {
    
                res.locals.error = "No puede comentar si no está logueado"
                res.render('detallePost')
    
            };
        
    


   
}}







module.exports = controller