const mongoose = require("mongoose");
const Member = require("./Member");
const Book = require("./Books");

const Bookreturns = new mongoose.Schema({
    book:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
    },
    member:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Member",
        required:true
    },
    returndate:
    {
        type:Date,
        required:true
    }
});
const Bookreturn = new mongoose.model("Bookreturn",Bookreturns);

module.exports = Bookreturn;