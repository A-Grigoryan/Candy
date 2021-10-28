import React from 'react'

export default function HeadMidle() {
    return (
        <div className="HeadMidle">
            <div className = "PrNameCategoty">
                <a href="./">
                    <span className = "productSpan">Products</span>
                </a>
                <span className = "drobSpan">/</span>
                <a href="./">
                    <span className = "thisprodCateg">Chocolates</span>
                </a>
            </div>
            <div className = "sortBy">
                <div>
                    <div className = "SortPartFlex">
                        <span className = "sortSpan">Sort By</span>
                        <i class="fas fa-angle-down sortIcon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
