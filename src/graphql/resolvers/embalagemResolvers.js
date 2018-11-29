export default {
  Query: {
    embalagem: (parent, { id }, { db }, info) => db.Embalagem.findOne({ descricao: descricao }),
    embalagens: (parent, args, { db }, info) => db.Embalagem.findAll(),
  },

  Mutation: {
    createEmbalagem: (parent, { descricao, peso }, { db }, info) => db.Embalagem.create({
      descricao: descricao,
      peso: peso
    }),

    updateEmbalagem: async (parent, { descricao, peso,  id }, { db }, info) => {
      if (!db.Embalagem) {
        throw new Error('Embalagem não encontrado')
      }
      const dados = await db.Embalagem.findByPk(id);
      await dados.update({
        descricao,
        peso
      });
      return dados;      
    },

    deleteEmbalagem: (parent, {id}, { db }, info) => db.Embalagem.destroy({
      where: { 
        id: id 
      }
    })
  }
};