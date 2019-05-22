const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    register_date:{
        type:Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;