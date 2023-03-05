import React, { createContext, useState, useEffect } from "react";
import { getProduct } from "../Api/productos";

export const ProductsContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProduct().then((respuesta) => {
      setProducts(respuesta);
    });

    const itemCart = window.localStorage.getItem("itemCart");
    if(itemCart){
      const value = JSON.parse(itemCart);
      setCart(value);
    }
 
  }, []);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((products) => products._id === item._id);

    const updateCart = [...cart];

    if (itemIndex === -1) {
      const products = {
        _id: item._id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name,
      };

      updateCart.push(products);
    } else {
      updateCart[itemIndex].count += 1;
    }

    window.localStorage.setItem("itemCart", JSON.stringify(updateCart));
    setCart(updateCart);
  };

  const removefromCart = (item) => {
    const itemIndex = cart.findIndex((products) => products._id === item._id);
    const updateCart = [...cart];
    if (cart[itemIndex].count > 1) {
      updateCart[itemIndex].count -= 1;
    }

    if (updateCart[itemIndex].count <= 0) {
      updateCart.slice(itemIndex, 1);
    }
    setCart(updateCart);
  };

  const removeItemCartById = (_id) => {
    const value = cart.filter((items) => items._id !== _id);
    setCart(value);
    window.localStorage.setItem("itemCart", JSON.stringify(value));
  };

  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.count * item.price));
    return total;
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removefromCart,
        cartTotal,
        removeItemCartById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default Context;
