const mongoose = require('mongoose');
const useSchema = new mongoose.Schema({
    name: {type:String, require: ture},
    email: {type:String, require: ture, unique: ture},
    age:Number
});
const User = mongoose.model('User', useSchema);

module.exports = User;