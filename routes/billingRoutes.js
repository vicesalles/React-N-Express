const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = app =>{
    app.post('/api/stripe', requireLogin, async (req,res)=>{
       
       const charge = await stripe.charges.create({
            amount: 500,
            currency:"eur",
            description:"5€ from 1000 credits",
            source: req.body.id
        });

        req.user.credits +=1000;
        const user = await req.user.save();

        res.send(user);

    });
}