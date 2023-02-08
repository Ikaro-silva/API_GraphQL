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


    
    

   




