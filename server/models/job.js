
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  category: String,
  gender: String,
  salary: String,
  vacancy: Number,
  skills: String,
  experience: String,
  type: String,
  startDate: Date,
  lastDate: Date,
  description: String,
  about: String,
  links: {
    link1: String,
    link2: String
      },
  postedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Job", jobSchema);