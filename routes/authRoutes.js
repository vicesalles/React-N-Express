const passport = require('passport');

module.exports = app => {

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


}