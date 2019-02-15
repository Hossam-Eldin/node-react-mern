const keys = require('../config/keys')
const Stripe= require('stripe')(keys.stripeSK)
const isLogin = require('../middlewares/requireLogin')

module.exports = (app) => {

    app.post('/api/stripe',isLogin ,async (req, res) => {
      // console.log(req.body.id);

    
        const charge = await Stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'$5 creadite',
            source: req.body.id
        });

        req.user.credits += 5;
      
        const user = await req.user.save() 
        res.send(user);
        
        console.log(charge)



    });
}