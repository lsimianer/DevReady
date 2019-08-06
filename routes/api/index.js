const router = require("express").Router();
const bookRoutes = require("./books");
const devRoutes = require("./developers");

// Book routes
router.use("/books", bookRoutes);
router.use("./developers", devRoutes);

module.exports = router;
