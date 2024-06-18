import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Deltee = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const deldataa = (async () => {
    try {
      const d1 = await axios.delete(`http://localhost:8000/deldata/${title}`);
      console.log("Succesful deletion of the data");
      navigate(-1);
    }
    catch (error) {
      console.log('Error in deleting the data', error);
    }
  });

  useEffect(() => {
    deldataa();
  }, [])
  
  return (
    <>
      <h1>Deletion Succesfully</h1>
    </>
  )
}

export default Deltee
