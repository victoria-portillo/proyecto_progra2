const moduloDatos = require('../data/db')
const db = require('../database/models')
const posteos = db.Posteo;

const controller = {

index: function(req, res){
  
    let filtro ={
        order: [[ "createdAt" , "DESC" ]],
        include: [ {association: "usuario"}, {association: "comentarios", include: [{association: "usuario"}]} ]
    };

    posteos.findAll(filtro)
    .then(function(result){
        // res.send(result)
        res.render('index', { posteosFiltro : result,
            userLogueado: false })
    })
    .catch(function(err){
        console.log(err)
    })

}
} 

module.exports = controller
