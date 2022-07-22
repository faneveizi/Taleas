const mongoose = require('mongoose');
const Schema = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    ISBN: Number,
    price: Number
});

module.exports = mongoose.model("Book",bookSchema); 