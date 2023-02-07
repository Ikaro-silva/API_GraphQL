/* 
* função: definir variasveis de ambiente com o auxilio do dotenv.
* data:07/02/2023
* autor:Ikaro silva
* version:1.0.0
*/

const dotenv =require('dotenv')
dotenv.config()

// variavel de ambiente "URI" do mongodb
module.exports={
    URI:process.env.URI
}
