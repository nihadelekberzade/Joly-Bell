import React from "react";
import hoodie from "../img/clothes/hoodie-black.png";
function Product({ name, price, imageUrl }) {
  return (
    <div className="product">
      <header className="product__header">
        <div className="product__price-tag">{price} RUB</div>
        <img className="product__img" src={hoodie} alt="product img" />
        <div className="product__details-btn">details</div>
      </header>
      <div className="product__name">{name}</div>
    </div>
  );
}
export default Product;
