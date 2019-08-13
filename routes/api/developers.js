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

router.route("/developers")
  .get(devController.findAll)

router.route("/me")
  .get(devController.getMe)

  router.route("/score")
  .put(devController.saveScore)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(devController.findById)
  .put(devController.update)
  .delete(devController.remove);


module.exports = router;