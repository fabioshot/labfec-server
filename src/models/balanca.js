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
        foreignKey: {
            allowNull: false,
            field: 'modelo',
            name: 'modelo'
        }
    });
}
return Balanca;
};