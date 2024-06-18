import React from 'react'
import { NavLink } from "react-router-dom"
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="outer1circle">
                
                <NavLink to="/browsebook" className="f1" activeClassName="active-link">
                    Browse Books
                </NavLink>
                <NavLink to="/exploremember" className="f1" activeClassName="active-link">
                    Explore Member
                </NavLink>
                <NavLink to="/issuebook" className="f1" activeClassName="active-link">
                    Issue Book
                </NavLink>
                <NavLink to="/returnbook" className="f1" activeClassName="active-link">
                    Return Book
                </NavLink>
                <NavLink to="/cleardebit" className="f1" activeClassName="active-link">
                    Clear Debt
                </NavLink>

            </div>
        </>
    )
}

export default Footer
