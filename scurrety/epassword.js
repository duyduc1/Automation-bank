var bcrypt = require('bcrypt');

exports.cryptPassword = async function (password, callback) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
    await bcrypt.genSalt(10, function (err, salt) {
        if (err)
            return callback(err);
    
        bcrypt.hash(password, salt, function (err, hash) {
            return callback(err, hash);
        });
    });
};


exports.comparePassword = function(plainPass, hashword, callback) {
    bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
        return err == null ?
            callback(null, isPasswordMatch) :
            callback(err);
    });
 };


