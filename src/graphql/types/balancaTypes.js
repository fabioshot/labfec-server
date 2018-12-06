export default `

type Balanca {
  id: ID!
  equipamento: String!
  identificacao: String!
  modelo: String!
  marca: String!
  createdAt: String!
  updatedAt: String!
}

type Query {
  balancas: [ Balanca! ]!
  balanca(id: ID!): Balanca
}

type Mutation {
  createBalanca(equipamento: String!, identificacao: String!, modelo: String!, marca: String ): Balanca
  updateBalanca(id: ID!, equipamento: String!, identificacao: String!, modelo: String!, marca: String): Balanca
  deleteBalanca(id: ID!): Int!
}


`;