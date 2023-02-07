/**
 * função: responsavel por conecção com banco de dados e servidor 
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */

const { ApolloServer }=require("apollo-server")
const mongose=require('mongoose')
const typeDefs=require('./src/typeDefs/index')
const resolvers=require('./src/resolvers/index')
const DBconfig=require('./src/config/DBconfig')



//BANCO DE DADOS
    mongose.set('strictQuery', false)

    mongose.connect(DBconfig.URI)
    .then(()=>{
        console.log('Banco de dados conectado')
    })
    .catch(err=>{
        console.log('Fala ao conectar ao banco de dados',err)
    })



//SERVIDOR
const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
.then(({url})=>{
    console.log('servidor conectado na url',url)
}).catch(err=>{
    console.log('falga ao conectar o servidor',err)
})

