// const User = require('../model/user')
const signupBank = require('../model/signupBank')

exports.getsignupBank = (async (req, res) => {
    res.render("signupBank.ejs")
})

exports.postsigupBank = ( async (req,res) =>{
    const data = {
        bankname : req.body.bankname,
        banklist : req.body.banklist,
        banknumber : req.body.banknumber,
    }
    // const email = req.cookies.user
    // User.updateOne({email:email},data)
    //     .then(user =>{      
    //         res.redirect('/')
    //     })
    //     .catch(err=>{
    //         res.redirect('/')
    //     })
    const newSignupBank = new signupBank(data);
    const result = await newSignupBank.save();
    res.redirect('/')
})