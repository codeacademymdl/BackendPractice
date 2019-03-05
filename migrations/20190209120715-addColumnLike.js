module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'books',
    'like',
    Sequelize.BOOLEAN,
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'books',
    'like',
  ),
};
