export default (sequelize, DataTypes) => {
  const Balanca = sequelize.define('Balanca', {
    id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
    equipamento: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    identificacao: {
      type: DataTypes.STRING(100),
      allowNull: false    
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: false    
    },
    marca: {
      type: DataTypes.STRING(100),
      allowNull: false    
    }                     
  },
  {
    tableName: 'balanca'
  });

Balanca.associate = (models) => {
  Balanca.belongsToMany(models.Funcionario, {
    through: 'Calibragem',
    foreignKey: {
      allowNull: false,
      field: 'balanca_id',
      name: 'balanca'
    }
	});
}
return Balanca;
};