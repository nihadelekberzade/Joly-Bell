import './product.css'
import React from 'react'

export default function Product({ name, price, imageUrl }) {
    return (
        <div className='product'>
            <h2 className='product__price-tag'>
                {price} RUB
            </h2>
            <header className='product__header'>
                <img className='product__img'
                    src={require('../../img/clothes/hoodie-black.png')}
                    alt='product img'
                />
                <div className='product__details-btn'>
                    details
                </div>
            </header>
            <div className='product__name'>
                {name}
            </div>
        </div>
    )
}
