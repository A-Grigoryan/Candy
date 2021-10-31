import React from 'react'
import {NavLink } from 'react-router-dom'

export default function First4() {
    return (
        <div  className = "fotherfirstPArt">
            <NavLink to="/" className="fotherfirstLinks">Frequently asked questions</NavLink>
            <NavLink to="/" className="fotherfirstLinks">General terms and conditions</NavLink>
            <NavLink to="/" className="fotherfirstLinks">Delivery and return</NavLink>
            <NavLink to="/" className="fotherfirstLinks">Privacy policy</NavLink>
        </div>
    )
}
