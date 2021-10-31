import React from 'react'
import Producs from './text.json'
import Product from './Product'
import Pages from './Pages'

export default function ProductList() {
    return (
        <div className="Maingrid">
            <div className="AllproductList">
            {Producs.map((el,ind)=><Product class={ind} url={el.src} title={el.title} description={el.description} price={el.value} />)}
            </div>
            <Pages/>
        </div>
    )
}
