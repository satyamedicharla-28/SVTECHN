const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    experience:String,

    currentCompany:String,

    currentCTC:String,

    expectedCTC:String,

    noticePeriod:String,

    coverLetter:String,

    resume:String,

    jobTitle:String,

    status:{
        type:String,
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports = mongoose.model("Applicant", applicantSchema);