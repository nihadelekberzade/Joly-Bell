import './product.css'
import React from 'react'

export default function Product({ name, price, imageUrl }) {
    return (
        <div className='product'>
            <span className='product__price-tag'>
                {price} RUB
            </span>
            <div className='product__header'>
                <div className='product__blackout'>

                </div>
                <img className='product__img'
                    src={require('../../img/clothes/hoodie-black.png')}
                    alt='product img'
                />
                <span className='product__details-btn'>
                    details
            </span>
            </div>



            <div className='product__name'>
                {name}
            </div>
        </div>
    )
}
