const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user');

//Serialize User
passport.serializeUser((user, done) => {
    done(null,user.id);
})

//Check if there's a valid user serialized
passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=>{
            done(null,user);
        });
})

//Strategy waiting for a code
passport.use(new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },

    //Got the token
    (accessToken, refreshToken, profile, done) => {

        //User exists?   
        User.findOne({googleID: profile.id})
            .then((u) => {
                if (u) {
                    
                    //first argument = error (if there's one)
                    //second argument = user
                    done(null, u);

                } else {
                    //Create New User 
                    new User({
                            googleID: profile.id,
                            name: profile.name.givenName,
                            surname: profile.name.familyName,
                            gender: profile.gender,
                            email: profile.emails[0].value,
                            picture: profile.photos[0].value
                        }).save()
                        .then(u => done(null, u))

                }
            });

    }
));