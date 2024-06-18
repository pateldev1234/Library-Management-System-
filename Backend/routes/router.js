const express = require("express");
const router = new express.Router();
const Book = require("../Models/Books");
const Member = require("../Models/Member");
const Bookissue = require("../Models/BooksIssue");
const Bookreturn = require("../Models/Booksreturn");

router.delete('/deldata/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const d1 = await Book.deleteOne({ title });
    }
    catch (error) {
        console.log("Book data is deleted");
    }
})

router.delete('/delldata/:fname', async (req, res) => {
    try {
        const { fname } = req.params;
        const d1 = await Member.deleteOne({ fname });
    }
    catch (error) {
        console.log("Member data is deleted");
    }
})

router.post('/cleardebit', async (req, res) => {
    try {
        const { fname } = req.body;

        const d1 = await Member.findOne({ fname });
        const d2 = await Member.deleteOne({ fname });
        d1.debt = 0;

        const res1 = new Member({
            fname: d1.fname,
            lname: d1.lname,
            phone: d1.phone,
            email: d1.email,
            debt: d1.debt
        })

        const fdata = await res1.save();
        res.status(201).json(fdata);
        console.log("Successful debit of the data");
    }
    catch (error) {
        console.log("There is some error in debiting the data", error);
    }
})

router.get('/getbookdata/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const data = await Book.find({ title });

        if (!data)
            res.status(201).send(null);
        else
            res.status(201).json(data);
    }
    catch (error) {
        res.status(401).json({ error: "Error is finding the data" });
    }
})

router.get('/getmemberrdata/:fname', async (req, res) => {
    try {
        const { fname } = req.params;
        const data = await Member.find({ fname });

        if (!data)
            res.status(201).send(null);
        else
            res.status(201).json(data);
    }
    catch (error) {
        res.status(401).json({ error: "Error is finding the data" });
    }
})

router.get('/getbookmemberdata/:title', async (req, res) => {
    try {
        const { title } = req.params;

        const t = await Book.find({ title });
        const d = t[0].id;

        const bm = await Bookissue.find({ book: d });
        let memberdata = [];
        for (let i = 0; i < bm.length; i++) {
            const memberid = bm[i].member;
            const memberdataa = await Member.find({ _id: memberid });
            if (memberdataa && memberdataa.length > 0) {
                const member = memberdataa[0]; // Get the first (and only) item from the array
                memberdata.push({
                    _id: member._id,
                    fname: member.fname,
                    lname: member.lname,
                    email: member.email,
                    phone: member.phone,
                    debt: member.debt
                });
            }
        }

        console.log(memberdata);
        res.status(201).json(memberdata);
    }
    catch (error) {
        res.status(401).json({ error: "Error in fetching the member who bought this book" });
    }
})

router.get('/getmemberbookdata/:fname', async (req, res) => {
    try {
        const { fname } = req.params;

        const t = await Member.find({ fname });
        const d = t[0].id;

        const bm = await Bookissue.find({ member: d });
        let bookdata = [];
        for (let i = 0; i < bm.length; i++) {
            const bookid = bm[i].book;
            const bookdataa = await Book.find({ _id: bookid });
            console.log(bookdataa);
            if (bookdataa && bookdataa.length > 0) {
                const book = bookdataa[0]; // Get the first (and only) item from the array
                bookdata.push({
                    _id: book._id,
                    title: book.title,
                    subtitle: book.subtitle,
                    author: book.author,
                    ISBN: book.ISBN,
                    publisher: book.publisher,
                    page: book.page,
                    quantity: book.quantity,
                    description: book.description,
                    price: book.price,
                });
            }
        }

        console.log(bookdata);
        res.status(201).json(bookdata);
    }
    catch (error) {
        res.status(401).json({ error: "Error in fetching the book who bought by member" });
    }
})

router.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(201).json(books);
    }
    catch (error) {
        res.status(401).json({ error: "We cannot find the book data" });
    }
})

router.get("/members", async (req, res) => {
    try {
        const members = await Member.find({});
        res.status(201).json(members);
    }
    catch (error) {
        res.status(401).json({ error: "We cannot find the member data" });
    }
})

router.get('/bookss', async (req, res) => {
    try {
        const books = await Bookissue.find({});
        let bookdata = [];

        for (let i = 0; i < books.length; i++) {
            const bookid = books[i].book;
            const bookdataa = await Book.find({ _id: bookid });
            console.log(bookdataa);
            if (bookdataa && bookdataa.length > 0) {
                const book = bookdataa[0]; // Get the first (and only) item from the array
                bookdata.push({
                    title: book.title,
                });
            }
        }

        console.log(bookdata);
        res.status(201).json(bookdata);
    }
    catch (error) {
        res.status(401).json({ error: "We cannot find the book data" });
    }
})

