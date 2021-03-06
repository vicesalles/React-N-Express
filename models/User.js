const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID:String,
    linkedinID:String,
    twitterID:String,
    name:String,
    surname:String,
    gender:String,
    email:String,
    positions:Object,
    location:String,
    picture:String,
    creation:{
        type:Date,
        default:Date.now
    },
    credits:{
        type:Number,
        default:0
    }
});

mongoose.model('user',userSchema);

