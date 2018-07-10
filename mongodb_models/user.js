const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TemplateSchema = require('./templateSchema');

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    salt: String,
    templates: [TemplateSchema]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
