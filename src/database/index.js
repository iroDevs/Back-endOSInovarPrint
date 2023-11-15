const Sequelize = require('sequelize');
const dbConfig = require('./config/config');

//Colocar os modelos para se conectar ao banco
const OS = require('../database/models/OS');

//Cria a conexao com o banco chamando o sequelize e passando as configurações criadas anteriomente
const connection = new Sequelize(dbConfig);

//Conectar os modelos com suas respectivas tabelas
OS.init(connection);

module.exports = connection;