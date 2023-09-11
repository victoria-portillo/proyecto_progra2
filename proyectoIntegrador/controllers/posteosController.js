const controller = {
    index: function(req, res){
        res.send('Aca se encuentran todos los posteos')
    },
    
    detalle: function(req, res){
        res.render('detallePost')
    },

    agregarPosteo: function(req, res){
        res.render('agregarPost')
    },
    buscarPosteo: function(req, res){
        res.render('resultadoBusqueda')
    }

    }
    
    module.exports = controller