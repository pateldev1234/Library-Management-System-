import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./returnbook.css"

const Returnbook = () => {
    const [books, setBooks] = useState([]);
    const [members, setMembers] = useState([]);
    const [title, setTitle] = useState('');
    const [fname, setFname] = useState('');
    const [ib, setIb] = useState('');

    const fetchBooks = (async () => {
        try {
            const res = await axios.get('http://localhost:8000/bookss');
            setBooks(res.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    });

    const fetchMembers = (async () => {
        try {
            const res = await axios.get('http://localhost:8000/memberss');
            setMembers(res.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    });

    useEffect(() => {
        fetchMembers();
    }, [])

    console.log(members);

    useEffect(() => {
        fetchBooks();
    }, [])

    const handledata = ((e) => {
        setTitle(e.target.value);
    })

    const handledataa = ((e) => {
        setFname(e.target.value);
    })

    const handledataaa = ((e) => {
        setIb(e.target.value);
    })

    const senddata = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8000/returnbook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                fname,
                ib
            })
        });
        const data = await res.json();
        
        if (res.status === 422 || !data) {
            alert("No data");
        }
        else {
            alert("Successful added the data");
            //  once data entered to database remove all from the individual box
        }

    }
    return (
        <>
            <div className="outer4form">
                <div className='g1'>
                    <h1>Return the Book</h1>
                </div>
                <div className="outer3form">

                    <form id="d1" method="POST" >
                        <label for="book">
                            Book
                        </label>
                        <select id='book' name='book' value={title} onChange={handledata}>
                            <option value="">select some value</option>
                            {
                                books.map((book) =>
                                (
                                    <option key={book._id} value={book.title}>{book.title}</option>
                                ))
                            }
                        </select>

                        <label for="member">
                            Member
                        </label>
                        <select id='member' name='member' value={fname} onChange={handledataa}>
                            <option value="">select some value</option>
                            {
                                members.map((member) => (
                                    <option key={member._id} value={member.fname}>{member.fname}</option>
                                ))
                            }
                        </select>

                        <label for="issuedate">
                            Issue Date
                        </label>

                        <input type='date' id='issuedate' name='issuedate' value={ib} onChange={handledataaa} />
                        <button onClick={senddata}>Return Book</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Returnbook
