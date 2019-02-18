const express = require('express')
const cookieSession =require('cookie-session')
const passport = require('passport')
 const authRoutes = require('./routes/authRoutes')
const paymentsRoutes =require('./routes/paymentsRouters')
const mongoose = require('mongoose')
const keys = require('./config/keys')
// must be required first or it will create error 
require('./models/User')
require('./models/Survey')
//require it after the requireing User Model 
require('./services/passport') 

//data base connection 
 mongoose.connect(keys.databaseURI, { useNewUrlParser: true })

 
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 //enable cookies 
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
app.use(passport.initialize())
app.use(passport.session())



//routers 
authRoutes(app)
paymentsRoutes(app)


if (process.env.NODE_ENV ===  'production') {
   // to serve up the production assets
   app.use(express.static('client/build'));

   const path = require('path');
   app.get('*',(req, res) => {
     res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
   })

}

// lisent to env port or 5000 
//const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000)


