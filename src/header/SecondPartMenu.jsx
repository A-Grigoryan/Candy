import React, { useState } from "react";
import {NavLink } from 'react-router-dom'

export default function SecondPartMenu() {
  const products = <div>
    products
    <i class="productDown fas fa-angle-down"></i>
  </div>;
  const [photo, setphoto] = useState(
    "https://web.grandcandy.am/static/media/logo.8bb796d0.svg"
  );
  const [menu, setmenu] = useState([
    "home",
    products,
    "about us",
    "stores",
    "how it's made",
    "contact us",
  ]);
  return (
    <div className="second">
      <NavLink to="/">
        <img src={photo} alt="" className="photoImg" />
      </NavLink>
      <div className="AllMenu">
        <div className="MenuFlex">
          {menu.map((el, ind) => (
            <div key={ind}>
              <div className="Menusechtion">
                <NavLink to="/" className="MEnuA">
                  {el}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
