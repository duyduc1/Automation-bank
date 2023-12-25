const parSer = require('../model/bankps')

// exports.getPaser = (async(rqe,res)=>{
//     res.render("paser.ejs")
// })

exports.postPaser = ( async (req,res) =>{
    const parserData = {
        rawBanker: req.body.content,
       
    }
    const newpaser = new parSer(parserData);
    const result = await newpaser.save();
    res.status(200).json(result);
})

exports.getPaser = ( async ( req,res ) => {
    const userList = await parSer.find() 
    res.status(200).json(userList)
})
