import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, price, countInStock, _id }) => {
  const navigate = useNavigate();

  const verDetalle = (_id) => {
    navigate(`/details/${_id}`);
  };

  return (
    <div className="product-card" onClick={() => verDetalle(_id)}>
      <div className="product-card-image">
        <img
          className="product-image"
          src={`http://localhost:5000/${img}`}
          width={380}
          alt={name}
        />
      </div>
      <div className="product-card-name">
        <h3>{name}</h3>
      </div>
      <div className="productcard-containerprice">
        <div>
          <span>Precio:</span> ${price}
        </div>
        <div>
          <span>stock:</span> {countInStock}
        </div>
      </div>
      {countInStock ? (
        <div className="container-product-card-button">
          <div
            className="product-card-button"
            onClick={() => console.log("hola")}
          >
            Add item to cart
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
