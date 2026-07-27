const Applicant = require("../models/Applicant");

// ======================================
// Create Applicant
// ======================================
exports.createApplicant = async (req, res) => {
  try {
    const applicant = new Applicant({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      experience: req.body.experience,
      currentCompany: req.body.currentCompany,
      currentCTC: req.body.currentCTC,
      expectedCTC: req.body.expectedCTC,
      noticePeriod: req.body.noticePeriod,
      coverLetter: req.body.coverLetter,
      jobTitle: req.body.jobTitle,
      status: "Pending",
      resume: req.file ? req.file.filename : "",
    });

    await applicant.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      applicant,
    });
  } catch (err) {
    console.error("Create Applicant Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ======================================
// Get All Applicants
// ======================================
exports.getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({
      createdAt: -1,
    });

    res.status(200).json(applicants);
  } catch (err) {
    console.error("Get Applicants Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ======================================
// Update Applicant
// ======================================
exports.updateApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!applicant) {
      return res.status(404).json({
        success: false,
        message: "Applicant not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Applicant updated successfully.",
      applicant,
    });
  } catch (err) {
    console.error("Update Applicant Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ======================================
// Delete Applicant
// ======================================
exports.deleteApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndDelete(req.params.id);

    if (!applicant) {
      return res.status(404).json({
        success: false,
        message: "Applicant not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Applicant deleted successfully.",
    });
  } catch (err) {
    console.error("Delete Applicant Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ======================================
// Dashboard Applicant Count
// ======================================
exports.getApplicantCount = async (req, res) => {
  try {
    const totalApplicants = await Applicant.countDocuments();

    res.status(200).json({
      success: true,
      totalApplicants,
    });
  } catch (err) {
    console.error("Applicant Count Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};