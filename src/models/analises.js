
export default (sequelize, DataTypes) => {
  const Analise = sequelize.define('Analise', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    acidez: {
        type: DataTypes.DOUBLE
    },
    viscosidade: {
        type: DataTypes.DOUBLE
    }
},
{
    tableName: 'analise'
});

Analise.associate = (models) => {
    Analise.belongsTo(models.Produto, {
        foreignKey: {
            allowNull: false,
            field: 'funcionario',
            name: 'funcionario'
        }
    });
}

return Analise;
};
