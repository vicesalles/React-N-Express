const passport = require('passport');

module.exports = app => {

    //GOOGLE
    //Auth req
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //Auth callback 
    app.get('/auth/google/callback',
        passport.authenticate('google'), (req, res) => {
            res.redirect('/api/current_user');
        }
    );

    //LINKEDIN

    //req
    app.get('/auth/linkedin', passport.authenticate('linkedin'));

    //Auth calback
    app.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', {
            successRedirect: '/api/current_user',
            failureRedirect: '/login'
        })
    )


}