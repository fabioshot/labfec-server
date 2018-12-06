export default {
  Query: {
    async cargos (parent, args, { db }, info ) {
      return await db.Cargo.findAll();
    },

    async cargo (parent, { id }, { db }, info ) {
      return await db.Cargo.findByPk(id);
    },
  },

  Mutation: {
    async createCargo (parent, { descricao }, { db }, info ) {
      return await db.Cargo.create({
        descricao: descricao
      });      
    },

    async updateCargo (parent, { descricao, id }, { db }, info ) {
      const cargo = await db.Cargo.findByPk(id);
      await cargo.update({
        descricao
      });
      return cargo;      
    },

    async deleteCargo (parent, {id}, { db }, info) {
      return db.Cargo.destroy({
        where: { 
          id: id 
        }
      });  
    }
  }
}
  
