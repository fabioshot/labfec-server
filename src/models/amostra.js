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
    Amostra.belongsTo(models.Produto, {
        foreignKey: {
            allowNull: false,
            field: 'produto',
            name: 'produto'
        }
    });
};
return Amostra;
};

