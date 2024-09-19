import React from 'react';

const PricingCard: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-500">Full course</span>
      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm">60% OFF</span>
    </div>
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-3xl font-bold">$15.99</span>
      <span className="text-gray-500 line-through">$39.99</span>
    </div>
    <button className="w-full bg-purple-600 text-white py-2 rounded-lg mb-2 hover:bg-purple-700 transition-colors">Add to cart</button>
    <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors">Buy now</button>
    <p className="text-sm text-gray-500 text-center mt-2">30-Day money-back guarantee</p>
  </div>
);

export default PricingCard;
