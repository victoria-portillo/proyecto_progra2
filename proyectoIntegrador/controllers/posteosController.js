const datos = require('../data/db')

const controller = {
   
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
            return res.render('detallePost', { listaId: filtradoId,
                userLogueado: true
            })
        }
        

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
    }

    }
    
    module.exports = controller