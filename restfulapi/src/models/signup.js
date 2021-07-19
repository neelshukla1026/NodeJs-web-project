const mongoose = require ("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email : {
        type:String,
        required:true,
        unique:[true, "Email id already Registered"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("InValid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:[true,"Mobile No. is already Registered "]
    },
    address : {
        type:String,
        required:true
        
    }
})

// create a new model 

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;