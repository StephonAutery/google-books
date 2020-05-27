const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book
      .find()
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Book.findById(req.params.id)
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbBooks => dbBooks.remove())
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  }
};