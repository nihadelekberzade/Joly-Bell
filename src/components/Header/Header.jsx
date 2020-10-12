import "./header.css";
import React, { useState } from "react";
import { images } from "../../img/images";
import NavMenu from "../NavMenu/NavMenu";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";

export default function Header() {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isLoginTabActive, setLoginTabActive] = useState(false);
  const [isCartActive, setCartActive] = useState(false);

  let toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
  let toggleLoginTab = () => {
    setLoginTabActive(!isLoginTabActive);
  };
  let toggleCart = () => {
    setCartActive(!isCartActive);
  };

  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={images.logo} alt="logo img" />

        <div className="header-second">
          <div className="header-second__nav-list">
            <NavMenu />
          </div>

          <div className="header-second__col-2">
            <div className="user-icon-container">
              <i className="far fa-user icon" onClick={toggleLoginTab} />
              <Login
                isLoginTabActive={isLoginTabActive}
                toggleLoginTab={toggleLoginTab}
              />
            </div>

            <div className="card-container">
              <i className="fas fa-shopping-cart icon" onClick={toggleCart} />
              <Cart isCartActive={isCartActive} toggleCart={toggleCart} />
            </div>

            <div className="header__nav-btn-container" onClick={toggleSidebar}>
              <div className="header__nav-btn" />
            </div>
          </div>
        </div>
        <Sidebar
          isSidebarActive={isSidebarActive}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </header>
  );
}
