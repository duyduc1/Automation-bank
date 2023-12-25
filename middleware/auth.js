const User = require('../model/user')
exports.checkUser = (async (req, res, next) => {
    if(!req.cookies.user){
        res.redirect('/login')
    }else{
        User.findOne({email:req.cookies.user})
        .then(data =>{
            data?next():res.redirect('/login')
        })
        .catch(err=>{
            res.redirect('/login')
        })
    } 
})