const router = require("express").Router();

const devRoutes = require("./developers");
router.use("./developers", devRoutes);

module.exports = router;
