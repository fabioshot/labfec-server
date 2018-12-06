export default (sequelize, DataTypes) => {
  const Funcionario = sequelize.define('funcionario', {
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
    status: {
			type: DataTypes.BOOLEAN,
			allowNull: false
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
    

    Funcionario.belongsToMany(models.Balanca, {
      through: 'Calibragem',
      foreignKey: {
        allowNull: false,
        field: 'funcionario_id',
        name: 'funcionario'
      }
    });

    Funcionario.hasMany(models.Analise, {
        foreignKey: {
          allowNull: false,
          field: 'analise_id',
          name: 'analise'
        }
      });
    }  

  return Funcionario;
}