const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true },
    authors: { type: Array, require: true },
    synopsis: String,
    thumbnail: String,
    infoLink: String,
    date: { type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;