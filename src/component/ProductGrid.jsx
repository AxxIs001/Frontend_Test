import React, { useEffect, useState } from "react";
import Items from "./Items";

const API_URL = "/products.json"; 

const ProductGrid = ({ addToCart }) => {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="m-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl">Все кроссовки</h1>
        <input
          type="text"
          placeholder="Поиск товара..."
          className="border rounded-lg p-2 w-60"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex justify-center border border-gray-200 rounded-3xl p-4"
          >
            <Items
              image={product.image}
              name={product.title}
              price={`${product.price} руб.`}
              addToCart={() => addToCart(product)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
