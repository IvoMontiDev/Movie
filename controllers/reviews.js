const db = require('../database/conexion');

const Review = require('../models/review');


const getAllReviews = async (req, res) => {
    try {
        const reviews = await db.query('CALL GetReviews');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAllReviews };

