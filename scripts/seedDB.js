const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the job listings below
//rendered through jobsview
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const JobSeed = [
  {
    company: "Lawn Starter",
    Title: "Junior Java Developer",
    Location: "Austin, Tx (highland area)",
    Salary: "$70,000 - 90,000",
    date: new Date(Date.now())
  },
  {
    company: "Health Plus Life CBD",
    Title: "Full Stack Developer",
    Location: "Austin, Tx (Arboretum area)",
    Salary: "$90,000 - 110,000",
    date: new Date(Date.now())
  },
  {
    company: "Redwood Logistics",
    Title: "Junior Software Developer",
    Location: "Austin, Tx ",
    Salary: "$55,000 - 70,000",
    date: new Date(Date.now())
  },
  {
    company: "dataquest corp",
    Title: "Junior Java Developer",
    Location: "Austin, Tx ",
    Salary: "$55,000 - 60,000",
    date: new Date(Date.now())
  },
  {
    company: "Petroplan",
    Title: "Senior Software Engineer",
    Location: "Austin, Tx ",
    Salary: "$110,000 - 130,000",
    date: new Date(Date.now())
  },
  {
    company: "Point of Rental Software",
    Title: "Application Software Developer-Full Stack",
    Location: "Austin, Tx ",
    Salary: "$80,000 - 90,000",
    date: new Date(Date.now())
  },
  {
    company: "In Motion Software",
    Title: "Full Stack Web Developer",
    Location: "Austin, Tx ",
    Salary: "$85,000 - 95,000",
    date: new Date(Date.now())
  },
];

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(JobSeed))
  .then(data => {
    console.log(data.result.n + " jobs inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
