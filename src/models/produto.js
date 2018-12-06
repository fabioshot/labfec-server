export default (sequelize, DataTypes) => {
  const Produto = sequelize.define('produto', {
    id: {
			type: DataTypes.INTEGER,
			allowNull:false,
			primaryKey: true,
			autoIncrement: true
		},
	
    descricao: {
			type: DataTypes.STRING(100),
			allowNull: false
		}		
	},
	{
		tableName: 'produto'
	});

	Produto.associate = (models) => {
		Produto.hasMany(models.Amostra, {
			foreignKey: {
				allowNull: false,
				field: 'produto_id',
				name: 'produto'
			}
		});
	}

	return Produto;
}