const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the job listings below
//rendered through jobsview
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jobsView\\"
);


