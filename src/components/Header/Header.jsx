import "./header.css";
import React, { useState } from "react";
import { images } from "../../img/images";
import NavMenu from "../NavMenu/NavMenu";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  const [isSidebarActive, setSidebarActive] = useState(false);

  let toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={images.logo} alt="logo img"></img>

        <div className="header__second">
          <div className="header__second__nav-list">
            <NavMenu />
          </div>

          <div className="header__second__col-2">
            <i className="far fa-user header__user-icon" />
            <i className="fas fa-shopping-cart header-cart-icon" />
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
