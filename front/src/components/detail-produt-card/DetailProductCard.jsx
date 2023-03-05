import React, { useContext } from "react";
import { ProductsContext } from "../../context/Context";
import "./detail-product-card.css";

const DetailProductCard = ({
  _id,
  image,
  name,
  brand,
  category,
  description,
  countInStock,
  price,
}) => {

  const { addToCart } = useContext(ProductsContext);
  const item = { img:image, name, price, countInStock, _id };
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
                onClick={() => addToCart(item)}
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
