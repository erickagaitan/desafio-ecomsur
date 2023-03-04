import React, { useEffect, useState } from "react";
import { getProduct } from "../../Api/productos";
import Card from "../../components/card/Card";
import "./home.css";

const Home = () => {
  const [productos, setProductos] = useState();

  console.log("Estoy imprmiendo lo del home",productos);

  useEffect(() => {
    getProduct().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <div className="home-header">
      {productos?.map((res, i) => (
        <Card
          key={i}
          img={res.image}
          name={res.name}
          price={res.price}
          countInStock={res.countInStock}
          _id={res._id}
        />
      ))}
    </div>
  );
};

export default Home;
