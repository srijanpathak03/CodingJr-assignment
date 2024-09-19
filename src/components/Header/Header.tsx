import React from 'react';
import { FaBars, FaHeart, FaShoppingBag, FaBell } from 'react-icons/fa';

const Header: React.FC = () => (
  <header className="bg-black text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <button className="text-2xl"><FaBars /></button>
      <h1 className="text-2xl font-bold">Quantum</h1>
    </div>
    <div className="flex items-center space-x-4">
      <FaHeart className="cursor-pointer hover:text-red-500 transition-colors" />
      <FaShoppingBag className="cursor-pointer hover:text-yellow-500 transition-colors" />
      <FaBell className="cursor-pointer hover:text-blue-500 transition-colors" />
    </div>
  </header>
);

export default Header;