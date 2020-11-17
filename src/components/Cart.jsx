import React from "react";
import { images } from "../img/images";

function Cart({ isCartActive, toggleCart }) {
  return (
    <div className={`cart ${isCartActive ? `cart--active` : ``}`}>
      <div className="wrapper" onClick={toggleCart}></div>
      <div className="cart__content">
        <div className="back-btn" onClick={toggleCart}>
          <img
            className="back-btn__icon"
            src={images.leftArrow}
            alt="left arrow"
          />
          <h3 className="back-btn__text">Resume shopping</h3>
        </div>

        <h2 class="cart__title">Мои покупки</h2>

        <div className="promo">
          <h3 className="promo__text">ПРОМОКОД</h3>
          <form className="promo__form">
            <input className="promo__input" type="text" />
            <button className="promo__apply-btn" type="button">
              apply
            </button>
          </form>
        </div>

        <div className="check">
          <div className="check__cost check-item">
            <span className="check__cost-title check-item__title">
              ОБЩАЯ СТОИМОСТЬ:
            </span>
            <span className="check__cost-value check-item__value">0 RUB</span>
          </div>

          <div className="check__delivery-cost check-item">
            <span className="check__delivery-cost-title check-item__title">
              СТОИМОСТЬ ДОСТАВКИ:
            </span>
            <span className="check__delivery-cost-value check-item__value">
              0 RUB
            </span>
          </div>

          <div className="check__total-cost check-item">
            <span className="check__total-cost-title check-item__title">
              ИТОГО:
            </span>
            <span className="check__total-cost-value check-item__value">
              0 RUB
            </span>
          </div>
        </div>

        <span className="cart__checkout-btn">Purchase</span>
      </div>
    </div>
  );
}
export default Cart;
