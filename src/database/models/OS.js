
const { Model , DataTypes } = require('sequelize');

class OS extends Model {
    static init(sequelize) {
        super.init({
            cliente: DataTypes.STRING,
            data_entrada: DataTypes.DATE,
            data_saida: DataTypes.DATE,
            descricao: DataTypes.TEXT,
            imagem: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING,
            valor: DataTypes.FLOAT,
            status: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'inovar_os',
        })
    }
    static associate(models){
        
    }
}

module.exports = OS;