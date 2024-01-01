"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { useCallback } from "react";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const res = await fetch("/api/productdetails");
        const data = await res.json();
        setLoading(false);
        setCards(data);
        console.log("data", data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductsData();
  }, []);

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
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen w-screen bg-transparent">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className="flex items-center transition-all relative space-x-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center flex-col py-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-5 cursor-pointer"
            // href={`/components/product/${card._id}`}
            onClick={() => {
              router.push(`/search?${createQueryString("product", card._id)}`);
            }}
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
