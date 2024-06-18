import React, { useState, useEffect } from 'react'
import "./cleardebit.css"
import axios from 'axios';

const Cleardebit = () => {
    const [members, setMembers] = useState([]);
    const [fname, setFname] = useState('');

    const fetchMembers = (async () => {
        try {
            const res = await axios.get('http://localhost:8000/members');
            setMembers(res.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    });

    useEffect(() => {
        fetchMembers();
    }, [])

    const handledataa = ((e) => {
        setFname(e.target.value);
    })

    const senddata = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8000/cleardebit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname
            })
        });

        const data = await res.json();
        console.log(data);

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
                    <h1>Clear the Debit</h1>
                </div>
                <div className="outer3form">

                    <form id="d1" method="POST" >

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
                        <button onClick={senddata}>Clear Debit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cleardebit
