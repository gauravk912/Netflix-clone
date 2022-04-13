import React from "react";
import "./Product.css";

function product({ title, image, price, rating }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <button>Add to Cart</button>
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default product;
