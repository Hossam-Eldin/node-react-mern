const mongoose =require('mongoose')
const isLogin = require('../middlewares/requireLogin')
const haveCredits = require('../middlewares/requireCredits')
const Mailer =require('../services/Mailer')
const surveyTemplate =require('../services/emailTemplates/surveyTemplate')

const Surveys = mongoose.model('surveys')

module.exports = app => {

    app.get('/api/surveys', (req, res) => {
        res.send('thanks for voting')    
    })

    app.post('/api/surveys',isLogin , haveCredits , async (req, res) => {
       const {title , subject, body, recipients} = req.body;

       const survey = new Surveys({
           title,
           subject,
           body,
           recipients: recipients.split(',').map(email => ({email:email.trim()})),
           _user: req.user.id,
           dateSent : Date.now()
       });

       // send email with mailer 
       const mailer = new Mailer(survey, surveyTemplate(survey));  

       try {

        await mailer.send()
        await survey.save()
        req.user.credits -= 1;
        const user = await req.user.save()
 
        res.send(user)

    } catch (error) {

        res.status(422).send(error)
       }

    })
}
/*
const survey = {title:'the  cute test title', recipients:'hosam.elden@hotmail.com', subject:'test subject', body:'test body' }
axios.post('/api/surveys', survey).then(data=>{consol.log(data)}).catch(err => { console.log(err)});
*/