const { Sequelize, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

const sequelize = new Sequelize('db', 'user', 'password', {
    host: 'host',
    port: 5432,
    dialect: 'postgres'
})

class User extends Model {}

User.init({
  email: DataTypes.TEXT,
  password: DataTypes.TEXT
}, { sequelize, modelName: 'user', freezeTableName: true});

sequelize.sync()
  .then(() => User.create({
    email: 'janedoe',
    password: bcrypt.hashSync("password", 8)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });