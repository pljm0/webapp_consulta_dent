const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Consulta = sequelize.define('Consulta', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  clinica: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false
  },
  hora: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Usuarios = sequelize.define('Usuarios', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {
  Consulta,
  Usuarios
};
