const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    console.log("MongoDB Connected");

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await Admin.findOneAndUpdate(
        { username: "admin" },
        { password: hashedPassword },
        { new: true }
    );

    if(admin){
        console.log("Password Updated Successfully");
    }
    else{
        console.log("Admin not found");
    }

    process.exit();

})
.catch(err => {
    console.log(err);
});