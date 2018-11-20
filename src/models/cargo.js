
export default (sequelize, DataTypes) => {
  const Cargo = sequelize.define('Cargo', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
{
     tableName: 'cargo'
});
return Cargo;
}