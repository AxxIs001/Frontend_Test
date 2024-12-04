import React, { useState } from "react";
import './App.css';
import Navbar from './component/Navbar';
import ProductGrid from './component/ProductGrid';
import Sidebar from './component/Sidebar'; 

function App() {
  const [cart, setCart] = useState([]); // Товарларды корзинага сактоо
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const addToCart = (item) => {
    setCart([...cart, item]); 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-green-100 min-h-[150vh] flex justify-center pt-6">
      <div className="w-8/12 bg-white rounded-lg max-h-[140vh] ">
        <Navbar toggleSidebar={toggleSidebar} />
        <hr />
        <ProductGrid addToCart={addToCart} />
      </div>

     
      <Sidebar
        isOpen={isSidebarOpen}
        cart={cart} 
        removeFromCart={removeFromCart}
        closeSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
