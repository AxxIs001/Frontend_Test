import React from "react";
import { FaPlus } from "react-icons/fa";

const Items = ({ image, name, price, addToCart }) => {

  const handleAddToCart = () => {
    alert(`${name} has been added to the cart!`);
  };


  return (
    <div className="w-40 flex flex-col items-center">
      <img src={image} alt={name} className="w-32 h-32 object-contain" />
      <div className="px-4 py-3">
        <p className="text-xs font-semibold text-black mb-2">{name}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs">Цена:</span>
            <p className="text-sm font-bold text-black mb-4">{price}</p>
          </div>
          <button
  onClick={() => {
    addToCart();      
    handleAddToCart(); 
  }}
  className="w-8 h-8 border text-gray-400 rounded-lg hover:bg-green-500 hover:text-white flex items-center justify-center"
>
  <FaPlus />
</button>
        </div>
      </div>
    </div>
  );
};

export default Items;


