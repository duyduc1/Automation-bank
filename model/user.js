const mongoose=require("mongoose")

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    numberphone:{
        type:Number,
        required:true
    },
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signupbanks'
    }
    // bankname:{
    //     type:String,
    //     default: ''
    // },
    // banklist:{
    //     type:String,
    //     default: ''
    // },
    // banknumber:{
    //     type:Number,
    //     default: ''
    // }
})

const LogInCollection=new mongoose.model('users',logInSchema)

module.exports=LogInCollection