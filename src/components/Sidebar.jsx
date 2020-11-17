import React from "react";

function Sidebar({ isSidebarActive, toggleSidebar }) {
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
    <nav className={`sidebar ${isSidebarActive ? `sidebar--active` : ``}`}>
      <div className="wrapper" onClick={toggleSidebar} />
      <div className="sidebar__content">
        <span className="sidebar__cancel-btn" onClick={toggleSidebar}>
          <i className="fas fa-slash" />
          <i className="fas fa-slash" />
        </span>
        <ul className="sidebar__list">
          {categories.map((item, index) => {
            return (
              <li
                className="sidebar__list-item"
                key={index}
                onClick={toggleSidebar}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Sidebar;
