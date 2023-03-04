import React, { useContext } from "react";
import { ProductsContext } from "../../context/Context";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, price, countInStock, _id }) => {
  const item = { img, name, price, countInStock, _id };
  const { addToCart } = useContext(ProductsContext);

  const navigate = useNavigate();

  const verDetalle = (_id) => {
    navigate(`/details/${_id}`);
  };

  return (
    <div className="product-card">
      <div onClick={() => verDetalle(_id)}>
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
      </div>

      {countInStock ? (
        <div className="container-product-card-button">
          <div className="product-card-button" onClick={() => addToCart(item)}>
            Add item to cart
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
