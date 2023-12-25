require('dotenv').config();
const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
mongoose.connect("mongodb://localhost:27017/login-tut")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('error');
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());
app.use(cookieParser());

var userRoute = require('./routes/user.route')
var loginRoute = require('./routes/login.route')
var signRoute = require('./routes/signup.route')
var bankRoute = require('./routes/bank.route')
var bankpsRoute = require('./routes/bankps.route')
var signupBankRoute = require('./routes/signupBank.route')


app.use('/signup', signRoute)
app.use('/', bankRoute)
app.use('/listuser', userRoute)
app.use('/login',loginRoute)
app.use('/parser',bankpsRoute)
app.use('/signupBank' , signupBankRoute)

app.listen(4000)