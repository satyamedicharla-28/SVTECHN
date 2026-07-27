const Job = require("../models/Job");

// ==============================
// Add Job
// ==============================
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Get All Jobs
// ==============================
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Get Single Job
// ==============================
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Update Job
// ==============================
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Delete Job
// ==============================
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// Get Total Jobs
exports.getJobCount = async (req, res) => {
  try {
    const count = await Job.countDocuments();

    res.json({
      totalJobs: count,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};