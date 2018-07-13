const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TemplateSchema = require('./templateSchema');

// Schema for storing users 
const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    salt: String,
    templates: [TemplateSchema]
});

// MongoDB Model for "user" collection
const User = mongoose.model("user", UserSchema);

module.exports = User;
