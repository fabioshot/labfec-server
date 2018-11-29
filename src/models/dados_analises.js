export default (sequelize, DataTypes) => {
  const DadosAnalises = sequelize.define('DadosAnalises', {
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
            field: 'amostra_id',
            name: 'amostraId'
        }
    });

    DadosAnalises.belongsTo(models.Analise, {
        foreignKey: {
            allowNull: false,
            field: 'analise_id',
            name: 'analiseId'
        }
    });
};

return DadosAnalises;
}