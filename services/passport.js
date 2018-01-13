const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


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
