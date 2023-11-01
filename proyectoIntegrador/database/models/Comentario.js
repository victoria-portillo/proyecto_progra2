module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        idPost: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false,
        },
        idUsuario: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: false,
        },
        comentario: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        createdAt:{
            type: dataTypes.DATE,
        } ,
        updatedAt: {
            type: dataTypes.DATE,
        } ,
        deletedAt: {
            type: dataTypes.DATE,
        }
        
        
    };
    let config = {
        tableName: "Comentario",
        timestamps: true,
        underscored: false,
    };

    const Comentario = sequelize.define(alias,cols,config);
    //relaciones

    Comentario.associate = function(models) {
        // Un perfil --> muchos comentarios
        Comentario.belongsTo(models.Usuario , {
            as: "usuario",
            foreignKey: "idUsuario"
        }),
        // Un posteo --> muchos comentarios
        Comentario.belongsTo(models.Producto , {
            as: "producto",
            foreignKey: "idPost"
        })
    };

    return Comentario;
};