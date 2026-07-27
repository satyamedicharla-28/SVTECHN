const express = require("express");
const router = express.Router();

const {
  login,
  verifyOTP,
  resendOTP,
} = require("../controllers/authController");

// Login → Username + Password
router.post("/login", login);

// Verify OTP
router.post("/verify-otp", verifyOTP);

// Resend OTP
router.post("/resend-otp", resendOTP);

module.exports = router;