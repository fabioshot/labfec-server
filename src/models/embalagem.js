export default (sequelize, DataTypes) => {
  const Embalagem = sequelize.define('Embalagem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull:false
    },
    peso: {
        type: DataTypes.DOUBLE
    }
},
{
   tableName: 'embalagem' 
});
return Embalagem;
}