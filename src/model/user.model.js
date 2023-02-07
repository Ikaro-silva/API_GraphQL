/**
 * função: definir o shcema do mongoose("campos do banco de dados").
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */

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