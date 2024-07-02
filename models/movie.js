const { DataTypes } = require('sequelize');
const db = require('../database/conexion'); // Asegúrate de importar la conexión a la base de datos

const Movie = db.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    poster_path: {
        type: DataTypes.STRING,
        allowNull: true
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cast: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    minimum_age: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false // Desactivar timestamps automáticos
});

module.exports = Movie;
