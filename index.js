const express = require('express');
const mongoose = require('mongoose');

//Models
require('./models/User');

//Auth
require('./services/passport');

//Admin Credentials
const keys = require('./config/keys');

//Routes
const authRoutes = require('./routes/authRoutes');


//Connect to DB
mongoose.connect(keys.mongoURI);

//Create App
const app = express();

//Link routes
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);