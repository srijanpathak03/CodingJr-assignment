import React from 'react';
import { FaHeart, FaShareAlt, FaEllipsisH } from 'react-icons/fa';

const CourseInstructor: React.FC = () => (
  <div className="mt-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <img
        src="images/avatar.jpeg"
        alt="Srijan Pathak"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h3 className="font-bold">Srijan Pathak</h3>
        <p className="text-sm text-gray-500">Publisher</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
        <FaHeart /> <span>1,255</span>
      </button>
      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
        <FaShareAlt /> <span>Share</span>
      </button>
      <button className="hover:text-gray-700 transition-colors"><FaEllipsisH /></button>
    </div>
  </div>
);

export default CourseInstructor;