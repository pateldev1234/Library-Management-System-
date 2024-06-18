const mongoose = require("mongoose");
const validator = require("validator");


const Members = new mongoose.Schema({
    fname:
    {
        type:String,
        trim:true,
        required:true
    },
    lname:
    {
        type:String,
        trim:true,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                console.log("Incorrect Email Id Entered");
            }
        }
    },
    phone:
    {
        type:String,
        unique:true,
        required:true,
        maxlength: 10,
        unique:true
    },
    debt:
    {
        type:Number,
        required:true
    }
});


const Member = new mongoose.model("Member",Members);

module.exports = Member;