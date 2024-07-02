    const DB_HOST = 'mysql-ivomontidev.alwaysdata.net';
    const DB_USER = '367140';
    const DB_PASS = 'ivomonti1';
    const DB_NAME = 'ivomontidev_movies';

    const { Sequelize } = require('sequelize');

    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
    });

    sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    module.exports = sequelize;
