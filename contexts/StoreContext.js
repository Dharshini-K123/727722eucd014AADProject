// src/contexts/StoreContext.js

import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        cart,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
