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
    <div className="r">
      <div>
        <h1 className="title-detail-card">{name}</h1>
      </div>
      <div>
        <img
          className="product-image"
          src={`http://localhost:5000/${image}`}
          width={380}
          alt={name}
        />
      </div>
      <div className="detailbrand">{brand}
      </div>

      <div className="detailcategory">{category}
      </div>

      
      <div className="detaildescription">{description}
      </div>
      
      <div className="detailcountInStock">{countInStock}
      </div>

      
      <div className="detailprice">{price}
      </div>


    </div>
  );
};

export default DetailProductCard;
