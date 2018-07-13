const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for storing templates of users
const TemplateSchema = new Schema({
    name: String,
    data: String,
    body: String,
    default: Boolean
});

module.exports = TemplateSchema;
