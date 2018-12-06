export default (sequelize, DataTypes) => {
  const Embalagem = sequelize.define('Embalagem', {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
    },
    descricao: {
			type: DataTypes.STRING(100),
			allowNull:false
    },
    peso: {
			type: DataTypes.DOUBLE,
			allowNull:false
    }
	},
	{
		tableName: 'embalagem'
	});
	
	Embalagem.associate = (models) => {
		Embalagem.hasMany(models.Produto, {
			foreignKey: {
				allowNull: false,
				field: 'embalagem_id',
				name: 'embalagem'
			}
		});
	}

return Embalagem;
}