
export default {

    Query: {
      cargos: (parent, args, { db }, info) => db.Cargo.findAll(),
      cargo: (parent, { id }, { db }, info) => db.Cargo.findById(id),
    },

    Mutation: {
      createCargo: (parent, { descricao }, { db }, info) => db.Cargo.create({
        descricao: descricao
      }),

      updateCargo: (parent, { id, descricao }, { db }, info) => db.Cargo.update({
        descricao: descricao
      },
      {
        where: {
          id: id
        }
      }),

      deleteCargo: (parent, { id }, { db }, info) => db.Cargo.destroy({
        where: {
          id: id
        }
      }),
    }
    
};

