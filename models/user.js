const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../db')

class User extends Model { }

User.init({
    email: { type: DataTypes.TEXT, unique: true, allowNull: false, validate: { isEmail: true } },
    password: { type: DataTypes.TEXT, allowNull: false }
}, { sequelize, modelName: 'user'});

module.exports = User;