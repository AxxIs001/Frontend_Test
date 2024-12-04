import React from "react";
import Items from "./Items";

const products = [
  "/src/img/image 5-1.jpg",
  "/src/img/image 5-2.jpg",
  "/src/img/image 5-3.jpg",
  "/src/img/image 5-4.jpg",
  "/src/img/image 5-5.jpg",
  "/src/img/image 5-6.jpg",
  "/src/img/image 5-7.jpg",
  "/src/img/image 5-8.jpg",
  "/src/img/image 5-9.jpg",
  "/src/img/image 5.jpg",
  "/src/img/image 5-2.jpg",
  "/src/img/image 5-6.jpg",
];

const ProductGrid = () => {
  return (
    <div className="m-12 ">
      <h1 className="font-bold text-3xl mb-10">Все кроссовки</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-center border border-gray-200 rounded-3xl p-4"
          >
            <Items image={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
