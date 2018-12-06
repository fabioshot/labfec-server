export default {
    Query: {
      async funcionario (parent, { id }, { db }, info) {
        return await db.Funcionario.findByPk({ id: id })
      },

      async funcionarios (parent, args, { db }, info) {
        return await db.Funcionario.findAll();
      }
    },
  
    Mutation: {
      async createFuncionario (parent,  { nome, admissao, observacao, status,  usuario, senha, bloqueado, cargo } , { db }, info) {
        return await db.Funcionario.create({
          nome: nome,
          admissao: admissao,
          observacao: observacao,
          status: status,
          usuario: usuario,
          senha: senha,
          bloqueado: bloqueado,
          cargo: cargo
        });
      },
  
      async updateFuncionario (parent, { id, nome, admissao, saida, observacao, status, cargo }, { db }, info) {
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

      async updateSenha (parent, { id, senha, bloqueado}, { bd }, info ){
        if (!db.Funcionario) {
          throw new Error('Funcioanrio não encontrado')
        }
        const dados = await db.Funcionario.findByPk(id);
        await dados.update({
          senha,
          bloqueado
        });
        return dados;
      },     
  
      async deleteFuncionario (parent, {id}, { db }, info){
        return await db.Funcionario.destroy({
        where: { 
          id: id 
        }
      });
      }
  }
}