const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  createApplicant,
  getApplicants,
  updateApplicant,
  deleteApplicant,
  getApplicantCount,
} = require("../controllers/applicantController");

// Dashboard Count
router.get("/count", getApplicantCount);

// Get All Applicants
router.get("/", getApplicants);

// Add Applicant with Resume Upload
router.post(
  "/",
  upload.single("resume"),
  createApplicant
);

// Update Applicant
router.put("/:id", updateApplicant);

// Delete Applicant
router.delete("/:id", deleteApplicant);

module.exports = router;