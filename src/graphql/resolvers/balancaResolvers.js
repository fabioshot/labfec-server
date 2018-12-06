export default {
  Query: {
    async balancas (parent, args, { db }, info) {
      return await db.Balanca.all();
    },

    async balanca (parent, { id }, { db }, info) {
      return await db.Balanca.findByPk(id);
    },
  },

  Mutation: {
    async createBalanca (parent, { equipamento, identificacao, modelo, marca }, { db }, info) {
      return await db.Balanca.create({
       equipamento: equipamento,
       identificacao: identificacao,
       modelo: modelo,
       marca: marca
      });      
    },

    async updateBalanca (parent, { equipamento, identificacao, modelo, marca, id }, { db }, info) {
      const balanca = await db.Balanca.findByPk(id);
      await balanca.update({
        equipamento,
        identificacao,
        modelo,
        marca
      });
      return balanca;      
    },

    async deleteBalanca (parent, {id}, { db }, info) {
      return await db.Balanca.destroy({
        where: {
          id: id
        }
      })
    }
  }
};
  
