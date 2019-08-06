const router = require("express").Router();


// // job routes
// router.use("/jobsView", jobRoutes);
// const bookRoutes = require("./books");
// const devRoutes = require("./developers");

// Book routes

router.use("./developers", devRoutes);

module.exports = router;
