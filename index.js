const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

//Models
require('./models/User');

//Auth
require('./services/passport');

//Admin Credentials
const keys = require('./config/keys');

//Routes
const authRoutes = require('./routes/authRoutes');

/*________________end of imports_________________________________*/

//Connect to DB
mongoose.connect(keys.mongoURI);

//Create App
const app = express();
//Enabling Auth
app.use(passport.initialize());

//Enabling cookies
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey,keys.secondCookieKey] //Amb això es crea l'encriptació de la id de sessio, se n'hi poden introduir diverses per millorar la seguretat.
}));

app.use(passport.session());

//Link routes
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);