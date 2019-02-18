const  mongoose = require('mongose')
const {Schema} = mongoose
const recipientSchema = require('./Recipient')

const survySchema =new Schema({
    title: String,
    body: String,
    subject: String,
    recipients : [recipientSchema],
    yes:{ type: Number, default:0 },
    no: { type: Number, default:0 },
    _user: { type:Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
})



mongoose.model('surveys', survySchema);
