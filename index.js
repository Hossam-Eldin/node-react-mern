const express = require('express')
// must be required first or it will create error 
require('./models/User')
//require it after the requireing User Model 
require('./services/passport')

const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')
const keys = require('./config/keys')

//data base connection 
mongoose.connect(keys.databaseURI, { useNewUrlParser: true })


const app = express()


//routers 
authRoutes(app)



// lisent to env port or 5000 
const PORT = process.env.PORT || 5000;
app.listen(PORT)