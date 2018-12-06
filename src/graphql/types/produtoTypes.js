export default `

type Produto {
  id: ID!
  descricao: String!
  created_at: String!
  updated_at: String!
  embalagem: Embalagem!
}

type Query {
  produtos: [Produto!]!
  produto(id: ID!): Produto!
}

type Mutation {
  createProduto(descricao: String!, embalagem: Int!): Produto
  updateProduto(id: ID!, descricao: String!, embalagem: Int!): Produto
  deleteProduto(id:ID!): Int!
}

`;