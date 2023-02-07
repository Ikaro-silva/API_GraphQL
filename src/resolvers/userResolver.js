/**
 * função: definir os resolves , serão responsavel por consultas diretas
 *         com o banco de dados.("controlles")
 * data:07/02/2023
 * autor:Ikaro silva
 * version:1.0.0
 */

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