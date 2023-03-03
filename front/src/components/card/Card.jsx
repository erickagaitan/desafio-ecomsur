import React from "react";
import "./card.css";

const Card = ({ img, name, price, countInStock }) => {
  return (
    <div className="product-card" onClick={() => console.log("hola image")}>
      <div className="product-card-image">
        <img
          className="product-image"
          src={`http://localhost:5000/${img}`}
          width={380}
          alt={name}
        />
      </div>
      <div className="product-card-name"><h3>{name}</h3></div>
      <div className="productcard-containerprice">
        <div><span>Precio:</span> ${price}</div>
        <div><span>stock:</span> {countInStock}</div>
      </div>
      {countInStock ? 
        <div className="container-product-card-button">
        <div
          className="product-card-button"
          onClick={() => console.log("hola")}
        >
          Add item to cart
        </div>
      </div>
    : null}

    </div>
  );
};

export default Card;
