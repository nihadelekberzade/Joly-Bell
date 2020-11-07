import React from "react";
import Product from "./Product";

export default function Main() {
  const shirts = [
    {
      name: "Hoodie ZIP Black",
      price: 3900,
    },
    {
      name: "Hoodie ZIP Black",
      price: 3900,
    },
    {
      name: "Hoodie ZIP Black",
      price: 3900,
    },
    {
      name: "Hoodie ZIP Black",
      price: 3900,
    },
    {
      name: "Hoodie ZIP Black",
      price: 3900,
    },
    {
      name: "Hoodie ZIP Black",
      price: 3900,
    },
  ];
  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__category-title">Title</h2>
        <ul className="main__category-list">
          {shirts.map((item, index) => {
            return (
              <li className="main__category-list__item" key={index}>
                <Product name={item.name} price={item.price} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
