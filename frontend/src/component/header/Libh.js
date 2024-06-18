import React, { useState } from 'react'
import "./libh.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Libh = () => {
  const [title, setTitle] = useState('');
  const [fname, setFname] = useState('');
  const navigate = useNavigate();

  const find = ((e) => {
    setTitle(e.target.value);
  })

  const findd = ((e) => {
    setFname(e.target.value);
  })

  const handleSearchClick = async (title) => {
    try {
      // Make the API call to check if the title exists
      const response = await axios.get(`http://localhost:8000/getbookdata/${title}`);

      if (response.data.length != 0) {
        navigate(`/seetbook/${title}`);
      } else {
        navigate('/nodata');
      }
    } 
    catch (error) {
      console.error('There was an error checking the title:', error);
      // Optionally navigate to an error page or display an error message
    }
  };

const handSearchClick = async () => {
    try {
      // Make the API call to check if the title exists
      const response = await axios.get(`http://localhost:8000/getmemberrdata/${fname}`);
      console.log(response);
      console.log(response.data.length);
      if (response.data.length != 0) {
        navigate(`/seettmember/${fname}`);
      } else {
        navigate('/nodata');
      }
    } catch (error) {
      console.error('There was an error checking the title:', error);
      // Optionally navigate to an error page or display an error message
    }

};

return (
    <>
      <div className="outercircle">
        <h1>Library Management System</h1>

        <div className='f1'>
          <input type='text' id='book' placeholder='Seach for Book' name='title' onChange={find} required></input>
          <button className="b1" onClick={() => {handleSearchClick(title)}}>Search</button>
        </div>

        <div className='f2'>
          <input type='text' id='member' placeholder='Seach for Member' name='fname' onChange={findd} required></input>
          <button className='b2' onClick={handSearchClick}>Search</button>
        </div>

      </div>
    </>
  )
}

export default Libh
