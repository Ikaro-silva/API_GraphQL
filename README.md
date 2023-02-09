# API_GraphQL

# Como montar Uma API com GraphQl em Node.js com Apollo Server e MongoDB
  ## Sobre o tutorial
      A proposta é fazer um API que possa gerencia Usuários fazendo operações CRUD com os dados.
      no servidor usaremos Node.js.Vamos começar a desenvolver a nossa API em GraphQl?
  
  
  ## Tecnologias
         -Node.js(plataforma usada)
         -Apollo-Sever(usado para montar o servidor)
         -MongoBD(banco de dados)
       
  ## Estrutura do projeto:
     -API_GraphQL
         - src
              -config
                  -DBconfig.js
              -model
                  -user.model.js
              -resolvers
                  -index.js
                  -userResolver.js
              -typeDefs
                  -index.js
                  -mutation.js
                  -query.js
                  -types.js
         -.gitignore
         -package-lock.json
         -package.json
         -server.js
         
## Iniciando com o Node.Js
  ### npm
      npm init -y
      
  Abra o terminar no logal da pasta do projeto API_GraphQ execute o comando acima

## Instalando dependencias
   ### Apollo-Server,GraphQL, mongoose, dotenv
      npm install graphql apollo-server mongoose dotenv
      
   Na pasta do projeto API_GraphQ execute o comando acima.
   - graphql: Montar schemas e executar queries GraphQL
   - apollo-server: Montar servidor GraphQL(tem ferramenta de suporte para teste da api)
   - mongoose: Montar o model para o banco de dados e estabelecer conecção com o MongoDB
   - dotenv: Montar variáveis de ambiente 
   
## GraphQL/Apollo-Server/MongoDB
   Precisamos definir algumas necessidades do sevidor GraphQL, seriam o <b>typeDefs</b> e o <b>resorvers</b>,
   além disso ainda existe o <b>model</b>
   ### 3 Principais itens
       - TypeDefs(Definição de tipo):Modelar dados com base nos Schemas
       - Resolvers: Definir como sera feita cada ação dentro do banco de dados
       - Model: Definir campos usados no banco de dados 
 
## Configurando servidor/conecção com banco de dados

Na pasta API_GraphQL, crie uma pasta <b>src </b>

Em <b>API_GraphQL/src</b> crie um arquivo <b>server.js</b>

Caminho:<b>API_GraphQL/src/server.js</b>

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
     

Na conecção do servidor temos chamas para os arquivos resolvers e typeDefs,vamos crialos?

## Criando definições de tipo (typeDefs)
O typeDefs é uma junção de 3 itens:

  <b>- Types:</b> Definir dados com base nos typos do schema
  
  <b>- Query:</b> Definir comando de consultas da api
  
  <b>- Mutation:</b> Definir comandos que mudam os dados da api

Para criarmos as definições de tipo crie uma pasta <b>typeDefs</b> em <b>API_GraphQL/src</b>

Caminho: <b>API_GraphQL/src/typeDefs</b>

  ### Crie os seguinte arquivos:
  
     -typeDefs
          -index.js
          -mutation.js
          -query.js
          -types.js
          
         
## Types 
vamos começar com criando os typos (type), dentro da API GraphQl ele é responsavel por modelar
os dados, sempre em concordancia com os schemas do model definido pelo mongoose e o mongoDB.

Em <b>typeDefs/types.js</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/src/typeDefs/types.js</b>
      
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

## Query
Agora vamos montar a query.vamos montar 2 queries : uma que retorna um array de usuários e o outro vai retornar somente um usuario 
apartir de um id informado.

Em <b>typeDefs/types.js</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/src/typeDefs/query.js</b>
   
    const{gql}=require ('apollo-server')
    const query=gql`
        type Query{
            users:[User]!
            user(id:ID!):User!
        }
    `;
    module.exports=query
    
Pronto as queries estão definidas. No trecho de código acima dissemos ao servidor que a query chamada useres deve retornar um array com dados do tipo User (definido no passo anterior) e a query chamada fruit deve ter um parâmetro chamado id com um dado do tipo ID (já existente em GraphQL) e retornar um item do tipo User. A exclamação (!) define o campo como obrigatório

## Mutation
Agora vamos definir a mutation, essa parte é parecida com as queries.Mutations são queries responsaveis por alteração de dados.

Em <b>typeDefs/types.js</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/src/typeDefs/mutation.js</b>
    
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

Alem do tipo Mutation estão definidos alguns tipos input, esses inputs são para separar os parâmetros passados a mutation a fim de deixar as assinaturas mais limpas e de fácil manutenção.

## Conclusão de typeDefs
  Para concluir essa parte. Em <b>typeDefs/types.js</b> escreva o seguinte código:

  Caminho: <b>API_GraphQL/src/typeDefs/query.js</b>
  
      const query= require('./query')
      const mutation= require('./mutation')
      const types = require('./types')

      const typeDefs=[query,mutation,types]

      module.exports=typeDefs

## Criando models
Vamos definir o model User para que possamos modelar os dados do banco de dados usando os resolvers.

Em <b>model/-user.model.js</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/src/model/-user.model.js</b>
    
    
        const mongoose=require('mongoose')
        const userSchema=new mongoose.Schema({
            nome:{
                type:String
            },
            email:{
                type:String
            },
            senha:{
                type:String
            },

        })

        const User=mongoose.model('User',userSchema)

        module.exports=User
    
## Criando Resolvers
Resolvers é aonde associamos quais ações queries e mutations devem tomar e la tambem é aonde é definido as chamadas feitas no banco de dados.Então usamos o model apara implementar essas ações no banco de dados.

Em <b>resolvers/userResolver.js</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/src/resolvers/userResolver.js</b>
      
      const User= require('../model/user.model')
      const useResolver={
          Query:{
              async users(){
                  const useres =await User.find({})
                  if(useres==null){
                      console.log("falha na consulta")
                      return
                  }
                  else{

                      return useres
                  }

              },
              async user(_, {id}){
                  const userid=await User.findById(id)
                  return userid
              },
          },
          Mutation:{
              createUser(_,{user}){
                  const newUser=new User(user)

                  return newUser.save()
              },
              async updateUser(_,{id,user}){

                  const userUpda=await User.findByIdAndUpdate(id,user)
                  return userUpda
              },
              async deleteUser(_, { id }) {

                  const deteUser=await User.findByIdAndRemove(id);
                  return deteUser
               },
          }
      }

      module.exports=useResolver
    
Neste arquivo usamos métodos expostos pela biblioteca Mongoose onde criamos a model no passo anterior. Dessa forma associamos as queries e mutations criadas nas definições de tipos à ações no banco de dados MongoDB.

## Conectando banco de dados 
Para conectar ao banco usaremos DotEnv para armazenar as credenciais do banco. Essa biblioteca permite criar variáveis de ambiente onde podemos ter as credenciais do banco ao invés de tê-las no código o que comprometeria as informações deixando disponíveis a qualquer pessoas com acesso ao código, por exemplo, num repositório git.

Em <b>API_GraphQL/.env</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/.env</b>
    
    URI=mongodb://localhost:27017/GraphQL
    
### Configurando variáveis
Arquivo responsavel por configurar as variáveis de ambiente.

Em <b>config/DBconfig.js</b> escreva o seguinte código:

Caminho: <b>API_GraphQL/src/config/DBconfig.js</b>

    const dotenv =require('dotenv')
    dotenv.config()

    // variavel de ambiente "URI" do mongodb
    module.exports={
        URI:process.env.URI
    }


# Pronto,Nossa API-GraphQL esta pronta!

## Testando a API

   ### Iniciando API
       
       node .server.js
    
   ### Criar usuários:
        
        mutation createUser{
        createUser(user:{
        nome:"ikaro silva",
        email:"ikaro@gmail.com",
        senha:"123654987"})
        {
          id
          nome
          email
          senha
        }
      }
      
  ### Consultar todos usuários:
        
        query users{
          users {
            id
            nome
            email
            senha
          }
        }
        
 ### Consultar por id:
      
      query userID{
      user(id:"63e29267d39499c37d9496e2") {
        id
        nome
        email
        senha
      }
    }
    
### Editar por id:
    
    mutation editar{
    updateUser(id:"63e29267d39499c37d9496e2", user:{
    nome: "ikaro silva",
    email:"ikaro@gmail.com",
    senha:"123654987"
    }){
      id
      nome
      email
      senha
    }
  }
  
### Deletar por Id:
   
     mutation deleteID{
       deleteUser(id:"63e29267d39499c37d9496e2") {
        id
        nome
        email
        senha
      }
    }
  
## Todos os testes foram executado na ferramenta que o apollo-server ddisponibilizar:
  ### https://studio.apollographql.com/sandbox/explorer
  



    
   




