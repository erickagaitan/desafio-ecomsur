import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../Api/productos";
import "./product-details.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [details, setDetils] = useState();

  console.log("Estoy imprimiendo el detail",details);

  useEffect(() => {
    getProductId(id).then((respuesta) => {
      setDetils(respuesta);
    });
  }, [id]);

  return <div className="contenedor-footer"></div>;
};

export default ProductDetails;
