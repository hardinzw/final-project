const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/login"
);

const Users = [
  {
    firstName: "Pablo",
    lastName: "Pablito",
    email:"test@gmai.com",
    password: "test123"
  },
  {
    firstName: "Emil",
    lastName: "Patino",
    email:"test2@gmai.com",
    password: "test123"
  },
  {
    firstName: "Blitz",
    lastName: "Pooper",
    email:"test3@gmai.com",
    password: "test123"
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(Users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
