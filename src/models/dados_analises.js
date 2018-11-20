export default (sequelize, DataTypes) => {
  const DadosAnalises = sequelize.define('DadosAnalises', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    umidade: {
        type: DataTypes.STRING           
    },
    phagua: {
        type: DataTypes.DOUBLE            
    },
    fatoracido: {
        type: DataTypes.DOUBLE
    },
    polpa: {
        type: DataTypes.DOUBLE
    },
    pontospreto: {
        type: DataTypes.INTEGER
    },
    vazamento: {
        type: DataTypes.DOUBLE
    },
    cor: {
        type: DataTypes.STRING
    }        
},
{
    tableName: 'dadosanalises'
});

DadosAnalises.associate = (models) => {
    DadosAnalises.belongsTo(models.Amostra, {
        foreignKey: {
            allowNull: false,
            field: 'amostra',
            name: 'amostra'
        }
    });

    DadosAnalises.belongsTo(models.Analise, {
        foreignKey: {
            allowNull: false,
            field: 'analise',
            name: 'analise'
        }
    });
};

return DadosAnalises;
}