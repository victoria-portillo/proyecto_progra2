module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            
            primaryKey: true,
            
            autoIncrement: true
        } ,
        email: {
            type: dataTypes.STRING,
            
            
        } ,
        clave: {
            type: dataTypes.STRING,
            
        }, 
        fotoDePerfil:{
            type: dataTypes.STRING
        } ,
        dni: {
            type: dataTypes.INTEGER,
            
            
        } ,
        fecha: {
            type: dataTypes.DATE,
            
        } ,
        createdAt:{
            type: dataTypes.DATE,
        } ,
        updatedAt: {
            type: dataTypes.DATE,
        } ,
        deletedAt: {
            type: dataTypes.DATE,
        },
    };

    let config = {
        tableName: "Usuario",
        timestamps: true,
        underscored: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto , {
            as: "posteos",
            foreignKey: "idUsuario"
        })
        Usuario.hasMany(models.Comentario , {
            as: "comentarios",
            foreignKey: "idUsuario"
        })
    }


    return Usuario;
}