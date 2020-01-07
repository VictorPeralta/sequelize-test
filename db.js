const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();


const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres'
})

module.exports = sequelize;