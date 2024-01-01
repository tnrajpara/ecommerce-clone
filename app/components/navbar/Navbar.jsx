"use client";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { BsMinecartLoaded } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Searchbar from "./Searchbar";
import NavbarItems from "./NavbarItems";
import Image from "next/image";
import { useAppContext } from "@/app/context/appcontext";
import Cart from "@/app/components/product/Cart";

const Navbar = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    showSearchBar,
    setShowSearchBar,
  } = useAppContext();
  return (
    <div className="relative z-10">
      {showSearchBar && <Searchbar />}
      <div className="flex justify-between items-center">
        <AiOutlineSearch
          className="text-lg w-8 h-8 ml-2"
          onClick={() => {
            // Toggle the showSearchBar state variable
            setShowSearchBar(!showSearchBar);
          }}
        />
        <div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0681/1146/6781/files/make_it_11_I_m_sorry_I_m_not_sure_what_you_re_referring_to._Could_you_please_provide_more_context_or_information_170_x_170_px_2000_x_2000_px_2000_x_1000_px_Logo_500_x_250_px_2000_x_10.png?v=1679847057&width=500"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="flex space-x-3">
          <CiShoppingCart
            className="w-9 h-9 mr-2"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          />
        </div>
        {isCartOpen && (
          <Cart cartItems={cartItems} onClose={() => setIsCartOpen(false)} />
        )}
      </div>
      <NavbarItems />
    </div>
  );
};

export default Navbar;
