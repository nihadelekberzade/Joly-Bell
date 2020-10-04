import './header.css'
import React from 'react'
import { images } from '../../img/images'
import NavMenu from '../NavMenu/NavMenu'

export default function Header() {
    return (
        <header className='header'>
            <img
                className='header__logo'
                src={images.logo}
                alt='logo img'>
            </img>
            <NavMenu />
            <div className='header__col-2'>
                <i className="far fa-user header__user-icon" />
                <i className="fas fa-shopping-cart header-cart-icon" />
                <div className='header__nav-btn-container'>
                    <div className='header__nav-btn' />
                </div>
                
            </div>
        </header>
    )
}
