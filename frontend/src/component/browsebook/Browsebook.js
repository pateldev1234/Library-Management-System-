import React from 'react'
import "./browsebook.css"
import Add from './Add'
import { NavLink } from 'react-router-dom'

const Browsebook = () => {
  return (
    <>
      <div className="navlink-container">
        <NavLink to="/addthedata">
          <div className="h1">Add The Data</div>
        </NavLink>

        <NavLink to="/seethedata">
          <div className="h1">Books You have</div>
        </NavLink>

        <NavLink to="/deletethedata">
          <div className="h1">Delete the Book</div>
        </NavLink>
      </div>
    </>
  )
}

export default Browsebook;



