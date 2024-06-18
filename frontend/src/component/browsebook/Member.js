import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./member.css"

const Member = () => {

    const [members, setMembers] = useState([]);
    const { title } = useParams();

    const fecthdatta = (async () => {
        try {
            const res = await axios.get(`http://localhost:8000/getbookmemberdata/${title}`);
            setMembers(res.data);
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
                    <h1>Member data</h1>
                </div>
                <table className="book-table" border="1">
                    <thead>
                        <tr>
                            <th>S.no.</th>
                            <th>Fname</th>
                            <th>Lname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Debt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>{book.fname}</td>
                                <td>{book.lname}</td>
                                <td>{book.email}</td>
                                <td>{book.phone}</td>
                                <td>{book.debt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Member



