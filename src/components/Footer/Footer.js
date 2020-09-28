import './footer.css'
import {images} from '../../img/images'
import React from 'react'

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__content'>


                <ul className='footer__menu'>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                    <li>T-shirts</li>
                </ul>

                <img
                    alt='footer logo'
                    src={require('../../img/JolyBell_logo.jpg')}
                    className='footer-logo' />
                <div className='email-container'>
                    <div className='prefix email-prefix'>e-mail:</div>
                    <span className='email'>jolybellstore@gmail.com</span>
                </div>
                <div className='support-time-container'>
                    <div className='prefix support-time-prefix'>ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:</div>
                    <span className='support-period'>ПН-ПТ: 9:00 - 21:00</span>
                </div>

                <div className='footer__payment-methods'>
                    <div className='prefix payment-prefix'>ПРИНИМАЕМ К ОПЛАТЕ:</div>
                    <ul className='payment-list'>
                        <li>
                            <img 
                            className='payment-item-visa'
                            src={images.visa}
                            alt='payment'/>
                        </li>
                        <li>
                            <img 
                            className='payment-item-mastercard'
                            src={images.master_card}
                            alt='payment'/>
                        </li>
                        <li>
                            <img 
                            className='payment-item-privat'
                            src={images.privat}
                            alt='payment'/>
                        </li>
                        <li>
                            <img 
                            className='payment-item-liqpay'
                            src={images.liqpay}
                            alt='payment'/>
                        </li>
                    </ul>
                </div>

                <div className='footer__copyright'>
                    © 2020, JolyBell.com
                </div>
            </div>

        </footer>
    )
}
