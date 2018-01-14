const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID:String,
    name:String,
    surname:String,
    gender:String,
    email:String,
    picture:Object
});

mongoose.model('user',userSchema);