import React, { useState, useEffect } from 'react'
import "./seebook.css"
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Seebook = () => {

    const [books, setBooks] = useState([]);

    const fetchdata = (async () => {
        try {
            const res = await axios.get('http://localhost:8000/books', {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 5000,
            });
            setBooks(res.data);
        }
        catch (error) {
            console.log('Error in fetching the data', error);
        }
    })

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <>
            <div className="table-container">
                <div className="table-header">
                    <h1>Book Table</h1>
                </div>
                <table className="book-table" border="1">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>See</th>
                            <th>Members</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <NavLink to={`/seetbook/${book.title}`}>See</NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/seetmember/${book.title}`} >Members</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Seebook
