/**
 * função: responsavel por exportar as funções da query,type,mutation.
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */

const query= require('./query')
const mutation= require('./mutation')
const types = require('./types')

const typeDefs=[query,mutation,types]

module.exports=typeDefs