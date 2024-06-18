import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./seethemember.css"

const SeeTheMember = () => {
    const { fname } = useParams();
    const [memberData, setMemberData] = useState(null);

    const fetcchdata = (async () => {
        try {
            const res = await axios.get(`http://localhost:8000/getmemberrdata/${fname}`);
            setMemberData(res.data);
        }
        catch (error) {
            console.log("there is some error in fetching the single data we have");
        }
    })

    useEffect(() => {
        fetcchdata();
    }, [fname])

    useEffect(() => {
        console.log(memberData);
    }, [memberData]);

return (
        <>
            <div className="member-details-container">
                {memberData ? (
                    <div className="member-details">
                        <h1 className='title'>Details of the Member {memberData[0].fname}</h1>
                        <div className="member-info">
                            <p ><strong>Fname:</strong>{memberData[0].fname}</p>
                            <p><strong>Lname:</strong> {memberData[0].lname}</p>
                            <p><strong>Gmail:</strong> {memberData[0].email}</p>
                            <p><strong>Phone:</strong> {memberData[0].phone}</p>
                            <p><strong>Debt:</strong> {memberData[0].debt}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default SeeTheMember;

