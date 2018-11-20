'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('analise', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_analise: {
        type: Sequelize.DATE
      },
      hora_analise: {
        type: Sequelize.TIME
      },
      turno: {
        type: Sequelize.STRING(10)
      },
      funcionario_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'funcionario',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      acidez: {
        type: Sequelize.DOUBLE
      },
      viscosidade: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('analise');
  }
};
