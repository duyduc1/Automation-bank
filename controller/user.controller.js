const User = require('../model/user')

exports.getUsers = ( async ( req,res ) => {
    const userList = await User.find() 
    res.status(200).json(userList)
})



