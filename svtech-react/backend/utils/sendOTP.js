const nodemailer = require("nodemailer");

// Check if environment variables are loaded
console.log("✅ sendOTP.js loaded");
console.log("EMAIL HOST:", process.env.EMAIL_HOST);
console.log("EMAIL PORT:", process.env.EMAIL_PORT);
console.log("EMAIL USER:", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // Office365 uses STARTTLS
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify SMTP connection when the server starts
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails.");
  }
});

const sendOTP = async (email, otp) => {
  try {
    const mailOptions = {
      from: `"SV TECH NETWORKS" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "SV TECH NETWORKS - Admin Login OTP",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2 style="color:#0B5ED7;">SV TECH NETWORKS PRIVATE LIMITED</h2>

          <p>Hello,</p>

          <p>Your One-Time Password (OTP) for Admin Login is:</p>

          <h1 style="color:#0B5ED7;letter-spacing:8px;">
            ${otp}
          </h1>

          <p>This OTP is valid for <strong>5 minutes</strong>.</p>

          <p>If you did not request this login, please ignore this email.</p>

          <br>

          <p>Regards,</p>
          <p><strong>SV TECH NETWORKS PRIVATE LIMITED</strong></p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email Sent Successfully");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);

    return true;
  } catch (error) {
    console.error("❌ Failed to send email");
    console.error(error);
    throw error;
  }
};

module.exports = sendOTP;