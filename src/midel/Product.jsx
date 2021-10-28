import React from 'react'

export default function Product(props) {
    {console.log(props.url)}
    return (
        <div key={props.class} className = {`part-${props.class} parts`}>
            <div className = {`img-${props.class} img`}></div>
            <div className="text">
                <div className="productTitel">{props.title}</div>
                <span className = "productDirection">{props.description}</span>
                
            </div>
            <div className = "productPrice">
                <div className = "onlyPrice">
                    <div>
                        <span className = "PriceValue">{props.price}</span>
                        <span>/ kg</span>
                    </div>
                </div>
                <div className = "onlySoppingCart">
                    <button className = "miniShopcart">
                        <span>
                        <i class="fas fa-shopping-cart onlyminiCart"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
