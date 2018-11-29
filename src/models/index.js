import Sequelize from 'sequelize';

const sequelize = new Sequelize('labfec', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  operatorsAliases: false,
  define: {
    underscored: true    
  },
});

const models = {
  Amostra: sequelize.import('./amostra'),
  Analise: sequelize.import('./analise'),
  Balanca: sequelize.import('./balanca'),
  Calibragem: sequelize.import('./calibragem'),
  Cargo: sequelize.import('./cargo'),
  DadosAnalises: sequelize.import('./dados_analises'),
  Embalagem: sequelize.import('./embalagem'),
  Funcionario: sequelize.import('./funcionario'),
  Marca: sequelize.import('./marca'),
  Modelo: sequelize.import('./modelo'),
  Produto: sequelize.import('./produto'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;