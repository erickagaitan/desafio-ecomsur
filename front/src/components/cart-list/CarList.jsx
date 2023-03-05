import React, { useContext } from "react";
import { ProductsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import "./cart-list.css";

const CartList = ({ cart, products }) => {
  const { addToCart, removefromCart, removeItemCartById, cartTotal } =
    useContext(ProductsContext);
  return (
    <div className="cartlist">
      <ul>
        {cart?.map((item, i) => {
          const imagen = `http://localhost:5000/${item.img}`;
          return (
            <li key={i}>
              <div className="product">
                <img className="image-cart" src={imagen} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
              <div className="pricefinal">
                <h4 className="precio">${item.price * item.count}</h4>
                <div className="cotenedorbtn">
                  <div className="btns"></div>
                  <button
                    className="btn btn-primary"
                    onClick={() => removefromCart(item)}
                  >
                    -
                  </button>
                  <p className="bold">{item.count}</p>
                  <button
                    className="btn btn-secundary"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <div className="cart-list-eliminar" onClick={() => removeItemCartById(item._id)}>Eliminar</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">
        <div className="cart-list-subtotal">
          <h3> Total: {cartTotal()}</h3>
          <Link to="/pagar" className="btn-final">
            Ir a pagar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartList;
