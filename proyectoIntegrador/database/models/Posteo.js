
module.exports = function (sequelize, dataTypes) {
    
    let alias = "Posteo";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: {
            type: dataTypes.INTEGER,
            
        },
        imagenPerfil: {
            type: dataTypes.STRING,
            
        },
        
        descripcionPost: {
            type: dataTypes.STRING,
            
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "posteos",
        timestamps: true,
        underscored: false,
    };

    const Posteo = sequelize.define(alias,cols,config);
    //relaciones

    Posteo.associate = function(models) {
        // Un perfil --> muchos posteos
        Posteo.belongsTo(models.Usuario , {
            as: "usuario",
            foreignKey: "idUsuario"
        }),
         // Un posteo --> muchos comentarios
        Posteo.hasMany(models.Comentario , {
            as: "comentarios",
            foreignKey: "idPost"
        })
    };

    return Posteo;
   
};