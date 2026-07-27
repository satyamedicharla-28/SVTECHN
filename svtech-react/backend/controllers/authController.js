const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const Admin = require("../models/Admin");
const OTP = require("../models/OTP");

const sendOTP = require("../utils/sendOTP");

/*
====================================
ADMIN LOGIN
====================================
*/

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and Password are required",
      });
    }

    // Find Admin
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    // Remove old OTPs
    await OTP.deleteMany({
      email: admin.email,
    });

    // Save new OTP
    await OTP.create({
      email: admin.email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // Send OTP Email
    await sendOTP(admin.email, otp);

    console.log("OTP Generated:", otp);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      email: admin.email,
    });

  } catch (err) {
    console.log("Login Error:", err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
====================================
VERIFY OTP
====================================
*/

exports.verifyOTP = async (req, res) => {
  try {

    const { email, otp } = req.body;

    console.log("================================");
    console.log("VERIFY OTP API CALLED");
    console.log("Email Received:", email);
    console.log("OTP Received:", JSON.stringify(otp));
    console.log("================================");

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    // Find OTP
    const otpData = await OTP.findOne({ email });

    console.log("OTP Record From DB:", otpData);

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    }

    console.log("Entered OTP :", JSON.stringify(otp));
    console.log("Database OTP:", JSON.stringify(otpData.otp));

    console.log(
      "OTP Match:",
      String(otpData.otp).trim() === String(otp).trim()
    );

    // OTP Expired
    if (new Date() > otpData.expiresAt) {

      console.log("OTP Expired");

      await OTP.deleteOne({
        _id: otpData._id,
      });

      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    // OTP Mismatch
    if (String(otpData.otp).trim() !== String(otp).trim()) {

      console.log("OTP Mismatch");

      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Find Admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Delete OTP after successful verification
    await OTP.deleteOne({
      _id: otpData._id,
    });

    console.log("OTP VERIFIED SUCCESSFULLY");

    res.status(200).json({
      success: true,
      message: "OTP Verified Successfully",
      token,
    });

  } catch (err) {

    console.log("Verify OTP Error:", err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
====================================
RESEND OTP
====================================
*/

exports.resendOTP = async (req, res) => {
  try {

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Find Admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Generate New OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    // Delete Old OTP
    await OTP.deleteMany({ email });

    // Save New OTP
    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // Send OTP Email
    await sendOTP(email, otp);

    console.log("New OTP Sent:", otp);

    res.status(200).json({
      success: true,
      message: "OTP Resent Successfully",
    });

  } catch (err) {

    console.log("Resend OTP Error:", err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};
