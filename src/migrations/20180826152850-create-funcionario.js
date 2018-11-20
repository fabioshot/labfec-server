'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      cargo_id: {
        type: Sequelize.INTEGER
      },
      admissao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      saida: {
        type: Sequelize.DATE
      },
      usuario: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      bloqueio: {
        type: Sequelize.BOOLEAN
      },
      sutuacao: {
        type: Sequelize.BOOLEAN
      },
      observacao: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('funcionario');
  }
};
