/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./login.css";
import React from "react";

export default function Login({ isLoginTabActive, toggleLoginTab }) {
  return (
    <div className={`login ${isLoginTabActive ? `active` : ``}`}>
      <div className="blackout" />
      <span className="login__cancel-btn" onClick={toggleLoginTab}>
        <i className="fas fa-slash" />
        <i className="fas fa-slash" />
      </span>

      <form className="form">
        <div className="field form__email-field">
          <div className="form__email-text">Эл.Почта</div>
          <input className="form__email" type="email" />
        </div>
        <div className="field form__password-field">
          <div className="form__password-text">Пароль</div>
          <input className="form__password" />
        </div>

        <span className="form__remember">Запомнить</span>
        <span className="form__forgot-password">Забыли пароль?</span>

        <span className="form__login-btn">login</span>
      </form>

      <div className="login-second">
        Login from
        <span className="login-secon__or">or</span>
        <a className="login-second__registration" href="#">
          fast registration
        </a>
      </div>
    </div>
  );
}
