'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //criação da tabela inovar_os

    await queryInterface.createTable('inovar_os', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
     data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
     },
      data_saida: {
          type: Sequelize.DATE,
          allowNull: false
      },
      descricao: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      imagem: {
          type: Sequelize.STRING,
          allowNull: false
      },
      endereco: {
          type: Sequelize.STRING,
          allowNull: false
      },
      telefone: {
          type: Sequelize.STRING,
          allowNull: false
      },
      valor: {
          type: Sequelize.FLOAT,
          allowNull: false
      },
      status: {
          type: Sequelize.STRING,
          allowNull: false
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('inovar_os');
  }
};
