
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
			type: DataTypes.STRING(30),
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
  	Analise.belongsToMany(models.Amostra, {
			through: 'DadosAnalises',
			foreignKey: {
				allowNull: false,
				field: 'analise_id',
				name: 'analise'
			}
		});
	}

return Analise;
};
