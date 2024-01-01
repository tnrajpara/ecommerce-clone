"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../navbar/Navbar";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState("/black-flash.webp");
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center py-1 my-4">
          <Link href="/">Home</Link>
          <span className="px-2">/</span>
          <Link href="/components/product">Product</Link>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 ml-4 space-x-7 flex-col grid-cols-1">
            <div className="flex space-x-12">
              <div className="flex flex-col space-y-3">
                <Image
                  src="/black-flash.webp"
                  width={60}
                  height={60}
                  alt="black-flash"
                  className="active:border border-black"
                />
                <Image
                  src="/back-black-flash.webp"
                  width={60}
                  height={60}
                  alt="back-black-flash"
                  className="active:border border-black "
                />
                <Image
                  src="/red-flash.webp"
                  width={60}
                  height={60}
                  alt="red-flash"
                  className="active:border border-black "
                />
                <Image
                  src="/back-red-flash.webp"
                  width={60}
                  alt="back-red-flash"
                  height={60}
                  className="active:border border-black "
                />
                <Image
                  src="/navy-flash.webp"
                  width={60}
                  height={60}
                  alt="navy-flash"
                  className="active:border border-black "
                />
                <Image
                  src="/back-navy-flash.webp"
                  width={60}
                  height={60}
                  alt="back-navy-flash"
                  className="active:border border-black "
                />
              </div>
              <div className="">
                <Image
                  src={selectedImage}
                  height={500}
                  width={500}
                  alt="something went wrong"
                />
              </div>
            </div>

            <div className="">
              <div className="flex justify-between">
                <div className="leading-9">
                  <span className="text-lg font-semibold">The Flash thee</span>
                  <p>$32.50</p>
                </div>
                <AiOutlineStar className="h-7 w-7 rounded-full" />
              </div>
              <div className="my-5">
                <span className="font-semibold">Color:</span>
                <span>Red</span>
              </div>

              <div className="flex space-x-5">
                <Image
                  src="/black-flash.webp"
                  alt="black-flash"
                  width={60}
                  height={60}
                  className="border border-gray-300 active:border active:border-black"
                />
                <Image
                  src="/red-flash.webp"
                  alt="red-flash"
                  width={60}
                  height={60}
                  className="border border-gray-300 active:border active:border-black"
                />
                <Image
                  src="/navy-flash.webp"
                  alt="navy-flash"
                  width={60}
                  height={60}
                  className="border border-gray-300 active:border active:border-black"
                />
              </div>

              <div className="my-5">
                <span className="font-semibold mb-2">Size:</span>
                <div className="flex space-x-5">
                  <div className="border border-gray-300 rounded-md px-6 py-3 active:bg-black active:text-white">
                    S
                  </div>
                  <div className="border border-gray-300 rounded-md px-6 py-3 active:bg-black active:text-white">
                    M
                  </div>
                  <div className="border border-gray-300 rounded-md px-6 py-3 active:bg-black active:text-white">
                    L
                  </div>
                  <div className="border border-gray-300 rounded-md px-6 py-3 active:bg-black active:text-white">
                    XL
                  </div>
                  <div className="border border-gray-300 rounded-md px-6 py-3 active:bg-black active:text-white">
                    XXL
                  </div>
                </div>

                <div className="my-5">
                  <span className="font-semibold leading-9">Quantity</span>
                  <div className="w-5/6 space-x-8 flex">
                    <div className="flex space-x-6 border border-gray-500 w-24 rounded-sm p-3">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                    <button className="border border-gray-900 p-3 w-4/5 rounded-md ">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <button className="bg-black text-white p-3 w-full rounded-md">
                  Buy it now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
