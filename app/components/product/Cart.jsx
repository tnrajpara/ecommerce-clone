import Image from "next/image";
import React, { useState, useEffect } from "react";

const Cart = ({ cartItems, onClose }) => {
  const [cartItemsState, setCartItemsState] = useState(cartItems);

  const removeProduct = (index) => {
    const updatedCartItems = [...cartItemsState];
    updatedCartItems.splice(index, 1);
    setCartItemsState(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.location.reload();
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button className="text-gray-500" onClick={onClose}>
          <span className="sr-only">Close</span>
        </button>
      </div>
      <ul className="mt-7 space-y-4 ">
        {cartItemsState?.map((item, index) => (
          <li
            key={index}
            className="flex items-center mb-2 border border-gray-400 px-2 rounded-lg"
          >
            <Image
              src={item.selectedImage}
              alt="Product"
              className="object-cover mr-2"
              width={70}
              height={70}
            />
            <div className="flex-grow flex flex-col space-y-1 leading-9">
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-xs font-medium">Color: {item.color}</p>
              <p className="text-gray-500 text-xs">${item.price}</p>
              <p className="text-xs">Size: {item.size}</p>
            </div>
            <div className="space-y-5 flex items-end flex-col">
              <button className="text-gray-900  text-sm">Checkout</button>
              <button
                className="mt-2 bg-gray-900 text-white py-1 px-2 rounded-md text-sm"
                onClick={() => {
                  removeProduct(index);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
