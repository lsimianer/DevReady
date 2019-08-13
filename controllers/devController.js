const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Developer
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Developer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("SOMEBODY WANTS TO MAKE SOMETHING")
    console.log(req.body)
    db.Developer
      .create(req.body)
      .then(dbModel => res.redirect(307, "/api/developers/login"))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Developer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Developer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  login: function(req, res) {
    db.Developer
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    res.json({ message: "logged-in user: ", user: req.user });
  },

  getMe: function(req, res){
    db.Developer
      .findById({ _id: req.user._id })
      .then(dbModel => {
        console.log("FINDMEBACK");
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};