const cookieParser = require('cookie-parser')
const User = require('../model/user')
let bcrypt = require('bcrypt')


exports.getLogin = (async (req, res) => {
    res.render("login.ejs")
})

exports.postLogin = ((req, res) => {
    let name = req.body.username
    let password = req.body.password


    User.findOne({ name: name })
        .then(data => {
            if (data) {
                const checkPass = bcrypt.compareSync(password, data.password)
                if (checkPass) {
                    res.cookie('user',data.email)
                    res.redirect('/')               
                }
                else {
                    res.status(403)
                }
            } else {
                res.status(403)
            }
        })

})



