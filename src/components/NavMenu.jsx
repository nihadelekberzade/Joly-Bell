import React, { useState } from "react";

function NavMenu() {
  const categories = [
    "Футболки",
    "Свитшоты",
    "Худи",
    "Рубашки",
    "Кепки",
    "Шапки",
    "Поло",
    "Рюкзаки",
    "Сувениры",
    "Memes",
    "FAQ",
    "Статус заказа",
  ];
  const [currentCategory, setCategory] = useState(null);

  let clickHandler = (category) => {
    if (category !== currentCategory) {
      setCategory(category);
    }
  };

  return (
    <ul className="nav-list">
      {categories.map((item) => {
        return (
          <li
            className={`nav-list__item ${
              item === currentCategory ? `nav-list__item--active` : ``
            }`}
            onClick={() => clickHandler(item)}
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
export default NavMenu;
