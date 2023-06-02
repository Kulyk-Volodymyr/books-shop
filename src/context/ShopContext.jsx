import React, { createContext, useState } from 'react';
import {BOOKS} from '../data/books';

export const ShopContext = createContext(null);

const getDefultCart = () => {
  let cart = {};
  for (let i = 1; i < BOOKS.length + 1; i++) {
      cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefultCart());
  const [bookInfo, setBookInfo] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = BOOKS.find((book) => book.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const addToCart = (itemID) => {
    setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}));
  }

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}));
  }

  const updateCartItemCount = (newAmount, itemID) => {
    if (/\d/.test(newAmount)) setCartItems((prev) => ({...prev, [itemID]: newAmount}));
  };

  const sendBookId = (bookId) => {
    setBookInfo(BOOKS.filter(book => book.id == bookId)[0])
  };

  const getTotalBooksInCart = () => {
    let totalBooks = 0;
    for (const item in cartItems) {
      totalBooks += cartItems[item];
    }
    return totalBooks;
  };

  const contextValue = {
      cartItems, 
      bookInfo,
      addToCart, 
      removeFromCart, 
      updateCartItemCount,
      getTotalCartAmount,
      sendBookId,
      getTotalBooksInCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
