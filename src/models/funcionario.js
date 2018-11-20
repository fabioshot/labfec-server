export default (sequelize, DataTypes) => {
  const Funcionario = sequelize.define('Funcionario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    admissao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    saida: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.TEXT
    },
    usuario: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    bloqueado: {
        type: DataTypes.BOOLEAN
    }
},
{
tableName: 'funcionario'
});

Funcionario.associate = (models) => {
    Funcionario.belongsTo(models.Cargo, {
        foreignKey: {
            allowNull: false,
            field: 'cargo',
            name: 'cargo'
        }
    });
};

return Funcionario;
}