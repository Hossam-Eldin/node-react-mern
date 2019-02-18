const mongoose = require('mongoose')
const {Schema} = mongoose

const recipientSchema = new Schema({

    email: String,
    responsded : {type:boolean, default :false}
})

module.exports = recipientSchema;