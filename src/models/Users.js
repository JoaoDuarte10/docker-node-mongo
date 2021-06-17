const mongoose = require('mongoose');

const users = mongoose.Schema({
    name: String,
    password: String
});

module.exports = mongoose.model('User', users);