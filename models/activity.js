const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db')
const bcrypt = require('bcryptjs');
const User = require('./user.js')

class Activity extends Model { }

Activity.init({
    userID: {type: DataTypes.INTEGER, allowNull:false, references:{
        model: User,
        key: 'id',
    }},
    name: { type: DataTypes.TEXT, allowNull: false },
    state: { type: DataTypes.BOOLEAN, defaultValue: false },
    goal: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false, validate: { isInt: true } },
}, { sequelize, modelName: 'activity'});

module.exports = Activity;