import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useRouter } from "next/navigation";

const NavbarItems = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-center flex-col md:flex-row space-x-6 items-center">
        <span>Collections</span>
        <div className="flex items-center space-x-3">Hoodie & Sweatshirts</div>
        <span>Jackets & cargo</span>
      </div>
    </div>
  );
};

export default NavbarItems;
