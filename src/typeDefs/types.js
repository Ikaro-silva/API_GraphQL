/**
 * função: definir os campos eos tipos que seram usados na aplicação.
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */

const{ gql }=require('apollo-server')

const types = gql`
type User {
  id: ID
  nome: String!
  email: String!
  senha: String!

}
`;

    module.exports=types

 