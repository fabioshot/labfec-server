
export default (sequelize, DataTypes) => {
  const Calibragem = sequelize.define('Calibragem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull:false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    peso1: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    peso2: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    peso3: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    peso4: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
},
{
    tableName: 'calibragem'
});

Calibragem.associate = (models) => {
    Calibragem.belongsTo(models.Balanca, {
        foreignKey: {
            allowNull: false,
            field: 'balanca',
            name: 'balanca'
        }
    });

    Calibragem.belongsTo(models.Funcionario, {
        foreignKey: {
            allowNull: false,
            field: 'funcionario',
            name: 'funcionario'
        }
    });
};

return Calibragem;
};