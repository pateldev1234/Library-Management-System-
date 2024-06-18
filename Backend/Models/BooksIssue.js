const mongoose = require("mongoose");
const Member = require("./Member");
const Book = require("./Books");

const BookIssues = new mongoose.Schema({
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
    issuedate:
    {
        type:Date,
        required:true
    }
});

const BookIssue = new mongoose.model("BookIssue",BookIssues);

module.exports = BookIssue;