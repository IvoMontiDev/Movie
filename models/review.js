const { DataTypes } = require('sequelize');
const db = require('../database/conexion'); // Asegúrate de importar la conexión a la base de datos

const Review = db.define('Review', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Nombre de la tabla de usuarios
            key: 'id'
        }
    },
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'movies', // Nombre de la tabla de películas
            key: 'id'
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false // Desactivar timestamps automáticos
});

module.exports = Review;
