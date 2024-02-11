"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Searchbar from "./Searchbar";
import { useAppContext } from "@/app/context/appcontext";
import Cart from "@/app/components/product/Cart";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    showSearchBar,
    setShowSearchBar,
  } = useAppContext();
  return (
    <div className="relative z-10 ">
      {showSearchBar && <Searchbar />}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-extrabold font-bebas  text-4xl py-8 px-2 lg:ml-6">
            VARSHELL
          </h1>
        </div>

        <div className="flex space-x-3">
          <div className="relative">
            <IoBagOutline
              className="w-8 h-8 mr-2 font-thin"
              onClick={() => {
                setIsCartOpen(!isCartOpen);
              }}
            />
            {cartItems.length >= 0 && (
              <div className="absolute top-0 right-0 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
          </div>
          <CiSearch
            className="text-lg font-thin w-8 h-8 ml-2"
            onClick={() => {
              // Toggle the showSearchBar state variable
              setShowSearchBar(!showSearchBar);
            }}
          />
        </div>
        {isCartOpen && (
          <Cart cartItems={cartItems} onClose={() => setIsCartOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
