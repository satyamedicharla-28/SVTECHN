const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
  getJobCount,
} = require("../controllers/jobController");

router.get("/count", getJobCount);
router.post("/", createJob);

router.get("/", getJobs);

// Get Single Job
//router.get("/:id", getJobById);//

// Update Job
router.put("/:id", updateJob);

// Delete Job
router.delete("/:id", deleteJob);

module.exports = router;