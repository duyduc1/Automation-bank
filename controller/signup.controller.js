const User = require('../model/user')
const ePassowrd = require('../scurrety/epassword')


exports.getSignup = (async (req, res) => {
    res.render("signup.ejs")
})

exports.postSignup = (async (req, res) => {
    const hasdedPass = await ePassowrd.cryptPassword(req.body.password)
    const data = {
        name: req.body.username,
        password: hasdedPass,
        email: req.body.email,
        numberphone: req.body.numberphone,
    }
    const newUser = new User(data);
    const result = await newUser.save();
    res.redirect('/login')
})

