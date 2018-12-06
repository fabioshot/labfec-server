export default (sequelize, DataTypes) => {
	const DadosAnalises = sequelize.define('DadosAnalises', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement:true
    },
		umidade: {
			type: DataTypes.STRING           
		},
		phagua: {
			type: DataTypes.DOUBLE            
		},
		fatoracido: {
			type: DataTypes.DOUBLE
		},
		polpa: {
			type: DataTypes.DOUBLE
		},
		pontospreto: {
			type: DataTypes.INTEGER
		},
		vazamento: {
			type: DataTypes.DOUBLE
		},
		cor: {
			type: DataTypes.STRING(20)
		}
	},
	{
		tableName: 'dados_analises'
	});

	return DadosAnalises;

};