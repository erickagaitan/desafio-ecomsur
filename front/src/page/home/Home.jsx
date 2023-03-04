import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../../context/Context";

import Card from "../../components/card/Card";

import "./home.css";

const Home = () => {
  const {products} = useContext(ProductsContext) 

  return (
    <div className="home-header">
      {products?.map((res, i) => (
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
