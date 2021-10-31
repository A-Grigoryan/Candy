import React from 'react'
import {NavLink } from 'react-router-dom'

export default function HeadMidle() {
    return (
        <div className="HeadMidle">
            <div className="PrNameCategoty">
                <NavLink to="/">
                    <span className="productSpan">Products</span>
                </NavLink>
                <span className="drobSpan">/</span>
                <NavLink to="/">
                    <span className="thisprodCateg">Chocolates</span>
                </NavLink>
            </div>
            <div className="sortBy">
                <div>
                    <div className="SortPartFlex">
                        <span className="sortSpan">Sort By</span>
                        <i class="fas fa-angle-down sortIcon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
