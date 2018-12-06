export default (sequelize, DataTypes) => {
  const Amostra = sequelize.define('Amostra', {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
    },
    tipo: {
			type: DataTypes.STRING(100),
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
			type: DataTypes.STRING(30),
			allowNull:false
		}
	},	
	{
		tableName: 'amostra'
	});

	Amostra.associate = (models) => {
    Amostra.belongsToMany(models.Analise, {
			through: 'DadosAnalises',
			foreignKey: {
				allowNull: false,
				field: 'amostra_id',
				name: 'amostra'
			}
		});
	};
return Amostra;
};

