const data = require('../data/db')

const controller = {
    index: function(req, res){
        res.render('index', {
              posteos: data.posteos
        })
    }
}

module.exports = controller