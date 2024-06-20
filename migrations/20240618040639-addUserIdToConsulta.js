module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Consulta', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Consulta', 'userId');
  }
};
