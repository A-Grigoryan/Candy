import React from 'react'
import { NavLink } from 'react-router-dom'

export default function First1() {
    return (
        <div className="fotherfirstPArt">
            <img className="fotherCandy" src="https://web.grandcandy.am/static/media/logo_md.1ee0df90.svg" alt="" />
            <div className="FotherristText">
                <p> The sweetest candy shop in</p>
                <p> Armenia</p>
            </div>
            <div className="FotherFirstIconsPart">
                <div className="icon1part">
                    <NavLink to="/">
                        <img src="https://web.grandcandy.am/static/media/ios.860223a0.svg" alt="" className="iconimg1"/>
                    </NavLink>
                </div>
                <div className="icon1part">
                    <NavLink to="/">
                        <img src="https://web.grandcandy.am/static/media/Google_Play.07a1f9cb.svg" alt="" className="iconimg2"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
