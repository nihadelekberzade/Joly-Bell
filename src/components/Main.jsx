import React from "react";
import Product from "./Product";

function Main() {
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
    <main className="category">
      <div className="category__container">
        <h2 className="category__title">Title</h2>
        <ul className="category__list">
          {shirts.map((item, index) => {
            return (
              <li className="category__item" key={index}>
                <Product name={item.name} price={item.price} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
export default Main;
