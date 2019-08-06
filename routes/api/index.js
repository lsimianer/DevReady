const router = require("express").Router();
const jobRoutes = require("./jobsView");

// job routes
router.use("/jobsView", jobRoutes);

module.exports = router;
