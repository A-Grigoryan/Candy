import React from 'react'
import {NavLink } from 'react-router-dom'

export default function First2() {
    return (
        <div  className = "fotherfirstPArt">
            <NavLink to="/" className="fotherfirstLinks">Home</NavLink>
            <NavLink to="/" className="fotherfirstLinks">Products</NavLink>
            <NavLink to="/" className="fotherfirstLinks">About us</NavLink>
        </div>
    )
}
