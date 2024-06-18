const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
app.use(express.json());

require("./DB/Conn");
const Book = require("./Models/Books");
const Member = require("./Models/Member");
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

const router = require("./routes/router");
app.use(router);

app.listen(port,()=>
{
    console.log("Server is running at port number 8000");
});


