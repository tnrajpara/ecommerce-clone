"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Searchbar = ({ showSearchBar }) => {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const res = await fetch("/api/productdetails");
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductsData();
  }, []);

  const filteredCards = cards.filter((card) => {
    const nameMatch = card.name.toLowerCase().includes(input.toLowerCase());
    const descriptionMatch = card.description
      .toLowerCase()
      .includes(input.toLowerCase());
    return nameMatch || descriptionMatch;
  });

  const handleMouseEnter = (index) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, hovered: true } : card
      )
    );
  };

  const handleMouseLeave = (index) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, hovered: false } : card
      )
    );
  };

  return (
    <div
      className={`absolute w-full ${
        showSearchBar ? "animate-slide-down-active" : ""
      } bg-white p-4 border border-gray-300 z-10 shadow-lg `}
    >
      <div className="flex justify-between items-center flex-col">
        <div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0681/1146/6781/files/make_it_11_I_m_sorry_I_m_not_sure_what_you_re_referring_to._Could_you_please_provide_more_context_or_information_170_x_170_px_2000_x_2000_px_2000_x_1000_px_Logo_500_x_250_px_2000_x_10.png?v=1679847057&width=500"
            alt=""
            height={100}
            width={100}
            className="w-52"
          />
        </div>
        <div className="flex space-x-5 w-2/3 justify-between rounded-md py-1 mb-4 border border-gray-800">
          <input
            type="text"
            placeholder="search products"
            className=" outline-none rounded-md h-10 w-2/3 px-2"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <AiOutlineSearch className="text-lg w-8 h-10 ml-2" />
        </div>
        <div className="flex space-x-3">
          {input.trim() === "" ? (
            <p>No search results yet.</p>
          ) : filteredCards.length === 0 ? (
            <p>No matching products found.</p>
          ) : (
            filteredCards.map((card, index) => (
              <Link
                key={index}
                className="flex justify-center flex-col py-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-5 cursor-pointer"
                href={`/components/product/${card._id}`}
              >
                <div className="flex flex-col space-y-">
                  <Image
                    src={
                      card.hovered
                        ? card.colorImages[1].url
                        : card.colorImages[0].url
                    }
                    width={300}
                    height={300}
                    alt="black-flash"
                    className="transition-all "
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  />
                </div>
                <button className="text-center uppercase mt-4 leading-8 text-sm">
                  {card.name}
                </button>
                <p className="text-center leading-8">
                  From <span>${card.price}</span>
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
