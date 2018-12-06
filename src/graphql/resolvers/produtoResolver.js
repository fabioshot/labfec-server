export default {

  Query: {
    async produtos (parent, args, { db }, info) {
      return await db.Produto.findAll();
      
    },
     
    async produto (parent, { id }, { db }, info) {
      return await db.Produto.findByPk(id);
    }     
  },
  
  Mutation: {
    async createProduto(parent, { descricao, embalagem }, { db }, info) {
      return await db.Produto.create({
        descricao: descricao,
        embalagem: embalagem
      });      
    },

    async updateProduto (parent, { embalagem, descricao, id }, { db }, info ) {
      const produto = await db.Produto.findByPk(id);
      await produto.update({       
        descricao,
        embalagem
      });    
      return produto;       
    },

    async deleteProduto (parent, {id}, { db }, info ) {
      return await db.Produto.destroy({
        where: {
          id: id
        }
      });     
    }
  },

  Produto: {
    async embalagem (produto, {id}, { db }, info ) {      
      return await db.Embalagem.findByPk(produto.embalagem);           
    }      
  }
}  