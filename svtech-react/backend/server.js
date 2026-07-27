require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/authRoutes");


const jobRoutes = require("./routes/jobRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");



const app = express();


// Middleware

app.use(cors());

app.use(express.json());


// Serve uploaded resume files

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);


// MongoDB Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));



// Home Route

app.get("/", (req, res) => {

  res.send("SVTECH Backend Running");

});



// API Routes

app.use("/api/jobs", jobRoutes);

app.use("/api/applicants", applicantRoutes);

app.use("/api/resumes", resumeRoutes);

app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// Start Server

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`);

});