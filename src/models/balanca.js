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
    
    }        
},
{
    tableName: 'balanca'       
});

Balanca.associate = (models) => {
    Balanca.belongsTo(models.Modelo, {
        through: 'balanca_modelo',
        foreignKey: {
            allowNull: false,
            field: 'modelo_id',
            name: 'modeloId'
        }
    });
}
return Balanca;
};