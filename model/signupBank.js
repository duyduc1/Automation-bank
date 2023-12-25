const mongoose=require("mongoose")

const signUpSchema=new mongoose.Schema({
    bankname:{
        type:String,
        required:true
    },
    banklist:{
        type:String,
        required:true
    },
    banknumber:{
        type:Number,
        required:true
    }
})

const signupCollection=new mongoose.model('signupbanks',signUpSchema)

module.exports=signupCollection