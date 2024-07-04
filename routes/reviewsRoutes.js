const express = require('express');
const router = express.Router();
const reviewController  = require('../controllers/reviews'); // Importa los controladores de reviews

router.get('/', reviewController.getAllReviews); // Ruta para obtener todos los reviews

module.exports = router;
