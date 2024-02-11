import React from "react";
import "./banner.css";

const page = () => {
  return (
    <div className="relative flex flex-end bg-gray-50">
      <picture>
        <img src="/mobile-banner.webp" alt="" className="lg:hidden" />
        <img src="/banner.webp" alt="" className="lg:block hidden" />
      </picture>
      <div className="absolute lg:top-1/2 lg:left-3/4 lg:transform lg:-translate-x-1/4 lg:-translate-y-11/12  lg:block bottom- left-1/2 transform -translate-x-1/2">
        <div className="space-y-5 font-bebas">
          <h1 className="xl:text-4xl text-xl  font-semibold text-black ">
            I Choose You &
          </h1>
          <h1 className="xl:text-4xl text-xl font-semibold ml-1 text-black">
            I Choose You Two
          </h1>

          <button className="bg-black px-2 py-2 text-gray-50 w-full lg:mt-6 xl:mt-10 mt-4 hover:shadow-effect">
            Buy 2 save 20%
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
