const config = require("config");
const mongoose = require("mongoose");
const routes = require("./routes");
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
console.error("FATAL ERROR: myprivatekey is not defined.");
process.exit(1);
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
//connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://hardinzw:tyson4@ds141168.mlab.com:41168/heroku_rsxj0vlj")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

  // Start the API server
app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
