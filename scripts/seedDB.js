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
    title: "The Dead Zone",
    author: "Stephen King",
    synopsis:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    synopsis:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    date: new Date(Date.now())
  },
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
