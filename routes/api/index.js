const router = require("express").Router();
const userRoute = require("./userRoute");

// User routes
router.use("/user", userRoute);

module.exports = router;
