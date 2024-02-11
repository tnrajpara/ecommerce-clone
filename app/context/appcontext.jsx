"use client";
import React, { createContext, useState } from "react";

// Create a context
const AppContext = createContext({
  count: 1,
  setCount: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  showSearchBar: false, // Add the showSearchBar state variable
  setShowSearchBar: () => {}, // Add the setShowSearchBar setter function
});

// Create a context provider
export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return JSON.parse(storedCart) || [];
    } else {
      return [];
    }
  });
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        showSearchBar,
        setShowSearchBar,
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
