const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
var passport = require("./config/passport");


const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
require('dotenv').config();

// DB Config
// const db = require("./client/config/keys").mongoURI;

// Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// require("./routes/api-routes.js")(app);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DevReadyDB");
//mongoose.connect(process.env.MONGODB)


// Start the API server
app.listen(process.env.PORT || 8080, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });







