const Candidate = require("../models/Candidate");

exports.uploadResume = async (req, res) => {
  try {
    const candidate = new Candidate({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      appliedJob: req.body.appliedJob,
      resume: req.file.filename,
    });

    await candidate.save();

    res.json({
      success: true,
      message: "Resume Uploaded Successfully",
      candidate,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};