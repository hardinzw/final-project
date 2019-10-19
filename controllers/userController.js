const {User, validate } = require("../models/user.model");
const authenticate = require("../middleware/auth");
const bcrypt = require("bcrypt");

// Defining methods for the booksController
module.exports = {
  signIn: async (req, res) => {
  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.send({
    pass: 401,
    });
  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result == true) {
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
    pass: 200,
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
    });
    // res.send(user, token);
  // res.redirect('/home');
  } else {
    res.send({
      pass: 400,
      });
  //  res.redirect('/');
          }
      }); 
  },

  signUp: async ( req, res) => {
    // validate the request body first
    const { error } = validate(req.body);
    if (error) return res.send({
      pass: 400, 
      error: error.details[0].message});
  
    //find an existing user
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.send({pass: 401});
  
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email
    });
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
  
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
      pass: 200,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
    console.log("Signed Up New User");
  },
};
