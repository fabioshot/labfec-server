'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('balanca', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipamento: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      identificacao: {
        type: Sequelize.STRING(50)
      },
      modelo_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'modelo',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('balanca');
  }
};
