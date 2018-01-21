const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const linkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const twitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//User Model
const User = mongoose.model('user');

//Serialize User
passport.serializeUser((user, done) => {
    done(null, user.id);
})

//Check if there's a valid user serialized
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
})


//STRATEGIES

//Google
passport.use(new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },

    //Got the token
    async(accessToken, refreshToken, profile, done) => {

        //User exists?   
        const isUser = await User.findOne({
            googleID: profile.id
        })

        if (isUser) {

            //first argument = error (if there's one)
            //second argument = user
            done(null, isUser);

        } else {

            //Create New User 
            const newUser = await new User({
                googleID: profile.id,
                name: profile.name.givenName,
                surname: profile.name.familyName,
                gender: profile._json.gender,
                email: profile.emails[0].value,
                picture: profile.photos[0].value
            }).save()
            done(null, newUser);
        }

    }
));

//Linkedin
passport.use(new linkedinStrategy({
        clientID: keys.linkedinClientID,
        clientSecret: keys.linkedinClientSecret,
        callbackURL: "/auth/linkedin/callback",
        scope: ['r_basicprofile', 'r_emailaddress'],
        proxy: true,
        state: true
    },

    //Got Token
    async(accessToken, refreshToken, profile, done) => {

        console.log(profile);

        const isUser = await User.findOne({
            linkedinID: profile.id
        })


        if (isUser) {

            done(null, isUser);

        } else {

            const newUser = await new User({
                linkedinID: profile.id,
                name: profile.name.givenName,
                surname: profile.name.familyName,
                email: profile.emails[0].value,
                picture: profile._json.pictureURL,
                positions: profile._json.positions,
                location: profile._json.location.name
            }).save()

            done(null, newUser)

        }

    }

));