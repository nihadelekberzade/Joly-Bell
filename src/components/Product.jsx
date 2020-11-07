import React from "react";

export default function Product({ name, price, imageUrl }) {
  return (
    <div className="product">
      <header className="product__header">
        <div className="product__price-tag">{price} RUB</div>
        <img
          className="product__img"
          src={require("../img/clothes/hoodie-black.png")}
          alt="product img"
        />
        <div className="product__details-btn">details</div>
      </header>
      <div className="product__name">{name}</div>
    </div>
  );
}
