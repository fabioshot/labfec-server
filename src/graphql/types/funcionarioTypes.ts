export default `

  type Funcionario {
    id: ID!
    nome: String!
    admissao: String!
    saida: String
    observacao: String
    usuario: String!
    senha: String! 
    bloqueado: Boolean
    createdAt: String!
    updatedAt: String!
    cargo: Cargo!
  }

  type Query {
    funcionarios: [ Funcionario! ]!
    funcionario(id: ID!): Cargo
    currentFuncionario: Funcionario
  }

  type Mutation {
    createFuncionario(
      nome: String!,
      admissao: String!,
      saida: String,
      observacao: String,
      usuario: String!,
      senha: String!,
      bloqueado: Boolean,
      cargo: Int!,
    ): Funcionario

    updateFuncionario(
      id: ID!,
      nome: String!,
      admissao: String!,
      saida: String,
      observacao: String,
      bloqueado: Boolean,
    ): Funcionario

    updateSenha(id: ID!, senha: String!): Int
    
    deleteFuncionario(id: ID!): Int
  }

`;