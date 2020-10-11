import "./header.css";
import React, { useState } from "react";
import { images } from "../../img/images";
import NavMenu from "../NavMenu/NavMenu";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";

export default function Header() {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isLoginTabActive, setLoginTabActive] = useState(false);

  let toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
  let toggleLoginTab = () => {
    console.log("login");
    setLoginTabActive(!isLoginTabActive);
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
            <i className="far fa-user icon" onClick={toggleLoginTab} />
            <i className="fas fa-shopping-cart icon" />
            <div className="header__nav-btn-container" onClick={toggleSidebar}>
              <div className="header__nav-btn" />
            </div>
          </div>
        </div>

        <Login
          isLoginTabActive={isLoginTabActive}
          toggleSidebar={toggleSidebar}
        />

        <Sidebar
          isSidebarActive={isSidebarActive}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </header>
  );
}
