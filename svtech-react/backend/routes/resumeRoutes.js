const express = require("express");
const multer = require("multer");

const router = express.Router();

const {
  uploadResume,
} = require("../controllers/resumeController");

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/resumes");

  },

  filename: function (req, file, cb) {

    cb(null, Date.now() + "-" + file.originalname);

  },

});

const upload = multer({
  storage,
});

router.post(
  "/",
  upload.single("resume"),
  uploadResume
);

module.exports = router;