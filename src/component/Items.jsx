import React from "react";

const Items = ({image}) => {
    return (
      <div className="w-40 flex flex-col items-center">
        <img src={image} alt="Product" className="w-32"/>
        <div class="px-4 py-3 ">
        <p class="text-xs font-semibold text-black mb-2">Мужские кроссовки Nike Blazer Mid Suede</p>
        <span class="text-gray-400 text-xs">Цена:</span>
        <p class="text-sm font-bold text-black cursor-auto">12999 руб.</p>
        </div>
      </div>
  
    );
  };
  
  export default Items;



  