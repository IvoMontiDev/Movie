const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Asegúrate de que la conexión esté importada correctamente

const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false
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
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'movies', // Asegúrate de que el nombre de la tabla sea correcto aquí
    timestamps: false // Si no tienes campos de timestamps (createdAt, updatedAt)
});

module.exports = Movie;
