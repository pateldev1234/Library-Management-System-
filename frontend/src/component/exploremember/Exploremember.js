import React from 'react'
import { NavLink } from 'react-router-dom'
import "./exploremember.css"

const Exploremember = () => {
  return (
    <>
      <div className="navlink-container">
        <NavLink to="/addthemember">
          <div className="h1">Add The Member</div>
        </NavLink>

        <NavLink to="/seethemember">
          <div className="h1">Members You have</div>
        </NavLink>

        <NavLink to="/deletethemember">
          <div className="h1">Delete the Member</div>
        </NavLink>
      </div>
    </>
  )
}

export default Exploremember
