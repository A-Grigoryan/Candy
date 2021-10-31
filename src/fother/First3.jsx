import React from 'react'
import {NavLink } from 'react-router-dom'

export default function First3() {
    return (
        <div className = "fotherfirstPArt">
            <NavLink to="/" className="fotherfirstLinks">Stores</NavLink>
            <NavLink to="/" className="fotherfirstLinks">Contact us</NavLink>
        </div>
    )
}
