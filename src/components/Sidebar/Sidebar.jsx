import "./sidebar.css";
import React from "react";

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

  return (
    <div className="sidebar">
      <div className="wrapper" />
      <div className="sidebar__cancel-btn">
        <i className="fas fa-slash" />
        <i className="fas fa-slash" />
      </div>
      <ul className="sidebar__list">
        {categories.map((item) => {
          return (
            <li className="sidebar__list-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
