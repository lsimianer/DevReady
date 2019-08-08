const router = require("express").Router();
// const booksController = require("../../controllers/devController");
const devController = require("../../controllers/devController");
const passport = require("../../config/passport.js");

// Matches with "/api/books"
router.route("/")
  .post(devController.create);

router.route("/login")
  .post(passport.authenticate("local"), devController.login);

router.route("/signup")
  .post(devController.create)


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(devController.findAll)
  .put(devController.update)
  .delete(devController.remove);


module.exports = router;