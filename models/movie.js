
const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');

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
    tableName: 'movies',
    timestamps: false
});

module.exports = Movie;
