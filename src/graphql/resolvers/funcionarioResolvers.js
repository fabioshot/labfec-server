export default {
    Query: {
      funcionario: (parent, { id }, { db }, info) => db.Funcionario.findByPk({ id: id }),
      funcionarios: (parent, args, { db }, info) => db.Funcionario.findAll(),
    },
  
    Mutation: {
      createFuncionario: (parent,  { nome, admissao, observacao, status,  usuario, senha, bloqueado, cargo } , { db }, info) => db.Funcionario.create({
        nome: nome,
        admissao: admissao,
        observacao: observacao,
        status: status,
        usuario: usuario,
        senha: senha,
        bloqueado: bloqueado,
        cargo: cargo,
      }),
  
      updateFuncionario: async (parent, { id, nome, admissao, saida, observacao, status, cargo }, { db }, info) => {
        if (!db.Funcionario) {
          throw new Error('Funcioanrio não encontrado')
        }
        const dados = await db.Funcionario.findByPk(id);
        await dados.update({
          nome,
          admissao,
          saida,
          observacao,
          status,
          cargo
        });
        return dados;      
      },

      updateSenha: async (parent, { id, senha, bloqueado}, { bd }, info ) => {
        if (!db.Funcionario) {
          throw new Error('Funcioanrio não encontrado')
        }
        const dados = await db.Funcionario.findByPk(id);
        await dados.update({
          senha,
          bloqueado
        });
      },
  
      deleteFuncionario: (parent, {id}, { db }, info) => db.Funcionario.destroy({
        where: { 
          id: id 
        }
      })
    }
  };