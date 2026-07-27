const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");


// Connect MongoDB

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    createAdmin();

})
.catch((error)=>{
    console.log(error);
});



// Create Admin Function

const createAdmin = async()=>{

try{


const existingAdmin = await Admin.findOne({
    email:"it-ops@svtechn.com"
});


if(existingAdmin){

console.log("Admin already exists");

process.exit();

}



const hashedPassword = await bcrypt.hash(
"admin123",
10
);



const admin = new Admin({

username:"SV Tech Admin",

email:"it-ops@svtechn.com",

password:hashedPassword,

role:"Admin"

});



await admin.save();



console.log("Admin Created Successfully");

process.exit();



}
catch(error){

console.log(error);

process.exit();

}


};