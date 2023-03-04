import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/Context";

import "./header.css";

const Header = () => {
  const { cart } = useContext(ProductsContext);

  return (
    <header className="header">
      <Link to="/carrito">
        <i class="fa-solid fa-cart-shopping"></i> {cart?.length}{" "}
      </Link>
    </header>
  );
};

export default Header;
