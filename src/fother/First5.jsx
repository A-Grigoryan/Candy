import React from 'react'
import {NavLink } from 'react-router-dom'

export default function First5() {
    return (
        <div  className = "fotherfirstPArt">
            <div>Find us in social</div>
            <div className = "Fothersocialimg">
                <NavLink to="/">
                    <img src="https://web.grandcandy.am/static/media/facebook.71e6bf26.svg" alt="" />
                </NavLink>
                <NavLink to="/">
                    <img className="fother5imgsocial" src="https://web.grandcandy.am/static/media/instagram.0d36faff.svg" alt="" />
                </NavLink>
                <NavLink to="/">
                    <img className="foutherpart5-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQA…AIOgAgKADAIIOAKn7uwADAD+k+VIj5UacAAAAAElFTkSuQmCC" alt="" />
                </NavLink>
            </div>
        </div>
    )
}
