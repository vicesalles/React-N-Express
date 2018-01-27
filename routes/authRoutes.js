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
            res.redirect('/surveys');
        }
    );

    //LINKEDIN

    //req
    app.get('/auth/linkedin', passport.authenticate('linkedin'));

    //Auth calback
    app.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', {
            successRedirect: '/surveys',
            failureRedirect: '/login'
        })
    )

    //USER GETTING HER OWN DATA

    app.get('/api/me', (req, res) => {
        res.send(req.user);
    })


    //Login OUT

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })


}