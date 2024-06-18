import React, { useState } from 'react'
import "./add1.css"
import axios from "axios";

const Add1 = () => {

  const [udata, setUData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    debt: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;

    setUData(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  }

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phone, debt } = udata;

    const res = await fetch("http://localhost:8000/register1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, lname, email, phone, debt
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
          <h1>Add the Member</h1>
        </div>
        <div className="outer3form">

          <form id="d1" method="POST" >
            <label for="fname">Fname</label>
            <input type='text' id='fname' name='fname' onChange={adddata} value={udata.fname} required />

            <label for="lname">Lname</label>
            <input type='text' id='lname' name='lname' onChange={adddata} value={udata.lname} required />

            <label for="email">Email</label>
            <input type='email' id='email' name='email' onChange={adddata} value={udata.email} required />

            <label for="phone">Phone</label>
            <input type='text' id='phone' name='phone' onChange={adddata} value={udata.phone} required />

            <label for="debt">Debt</label>
            <input type='number' id='debt' name='debt' onChange={adddata} value={udata.debt} required />

            <button onClick={senddata} >Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add1
