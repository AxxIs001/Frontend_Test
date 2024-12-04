import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, cart, removeFromCart, closeSidebar }) => {
    function Count() {
        const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
        return totalPrice;
      }
      function Tax(){
        const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
        const totalTax = Math.floor((totalPrice * 5) / 100);
        return totalTax
      }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar} 
      ></div>
 
      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white text-black  p-4 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeSidebar}
          className="text-black font-bold text-xl mb-4"
        >
        </button>
        <h2 className="text-2xl font-bold mb-4 ml-4">Корзина</h2>
        {cart.length === 0 ? (
          <p className="ml-4">Корзина пустая</p>
        ) : (
          <ul className="ml-4">
            {cart.map((item, index) => (
              <li key={index} className="flex space-x-1 items-center mb-6 border rounded-2xl p-4">
                <div className="flex items-center">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 mr-8"
                  />
                  <div className="mr-6">
                  <p className="w-40">{item.title}</p>
                  <p className="font-bold">{item.price} руб.</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-gray-400 border rounded-xl p-2"
                >
                 <FaTimes /> 
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="fixed ml-4 bottom-12  font-bold">
            <p >Итого: <span className="font-thin">............................................</span> {Count()} руб. </p>
            <p>Налог 5%: <span className="font-thin">..........................................</span>{Tax()} руб.</p>
            <button className="w-80 mt-5 h-11 border rounded-lg bg-[#4aff03b2] text-white flex items-center justify-center ">
                Оформить заказ <span className="ml-5">🡲</span>
            </button>

        </div>
      </div>

    </>
  );
};

export default Sidebar;
