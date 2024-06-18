import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Delteee = () => {

  const { fname } = useParams();
  const dellldataa = (async () => {
    try {
      const d1 = await axios.delete(`http://localhost:8000/delldata/${fname}`);
      console.log("Succesful deletion of the data");

    }
    catch (error) {
      console.log('Error in deleting the data', error);
    }

  });

  useEffect(() => {
    dellldataa();
  }, [])
  
  return (
    <div>
      <h1>Deletion Successful</h1>
    </div>
  )
}

export default Delteee;





