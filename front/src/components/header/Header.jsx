import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/Context";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { cart } = useContext(ProductsContext);

  const navigate = useNavigate();

  const irAlHome = () => {
    navigate(`/`);
  };

  return (
    <header className="header">
      <img className="logo_header" src={Logo} onClick={() => irAlHome()} width={55} />

      <Link className="header-cont-car" to="/cart">
        <i className="fa-solid fa-cart-shopping"></i> {cart?.length}{" "}
      </Link>
    </header>
  );
};

export default Header;
