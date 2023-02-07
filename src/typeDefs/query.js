/**
 * função: responsavel por mandar informações de consultas, 
 *          definindo os parametos e campos requisitados.
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */
const{gql}=require ('apollo-server')

const query=gql`
    type Query{
        users:[User]!
        user(id:ID!):User!
    }

   
`;

module.exports=query