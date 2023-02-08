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
     



