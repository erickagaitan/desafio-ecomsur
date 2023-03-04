import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home.jsx";
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx";
import ProductDetails from "./page/product-details/ProductDetails.jsx";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  return (
    <div className="App">

      <Header/>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<ProductDetails/>}> </Route>
        </Routes>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
};

export default App;
