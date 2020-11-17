import { images } from "../img/images";
import React from "react";
import NavMenu from "./NavMenu";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__nav-menu">
          <NavMenu />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127"
          height="40"
          viewBox="0 0 127 40"
          icon="joly-bell"
          class="joly-bell"
        >
          <path d="M0 0v40h65V0H0zm13.42 26.98c0 1.41-.17 2.57-.52 3.47-.35.9-.81 1.62-1.4 2.13-.59.52-1.26.88-2.01 1.1-.76.21-1.55.32-2.38.32H6.03c-.31 0-.66-.03-1.03-.08v-3.99c.24.03.49.04.76.04h.76c.69 0 1.28-.17 1.77-.52s.74-1.06.74-2.15V6h4.39v20.98zm16.58.14c0 2.22-.56 3.92-1.67 5.1C27.21 33.41 25.6 34 23.5 34s-3.71-.59-4.83-1.78S17 29.33 17 27.12V12.88c0-2.22.56-3.92 1.67-5.1C19.79 6.59 21.4 6 23.5 6s3.71.59 4.83 1.78S30 10.67 30 12.88v14.24zM44.76 34H33V6h4.4v24h7.36v4zm7.94 0h-4.4v-9.28L42.74 6h4.6l3.36 12.76L54.06 6h4.2L52.7 24.72V34zm7.54 0H56v-4.24h4.24V34zM25.12 10.52c.4.4.6 1.1.6 2.09v14.78c0 .99-.2 1.69-.6 2.09-.4.4-.94.61-1.62.61-.67 0-1.21-.2-1.62-.61-.4-.4-.6-1.1-.6-2.09V12.61c0-.99.2-1.69.6-2.09.4-.4.94-.61 1.62-.61.67 0 1.21.2 1.62.61zM76.78 6c2.34 0 4.04.53 5.08 1.6 1.05 1.07 1.57 2.68 1.57 4.84v1c0 1.44-.23 2.63-.69 3.56-.46.93-1.2 1.63-2.21 2.08 1.23.45 2.09 1.19 2.59 2.22.5 1.03.76 2.29.76 3.78v2.28c0 2.16-.57 3.81-1.72 4.94-1.14 1.13-2.85 1.7-5.11 1.7H70V6h6.78zm-2.3 4v7.4h1.75c.84 0 1.5-.21 1.98-.64.47-.43.71-1.2.71-2.32v-1.56c0-1.01-.18-1.75-.55-2.2-.36-.45-.94-.68-1.73-.68h-2.16zm0 11.4V30h2.57c.76 0 1.34-.2 1.73-.6.39-.4.59-1.12.59-2.16V24.8c0-1.31-.22-2.2-.67-2.68-.45-.48-1.19-.72-2.22-.72h-2zm15.92-3.6h6.24v4H90.4V30h7.92v4H86V6h12.32v4H90.4v7.8zM115 6h4.4v24h7.6v4h-12V6zm-14 0h4.4v24h7.36v4H101V6zM70 38h57v2H70v-2zm0-38h50v2H70V0z"></path>
        </svg>
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
            <li className="payment-item payment-item--visa">
              <img src={images.visa} alt="payment" />
            </li>
            <li className="payment-item payment-item--mastercard">
              <img src={images.master_card} alt="payment" />
            </li>
            <li className="payment-item payment-item--privat">
              <img src={images.privat} alt="payment" />
            </li>
            <li className="payment-item payment-item--liqpay">
              <img src={images.liqpay} alt="payment" />
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
export default Footer;