router.get("/memberss", async (req, res) => {
    try {
        const members = await Bookissue.find({});
        let memberdata = [];

        for (let i = 0; i < members.length; i++) {
            const memberid = members[i].member;
            const memberdataa = await Member.find({ _id: memberid });
            if (memberdataa && memberdataa.length > 0) {
                const member = memberdataa[0]; // Get the first (and only) item from the array
                memberdata.push({
                    fname: member.fname,
                });
            }
        }

        console.log(memberdata);
        res.status(201).json(memberdata);
    }
    catch (error) {
        res.status(401).json({ error: "We cannot find the member data" });
    }
})

router.post("/register", async (req, res) => {
    try {
        const { title, subtitle, author, ISBN, publisher, page, quantity, description, price } = req.body;

        if (!title || !subtitle || !author || !ISBN || !publisher || !page || !quantity || !description || !price) {
            res.status(400).json({ error: "Fill the data" });
        }

        const data = new Book({
            title, subtitle, author, ISBN, publisher, page, quantity, description, price
        });

        const fdata = await data.save();
        console.log(fdata);

        res.status(201).json(fdata);
    }
    catch (error) {
        res.status(400).json({ error: "Invalid Data Entered" });
    }
})

router.post("/register1", async (req, res) => {
    try {
        const { fname, lname, email, phone, debt } = req.body;

        if (!fname || !lname || !email || !phone || !debt) {
            res.status(400).json({ error: "Fill the data First" });
            console.log("You have not entered the data");
        }

        const data = new Member({
            fname, lname, email, phone, debt
        });

        const fdata = await data.save();
        console.log(fdata);
        res.status(201).json(fdata);
    }
    catch (error) {
        console.log("There is some error");
        res.status(400).json({ error: "Invalid Data Entered" });
    }
});

router.post("/issuebook", async (req, res) => {
    try {
        const { title, fname, ib } = req.body;

        const bid = await Book.findOne({ title });
        const mid = await Member.findOne({ fname });

        if (!bid) {
            console.log('Book not found');
            return res.status(401).send({
                error: "Book Not Found"
            });
        }

        if (!mid) {
            console.log("Member not found");
            return res.status(401).send({
                error: "Member not found"
            });
        }

        if (bid.quantity == 0) {
            return res.status(404).send({
                error: "Books is out of stock"
            });
        }

        if (mid.debt <= 500) {

            const bbid = bid._id;
            const mmid = mid._id;

            bid.quantity = bid.quantity - 1;
            mid.debt = mid.debt + 100;

            await bid.save();
            await mid.save();

            const data = new Bookissue({
                book: bbid,
                member: mmid,
                issuedate: ib
            });

            const fdata = await data.save();
            res.status(201).json(fdata);
        }
        else {
            console.log("Wrong Data  Entered");
            return res.status(401).send({
                error: "Action not allowed !!!, member debt exceed 500"
            });
        }

    }
    catch (error) {
        console.log("Wrong Data Entered");
        console.log(error);
        res.status(400).json({ error: "Wrong Data Entered" });
    }

});

router.post("/returnbook", async (req, res) => {
    try {
        const { title, fname, ib } = req.body;

        const bid = await Book.findOne({ title });
        const mid = await Member.findOne({ fname });

        if (!bid) {
            console.log('Book not found');
            return null;
        }

        if (!mid) {
            console.log("Member not found");
        }

        const bbid = bid._id;
        const mmid = mid._id;

        bid.quantity = bid.quantity + 1;
        await bid.save();

        const data = new Bookreturn({
            book: bbid,
            member: mmid,
            returndate: ib
        });

        const fdata = await data.save();

        const start = await Bookissue.find({ book: bid._id });
        const end = await Bookreturn.find({ book: bid._id });
        const start1 = await Bookissue.find({ member: mid._id });
        const end1 = await Bookreturn.find({ member: mid._id });

        if (start && start1 && end && end1) {
            const d1 = start[0].issuedate;
            const d2 = end[0].returndate
            const difff = d2 - d1;
            const dif1 = difff / (1000 * 3600 * 24);
            mid.debt = mid.debt + dif1 * 20;
            await mid.save();
        }

        res.status(201).json(fdata);
    }
    catch (error) {
        console.log("Wrong Data Entered");
        res.status(400).json({ error: "Wrong Data Entered" });
    }
})

module.exports = router;