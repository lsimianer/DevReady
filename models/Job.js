const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  Company: { type: String, required: true },
  Title: { type: String, required: true },
  Location: String,
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
