const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const {Schema }= mongoose

const UserSchema = new Schema({
    googleId: String,
    credits: {type:Number , default: 0}
   // name : String,
   // email : String,

})

mongoose.model('users', UserSchema)

