const mongoose=require("mongoose")

const BankNumSchema=new mongoose.Schema({
    bankname :{
        type:String,
        default : ""
    },
    rawBanker:{
        type:String,
        required:true
    }
})

const bankNumCollection=new mongoose.model('parser',BankNumSchema)

module.exports=bankNumCollection