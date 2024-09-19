import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingCard: React.FC = () => (
  <div className="mt-4 bg-white p-4 rounded-lg shadow">
    <div className="flex items-center space-x-2 mb-2">
      <FaStar className="text-yellow-400" size={24} />
      <span className="text-2xl font-bold">Rating</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-3xl font-bold">4.8</span>
      <div className="flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    </div>
    <p className="text-sm text-gray-500">2,492 Students</p>
  </div>
);

export default RatingCard;