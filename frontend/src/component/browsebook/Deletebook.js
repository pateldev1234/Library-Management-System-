import React, { useEffect, useState } from 'react'
import "./deletebook.css"
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Deletebook = () => {

    const [books, setBooks] = useState([]);
    const fetchdata = (async () => {
        try {
            const res = await axios.get("http://localhost:8000/books");
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink to={`/deletedata/${book.title}`} >Delete</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Deletebook
