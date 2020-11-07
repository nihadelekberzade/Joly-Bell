import { images } from "../img/images";
import React from "react";
import NavMenu from "./NavMenu";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__nav-menu">
          <NavMenu />
        </div>

        <img className="footer-logo" alt="footer logo" src={images.logo}></img>
        <div className="footer__email-container">
          <div className="prefix email-prefix">e-mail:</div>
          <span className="email">jolybellstore@gmail.com</span>
        </div>
        <div className="footer__support-time-container">
          <div className="prefix support-time-prefix">
            ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:
          </div>
          <span className="support-period">ПН-ПТ: 9:00 - 21:00</span>
        </div>

        <div className="footer__payment-methods">
          <div className="prefix payment-prefix">ПРИНИМАЕМ К ОПЛАТЕ:</div>
          <ul className="payment-list">
            <li>
              <img
                className="payment-item-visa"
                src={images.visa}
                alt="payment"
              />
            </li>
            <li>
              <img
                className="payment-item-mastercard"
                src={images.master_card}
                alt="payment"
              />
            </li>
            <li>
              <img
                className="payment-item-privat"
                src={images.privat}
                alt="payment"
              />
            </li>
            <li>
              <img
                className="payment-item-liqpay"
                src={images.liqpay}
                alt="payment"
              />
            </li>
          </ul>
        </div>

        <div className="footer__copyright">© 2020, JolyBell.com</div>
        <div className="footer__delivery-text">
          Доставка по России осуществляется службами доставки: «Почта России».
          <br />
          «Почта России» осуществляет доставку до почтового отделения, индекс
          которого Вы укажите при оформлении заказа.
        </div>
      </div>
    </footer>
  );
}
