export default `
  type Embalagem {
    id: ID!
    descricao: String!
    peso: Float!
    created_at: String!
    updated_at: String!        
  }

  type Query {
    embalagens: [ Embalagem! ] !
    embalagem(id: ID!): Embalagem!
  }

  type Mutation {
    createEmbalagem(descricao: String!, peso: Float!): Embalagem
    updateEmbalagem(id: ID!, descricao: String!, peso: Float!): Embalagem
    deleteEmbalagem(id: ID!): Int
  }

`;