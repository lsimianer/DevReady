const router = require("express").Router();
<<<<<<< HEAD
const jobRoutes = require("./jobsView");

// job routes
router.use("/jobsView", jobRoutes);
=======
const bookRoutes = require("./books");
const devRoutes = require("./developers");

// Book routes
router.use("/books", bookRoutes);
router.use("./developers", devRoutes);
>>>>>>> master

module.exports = router;
