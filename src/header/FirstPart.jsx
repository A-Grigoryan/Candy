import React,{useState} from 'react'
import {NavLink } from 'react-router-dom'

export default function FirstPart() {
    const [develop, setdevelop] = useState(["Frequently asked questions" , "General terms and conditions" , "Delivery and return" , "Privacy policy"])
    return (
        <div className="First">
            <div className="HeaderLinks">
            {develop.map((el,ind)=>
            <NavLink to="/" className="firstA" key={ind}><span>{el}</span></NavLink>)}
            <div className="lang">
                <div>
                <div className="languages">
                    <div className="langFlag-flex">
                        <img className="lang-flag" src="https://web.grandcandy.am/static/media/ic_english.5dd4b8d6.svg" alt="" />
                        <span>English
                        <i class="fas fa-angle-down icon"></i>
                        </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
