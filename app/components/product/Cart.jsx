import { useAppContext } from "@/app/context/appcontext";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

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
    <div className="fixed top-0 right-0 lg:w-1/3 h-11/12 bg-white shadow-lg p-4 my-2 mx-1  rounded-md border border-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button className="text-gray-500" onClick={onClose}>
          X
        </button>
      </div>
      <hr className="w-auto " />

      {cartItems.length === 0 && (
        <p className="text-center lg:mt-10 mt-5">Your cart is empty</p>
      )}

      <ul className="mt-7">
        {cartItemsState?.map((item, index) => (
          <li
            key={index}
            className="flex items-center mb-2 border border-gray-400 px-5 py-5"
          >
            <Image
              src={item.selectedImage}
              alt="Product"
              className="object-cover mr-2"
              width={70}
              height={70}
            />
            <div className="flex-grow flex flex-col space-y-3 leading-9">
              <p className="font-semibold text-sm first-letter:capitalize">
                {item.name}
              </p>

              <p className="text-xs">Size: {item.size}</p>
              <div className="flex space-x-6 border border-gray-500 w-3/4 justify-evenly rounded-sm p-3">
                <button
                  onClick={() => {
                    if (item.quantity >= 2) {
                      const updatedCartItems = [...cartItemsState];
                      updatedCartItems[index].quantity -= 1;
                      setCartItemsState(updatedCartItems);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify(updatedCartItems)
                      );
                    }
                  }}
                >
                  -
                </button>
                <span className="text-black">{item.quantity}</span>
                <button
                  onClick={() => {
                    if (item.quantity < 5) {
                      const updatedCartItems = [...cartItemsState];
                      updatedCartItems[index].quantity += 1;
                      setCartItemsState(updatedCartItems);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify(updatedCartItems)
                      );
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="space-y-5 flex items-end flex-col">
              <button
                className="mt-2 text-gray-800 text-xl py-1 px-2 rounded-md"
                onClick={() => {
                  removeProduct(index);
                }}
              >
                <MdDelete />
              </button>
              <p className="text-gray-500 text-xs">₹ {item.price}</p>
            </div>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <button className="bg-gray-900 text-white px-2 py-2 w-3/4">
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
