const express = require('express');
const router = express.Router();

const moviesRoutes = require('./moviesRoutes');
const usersRoutes = require('./usersRoutes');
const reviewsRoutes = require('./reviewsRoutes');

router.use('/movies', moviesRoutes);
router.use('/users', usersRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;
