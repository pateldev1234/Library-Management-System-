import React, { useEffect, useState } from 'react'
import "./seemember.css"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Seemember = () => {
    const [mem, setMem] = useState([]);

    const fetchdata = (async () => {
        try {
            const res = await axios.get('http://localhost:8000/members');
            setMem(res.data);
        }
        catch (error) {
            console.log("Error in Fetching the Data", error);
        }
    });

    useEffect(() => {
        fetchdata();
    }, [])

return (
        <div className="table-container">
            <div className="table-header">
                <h1>Member Table</h1>
            </div>
            <table className="member-table" border="1">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Debt</th>
                        <th>Book</th>
                        <th>See</th>
                    </tr>
                </thead>
                <tbody>
                    {mem.map((m1, index) => (
                        <tr key={m1._id}>
                            <td>{index + 1}</td>
                            <td>{m1.fname}</td>
                            <td>{m1.lname}</td>
                            <td>{m1.email}</td>
                            <td>{m1.phone}</td>
                            <td>{m1.debt}</td>
                            <td>
                                <NavLink to={`/seettbook/${m1.fname}`} >Book</NavLink>
                            </td>
                            <td>
                                <NavLink to={`/seettmember/${m1.fname}`} >See</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Seemember;




