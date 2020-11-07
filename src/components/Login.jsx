/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { images } from "../img/images";

export default function Login({ isLoginTabActive, toggleLoginTab }) {
  return (
    <div className={`login ${isLoginTabActive ? `login--active` : ``}`}>
      <div className="login__content">
        <div className="wrapper" onClick={toggleLoginTab} />

        <div className="login__arrow"></div>
        <span className="login__cancel-btn" onClick={toggleLoginTab}>
          <img src={images.cancel} alt="cancel" />
        </span>

        <form className="form">
          <div className="field form__email-field">
            <div className="form__email-text">Эл.Почта</div>
            <input
              className="form__email"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="field form__password-field">
            <div className="form__password-text">Пароль</div>
            <input className="form__password" type="password" />
          </div>
          <div className="form__remember-content">
            <input
              className="form__remember-checkbox"
              type="checkbox"
              name="remember"
              id="checkbox"
            />
            <label className="form__remember-text" htmlFor="checkbox">
              Запомнить
            </label>
            <span className="form__forgot-password-text">Забыли пароль?</span>
          </div>
          <span className="form__login-btn">login</span>
        </form>
        <div className="login-second">
          Login from
          <div className="login-second__social-links">
            <i className="fab fa-google"></i>
            <i className="fab fa-vk"></i>
          </div>
          <span className="login-second__or-text">or</span>
          <div className="login-second__registration-link">
            fast registration
          </div>
        </div>
      </div>
    </div>
  );
}
