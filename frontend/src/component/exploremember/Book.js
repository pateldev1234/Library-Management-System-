import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./book.css"

const Book = () => {
    const [bookk, setBookk] = useState([]);
    const { fname } = useParams();

    const fecthdatta = (async () => {
        try {
            const res = await axios.get(`http://localhost:8000/getmemberbookdata/${fname}`);
            setBookk(res.data);
        }
        catch (error) {
            console.log("We the Error in fetching the data from the backend");
        }
    })

    useEffect(() => {
        fecthdatta();
    }, [])

    return (
        <>
            <div className="table-container">
                <div className="table-header">
                    <h1>Book data</h1>
                </div>
                <table className="member-table" border="1">
                    <thead>
                        <tr>
                            <th>S.no.</th>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th>Publisher</th>
                            <th>Page</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Page</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookk.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.subtitle}</td>
                                <td>{book.author}</td>
                                <td>{book.ISBN}</td>
                                <td>{book.publisher}</td>
                                <td>{book.page}</td>
                                <td>{book.quantity}</td>
                                <td>{book.description}</td>
                                <td>{book.page}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Book







