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
    console.log(console.log('cars',cart))
    setCart(updateCart);
  };

  const removefromCart = (item) => {
    const itemIndex = cart.findIndex((products) => products._id === item._id);
    const updateCart = [...cart];
    updateCart[itemIndex].count -= 1;
    if (updateCart[itemIndex].count <= 0) {
      updateCart.slice(itemIndex, 1);
    }
    setCart(updateCart);
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default Context;
