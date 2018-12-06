export default {
  Query: {
    async embalagens (parent, args, { db }, info) {
      return await db.Embalagem.findAll();
    },

    async embalagem (parent, { id }, { db }, info ) {
      return await db.Embalagem.findByPk(id);
    },
  },

  Mutation: {
    async createEmbalagem (parent, { descricao, peso }, { db }, info) {
      return await db.Embalagem.create({
        descricao: descricao,
        peso: peso
      });      
    },

    async updateEmbalagem (parent, { descricao, id, peso }, { db }, info) {
      const embalagem = await db.Embalagem.findByPk(id);
      await embalagem.update({
        descricao,
        peso
      });
      return embalagem;      
    },

    async deleteEmbalagem (parent, {id}, { db }, info) {
      return await db.Embalagem.destroy({
        where: {
          id: id
        }
      })
    }
  }
};
  