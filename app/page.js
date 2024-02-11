"use client";

import Navbar from "./components/navbar/Navbar";
import Card from "./components/product/page";
import { useAppContext } from "@/app/context/appcontext";
import Banner from "./components/Banner/page";

const Page = () => {
  const { showSearchBar, setShowSearchBar, isCartOpen, setIsCartOpen } =
    useAppContext();

  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center items-center space-x-10"
        onClick={() => {
          if (isCartOpen === true) {
            setIsCartOpen(false);
          }
          if (showSearchBar === true) {
            setShowSearchBar(false);
          }
        }}
      >
        <div className="flex flex-col">
          <Banner />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Page;
