const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  appliedJob: String,
  resume: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Candidate", CandidateSchema);