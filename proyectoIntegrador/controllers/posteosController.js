const datos = require('../data/db')

const controller = {
    index: function(req, res){
        res.send('Aca se encuentran todos los posteos')
    },
    
    detalle: function (req, res) {
        const parametro = req.params.id;
        let filtradoId = [];


        for (let i = 0; i < datos.posteos.length; i++) {

            if (parametro == datos.posteos[i].id) {
                filtradoId.push(datos.posteos[i]);
            }
        }
        console.log(filtradoId)
        if (filtradoId.length == 0) {
            return res.send("No hay posteo con ese id: " + parametro)
        } else {
            return res.render('detallePost', { listaId: filtradoId })
        }

    },

    agregarPosteo: function(req, res){
        res.render('agregarPost')
    },
    buscarPosteo: function(req, res){
        res.render('resultadoBusqueda')
    }

    }
    
    module.exports = controller