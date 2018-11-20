export default `

#Amostra

Type Amostra {
  id: ID!
  tipo: String!
  datafab: String!
  horafab: String!
  lote: String!
  createdAt: String!
  updatedAt: String!
  produto: [ Produto! ]!
}

#Analise

type Analise {
  id: ID!
  data: String!
  hora: String!
  turno: String!
  acidez: Float
  viscosidade: Float
  createdAt: String!
  updatedAt: String!
  funcionario: Funcionario!
}
  
#Cargo

type Cargo {
  id: ID!
  descricao: String!
  createdAt: String!
  updatedAt: String!
  }

type Query {

  #Amostra

  amostras: [Amostra!]!
  amostra(id: ID!): Amostra

  #Cargo

  cargos: [Cargo!]!
  cargo(id: Int!): Cargo

}

type Mutation {
  
  #Amostra
  createAmostra(tipo: String!, datafab: String!, horafab: String!, lote: String!, produto: [ Produto! ]!): Amostra
  updateAmostra(id: ID!, input: AmostraInput!): Amostra
  deleteAmostra(id: ID!): Boolean

  #Cargo
  createCargo(descricao: String!): Cargo
  updateCargo(id: ID!, descricao: String!): Cargo
  deleteCargo(id: ID!): Boolean
  }
`;

