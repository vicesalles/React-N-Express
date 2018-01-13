const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//Strategy waiting for a code
passport.use(new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    //Got the token
    (accessToken, refreshToken, profile, done) => {
        console.log('token: ', accessToken);
        console.log('refresh: ', refreshToken);
        console.log('profile: ',profile);
    }
));

//Ask for a token
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

//Go to the callback route with the token
app.get('/auth/google/callback',
    passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);