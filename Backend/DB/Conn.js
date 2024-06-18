const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Library").then(()=>
{
    console.log("Library Management System");
}).catch((error)=>
{
    console.log("There might be some error");
})



