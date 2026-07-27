const Candidate = require("../models/Candidate");

exports.uploadResume = async (req, res) => {
  try {
    const candidate = new Candidate({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      appliedJob: req.body.appliedJob,
      resume: req.file ? req.file.filename : "",
    });

    await candidate.save();

    res.status(201).json({
      success: true,
      message: "Resume uploaded successfully",
      data: candidate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};