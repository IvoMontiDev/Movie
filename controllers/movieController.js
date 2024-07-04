const Movie = require('../models/movie');
const db = require('../database/conexion');
const { sequelize } = require('../database/conexion');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMovieById = async (req, res) => {
    try {
        const movieId = req.params.id;
        const [results, metadata] = await db.query('CALL GetMovieDetails(:movieId)', {
            replacements: { movieId },
            type: db.QueryTypes.SELECT
        });

        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }

        const movieDetails = results[0];
        res.json(movieDetails);
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
        res.status(500).json({ error: 'Error al obtener detalles de la película' });
    }
};

const createMovie = async (req, res) => {
    try {
        // Obtener los datos del cuerpo de la solicitud
        const { title, description, release_date, poster_url, director, cast, minimum_age, genre_id  } = req.body;
        
        // Logging the request body to debug
        console.log('Request Body:', req.body);

        // Llamar al stored procedure para crear la película en la base de datos
        const [results, metadata] = await db.query('CALL CreateMovie(:title, :description, :release_date, :poster_url, :director, :cast, :minimum_age, :genre_id)', {
            replacements: {
                title,
                description,
                release_date,
                poster_url,
                director,
                cast,
                minimum_age,
                genre_id
            }
        });

        // Manejar la respuesta del stored procedure según sea necesario
        console.log('Results:', results);
        console.log('Metadata:', metadata);

        if (results && results.affectedRows > 0) {
            res.status(201).json({ message: 'Película creada exitosamente' });
        } else {
            res.status(500).json({ error: 'Error al crear la película' });
        }
    } catch (error) {
        console.error('Error al crear película:', error);
        res.status(500).json({ error: 'Error al crear la película' });
    }
};

const updateMovie = async (req, res) => {
    const movieId = req.params.id;
    const {
        title,
        description,
        release_date,
        poster_path,
        director,
        cast,
        minimum_age,
        genre_id
    } = req.body;

    try {
        let movie = await Movie.findByPk(movieId);

        if (!movie) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }

        // Actualizar solo los campos que se hayan enviado en la solicitud
        if (title) movie.title = title;
        if (description) movie.description = description;
        if (release_date) movie.release_date = release_date;
        if (poster_path) movie.poster_path = poster_path;
        if (director) movie.director = director; // Incluir director si se envía en la solicitud
        if (cast) movie.cast = cast;             // Incluir cast si se envía en la solicitud
        if (minimum_age) movie.minimum_age = minimum_age;
        if (genre_id) movie.genre_id = genre_id;

        await movie.save();
        movie = await Movie.findByPk(movieId); // Recargar la película actualizada

        res.status(200).json(movie);
    } catch (error) {
        console.error('Error al actualizar película:', error);
        res.status(500).json({ error: 'Error al actualizar película' });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;

        // Llamada al procedimiento almacenado
        await sequelize.query('CALL DeleteMovie(:movieId)', {
            replacements: { movieId: id }
        });

        res.status(204).json({ message: 'Película eliminada exitosamente' });
    } catch (error) {
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            res.status(404).json({ error: 'Película no encontrada o tiene relaciones dependientes.' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
