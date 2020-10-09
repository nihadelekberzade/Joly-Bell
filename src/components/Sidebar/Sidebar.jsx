import "./sidebar.css";
import React from "react";
import { useState } from "react";

export default function Sidebar() {
  const categories = [
    "shirts",
    "sweetshots",
    "hoodies",
    "rubashkas",
    "caps",
    "shapkas",
    "polo",
    "bags",
    "accessories",
    "memes",
    "FAQ",
  ];

  const [isActive, setActive] = useState(true);

  let toggleSidebar = () => {
    setActive(!isActive);
  };

  return isActive ? (
    <nav className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="wrapper" onClick={toggleSidebar} />
      <div className="sidebar__cancel-btn">
        <i className="fas fa-slash" />
        <i className="fas fa-slash" />
      </div>
      <ul className="sidebar__list">
        {categories.map((item, index) => {
          return (
            <li className="sidebar__list-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
}
