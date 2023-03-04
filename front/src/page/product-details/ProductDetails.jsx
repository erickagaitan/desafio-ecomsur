import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../Api/productos";
import DetailProductCard from "../../components/detail-produt-card/DetailProductCard";
import "./product-details.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [details, setDetils] = useState([]);

  console.log("Estoy imprimiendo el detail",details);

  useEffect(() => {
    getProductId(id).then((respuesta) => {
      setDetils(respuesta);
    });
  }, [id]);

  return (
    <DetailProductCard image={details.image} name={details.name} brand={details.brand} category={details.category} 
    countInStock={details.countInStock} description={details.description}
  
    price={details.category}/>
  )
};

export default ProductDetails;
