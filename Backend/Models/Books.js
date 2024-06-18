const mongoose = require("mongoose");

const Books = new mongoose.Schema({
        title:
        {
            type:String,
            required:true,
            trim:true,
        },
        subtitle:
        {
            type:String,
            required:true,
            trim:true,
        },
        author:
        {
            type:String,
            required:true,
            trim:true,
        },
        ISBN:
        {
            type:Number,
            unique:true,
            required:true,
            trim:true,
        },
        publisher:
        {
            type:String,
            required:true,
            trim:true,

        },
        page:
        {
            type:Number,
            required:true,
            trim:true,
        },
        quantity:
        {
            type:Number,
            required:true,
            trim:true,
        },
        description:
        {
            type:String,
            required:true,
            trim:true,
        },
        price:
        {
            type:Number,
            required:true,
            trim:true,
        }
});






const Book = new mongoose.model("Book",Books);

module.exports = Book;