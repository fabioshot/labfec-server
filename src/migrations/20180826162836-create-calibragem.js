'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('calibragem', {
      balanca_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'balanca',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      funcionario_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'funcionario',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      hora: {
        allowNull: false,
        type: Sequelize.TIME
      },
      peso1: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      peso2: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      peso3: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      peso4: {
        allowNull: false,
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
    return queryInterface.dropTable('calibragem');
  }
};
