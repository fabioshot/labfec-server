export default (sequelize, DataTypes) => {
  const Marca = sequelize.define('Marca', {
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'marca'
});

return Marca;
}