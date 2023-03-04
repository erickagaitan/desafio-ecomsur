import React from "react";
import "./detail-product-card.css";

const DetailProductCard = ({
  image,
  name,
  brand,
  category,
  description,
  countInStock,
  price,
}) => {
  return (
    <div className="container-details">
      <div className="image-details">
        <img
          className="product-image-detail"
          src={`http://localhost:5000/${image}`}
          alt={name}
        />
      </div>

      <div className="details_electronics">
        <div>
          <h1 className="title-detail-card">{name}</h1>
        </div>

        <div className="detailbrand"> Marca: {brand}</div>

        <div className="detailcategory">Categoria: {category}</div>

        <div className="detaildescription">Descripción:{description}</div>

        <div className="detailcountInStock">Stock: {countInStock}</div>

        <div className="detailprice">Precio: ${price}</div>

        <div className="btn_details">
          {countInStock ? (
            <div className="container-button-detail">
              <div
                className="product-card-button-details"
                onClick={() => console.log("hola")}
              >
                Add item to cart
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailProductCard;
