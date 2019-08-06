const router = require("express").Router();
<<<<<<< HEAD


// // job routes
// router.use("/jobsView", jobRoutes);
// const bookRoutes = require("./books");
// const devRoutes = require("./developers");

// Book routes

=======

const devRoutes = require("./developers");
>>>>>>> master
router.use("./developers", devRoutes);

module.exports = router;
