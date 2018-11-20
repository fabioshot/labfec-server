'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modelo = 
  sequelize.define('Modelo', {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      descricao: {
          type: DataTypes.STRING(100),
          allowNull:false
      }
},
{
  tableName: 'modelo'
});

Modelo.associate = (models) => {
  Modelo.belongsTo(models.Marca, {
      foreignKey: {
          allowNull: false,
          field: 'marca',
          name: 'marca'
      }
  });
}

return Modelo;
}