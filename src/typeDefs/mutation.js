/**
 * função: responsavel por mandar as informações que o resolvers vai precisar
 *          é usado para mudadanças de dados.(definindo os parametos e campos requisitados.)
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */

const {gql}=require('apollo-server')

const mutation=gql`
type Mutation {
  createUser(user: CreateUserInput!): User!
  updateUser(id: ID!, user: UpdateUserInput!): User!
  deleteUser(id: ID!):User
}

input CreateUserInput {
  nome: String!
  email: String!
  senha: String!
}

input UpdateUserInput {
  nome: String
  email: String
  senha: String
}

type User {
  id: ID!
  nome: String!
  email: String!
  senha: String!
}

`;

module.exports=mutation