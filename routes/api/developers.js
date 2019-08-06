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

module.exports = router;