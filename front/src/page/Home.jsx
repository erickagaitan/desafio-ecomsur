import React, { useEffect, useState } from "react";
import { getProduct } from "../Api/productos";
import "./home.css";

const Home = () => {
    
  const [productos, setProductos] = useState();

  console.log(productos);

  useEffect(() => {
    getProduct().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <div className="home-header">
      <h1>¡Pizzeria Mamma Mia!</h1>
      <p>Tenemos las mejores y mas deliciosas pizzas</p>
    </div>
  );
};

export default Home;
