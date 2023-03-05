import React, { useContext } from "react";
import CartList from "../../components/cart-list/CarList";
import { ProductsContext } from "../../context/Context";
import "./cart.css";

const Cart = () => {
  const { cart, products } = useContext(ProductsContext);

  return (
    <div className="cart">
      <h2>Detalles del pedido</h2>
      {cart.length !== 0 ? (
        <CartList cart={cart} products={products} />
      ) : (
        <p className="empty-card">No hay elementos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;
