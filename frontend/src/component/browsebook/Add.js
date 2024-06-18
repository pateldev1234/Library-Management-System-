import React, { useState } from 'react'
import "./add.css"

const Add = () => {
const [udata, setUdata] = useState({
    "title": "",
    "subtitle": "",
    "author": "",
    "ISBN": "",
    "publisher": "",
    "page": "",
    "quantity": "",
    "description": "",
    "price": ""
  })

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  }

  const senddata = async (e) => {
    e.preventDefault();
    const { title, subtitle, author, ISBN, publisher, page, quantity, description, price } = udata;

    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, subtitle, author, ISBN, publisher, page, quantity, description, price
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
          <h1>Add the Data</h1>
        </div>
        <div className="outer3form">

          <form id="d1" method="POST" >
            <label for="title">Title</label>
            <input type='text' id='title' name='title' onChange={adddata} value={udata.title} required />

            <label for="subtitle">SubTitle</label>
            <input type='text' id='subtitle' name='subtitle' onChange={adddata} value={udata.subtitle} required />

            <label for="author">Author</label>
            <input type='text' id='author' name='author' onChange={adddata} value={udata.author} required />

            <label for="ISBN">ISBN</label>
            <input type='number' id='ISBN' name='ISBN' onChange={adddata} value={udata.ISBN} required />

            <label for="publisher">Publisher</label>
            <input type='text' id='publisher' name='publisher' onChange={adddata} value={udata.publisher} required />

            <label for="page">Page</label>
            <input type='number' id='page' name='page' onChange={adddata} value={udata.page} required />

            <label for="quantity">Quantity</label>
            <input type='number' id='quantity' name='quantity' onChange={adddata} value={udata.quantity} required />

            <label for="description">Decription</label>
            <input type='text' id='description' name='description' onChange={adddata} value={udata.description} required />

            <label for="price">Price</label>
            <input type='number' id='price' name='price' onChange={adddata} value={udata.price} required />

            <button onClick={senddata}>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add
