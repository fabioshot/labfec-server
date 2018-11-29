export default {
  Query: {
    cargo: (parent, { id }, { db }, info) => db.Cargo.findOne({ descricao: descricao }),
    cargos: (parent, args, { db }, info) => db.Cargo.findAll(),
  },

  Mutation: {
    createCargo: (parent, { descricao }, { db }, info) => db.Cargo.create({
      descricao: descricao
    }),

    updateCargo: async (parent, { descricao, id }, { db }, info) => {
      if (!db.Cargo) {
        throw new Error('Cargo não encontrado')
      }
      const dados = await db.Cargo.findByPk(id);
      await dados.update({
        descricao
      });
      return dados;      
    },

    deleteCargo: (parent, {id}, { db }, info) => db.Cargo.destroy({
      where: { 
        id: id 
      }
    })
  }
};
  
