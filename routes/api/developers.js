const router = require("express").Router();
// const booksController = require("../../controllers/devController");
const devController = require("../../controllers/devController");

// Matches with "/api/books"
router.route("/")
  .get(devController.findAll)
  .post(devController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(devController.findById)
  .put(devController.update)
  .delete(devController.remove);

  const mongoose = require('mongoose')
  const Developer = require("../../models/Developer")
  
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DevReadyDB")
  
  const testDeveloper = {
      email: "test@test.com",
      password: "testtest"
  }
  // Remove all of our Developers and then try and make a new one
  Developer.remove({}).then(() => {
      Developer.create(testDeveloper).then(Developer => {
          console.log(Developer)
          return Developer.checkPassword(testDeveloper.password)
      }).then(result => {
          console.log(result)
          mongoose.connection.close()
      })
  })


module.exports = router;