import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex justify-between items-center m-12">
      <div className="flex items-center gap-2">
        <img
          src="src\img\image_4.png"
          alt="Logo"
          className="w-10 h-10"
        />
        <div>
          <span className="text-2xl font-bold ">KROSS STORE</span>
          <p className="font-semibold text-sm text-gray-400">Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="flex items-center gap-8 text-gray-600">
        <span className="text-lg font-medium flex items-center">
          <FaShoppingCart className="mr-2" /> 1205 руб.
        </span>
        <button
          onClick={toggleSidebar} 
          className="hover:text-black flex items-center"
        >
          <FaHeart className="mr-2" /> Закладки
        </button>
        <button className="hover:text-black flex items-center">
          <FaUser className="mr-2" /> Профиль
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
