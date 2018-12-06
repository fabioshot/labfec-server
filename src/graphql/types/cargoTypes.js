export default `
type Cargo {
  id: ID!
  descricao: String!
  created_at: String!
  updated_at: String!
}

type Query {
  cargos: [Cargo!]!
  cargo(id: ID!): Cargo!
}

type Mutation {
  createCargo(descricao: String!): Cargo
  updateCargo(id: ID!, descricao: String!): Cargo
  deleteCargo(id: ID!): Int!
}
`;