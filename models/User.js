const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID:String,
    linkedinID:String,
    name:String,
    surname:String,
    gender:String,
    email:String,
    location:Object,
    picture:String
});

mongoose.model('user',userSchema);

