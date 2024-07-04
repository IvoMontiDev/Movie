const { DataTypes } = require('sequelize');
const db = require('../database/conexion'); // Asegúrate de importar la conexión a la base de datos

const User = db.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false // Desactivar timestamps automáticos
});

module.exports = User;
