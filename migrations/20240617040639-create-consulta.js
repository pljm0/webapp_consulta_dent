'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Consulta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      // Adicione outras colunas conforme necessário
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Consulta');
  }
};
