export default (sequelize, DataTypes) => {
  const Amostra = sequelize.define('Amostra', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    datafab: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horafab: {
        type: DataTypes.TIME,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: 'amostra'
});

Amostra.associate = (models) => {
    Amostra.belongsToMany(models.Produto, {
        through: 'produto_amostra',
        foreignKey: {
            field: 'produto',
            name: 'produto'
        }
    });

    Amostra.belongsToMany(models.Analise, {
        through: 'amostra_analise',
        foreignKey: {
            field: 'produto',
            name: 'produto'
        }
    });
};
return Amostra;
};

