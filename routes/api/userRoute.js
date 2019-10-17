const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/signIn")
.get(userController.signIn);

router.route("/signUp")
.post(userController.signUp);

module.exports = router;
