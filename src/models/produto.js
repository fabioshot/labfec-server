export default (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'produto'
});

Produto.associate = (models)  => {
    Produto.belongsTo(models.Embalagem, {
        foreignKey: {
            allowNull: false,
            field: 'embalagem',
            name: 'embalagem'
        }
    });
}

return Produto;
}