const mongoose =require('mongoose')
const isLogin = require('../middlewares/requireLogin')
const haveCredits = require('../middlewares/requireCredits')
const Mailer =require('../services/Mailer')
const Survey = mongoose.model('surveys')
const surveyTemplate =require('../services/emailTemplates/surveyTemplate')

module.exports = app => {
    app.post('/api/surveys',isLogin , haveCredits , (req, res) => {
       const {title , subject, body, recipients} = req.body;

       const survey = new Survey({
           title,
           subject,
           body,
           recipients: recipients.split(',').map(email => ({email:email.trim()})),
           _user: req.user.id,
           dateSent : Date.now()
       });

       // send email with mailer 
       const mailer = new Mailer(survey, surveyTemplate(survey));  
   
    })
}

