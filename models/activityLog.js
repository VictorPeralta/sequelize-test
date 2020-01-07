const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../db')
const bcrypt = require('bcryptjs');
const Activity = require('./activity')

class ActivityLog extends Model {}

ActivityLog.init({
    activityID: {type: DataTypes.INTEGER, references:{
        model: Activity,
        key: 'id',
    }},
    timeStart: {type: DataTypes.DATE, allowNull: false},
    duration: {type: DataTypes.INTEGER}
}, { sequelize, modelName: 'activityLog'});

module.exports = ActivityLog;