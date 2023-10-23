
module.exports = function (sequelize, dataTypes) {
    
    let alias = "Posteo";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: {
            type: dataTypes.INTEGER,
            unsigned: true,
            allowNull: true
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
        tableName: "Productos",
        timestamps: true,
        underscored: false,
    };

    const Producto = sequelize.define(alias,cols,config);
    //relaciones

    Producto.associate = function(models) {
        // Un perfil --> muchos comentarios
        Producto.belongsTo(models.Usuarios , {
            as: "usuario",
            foreignKey: "id_usuario"
        }),
        Producto.hasMany(models.Comentario , {
            as: "comentarios",
            foreignKey: "id_producto"
        })
    };

    return Producto;
   
};