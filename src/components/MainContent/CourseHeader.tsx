import React from 'react';
import { FaPlay } from 'react-icons/fa';

const CourseHeader: React.FC = () => (
  <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg overflow-hidden shadow-lg">
    <div className="relative">
      <img
        src="/images/blender-course.jpg"
        alt="Blender 3D Fundamentals"
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white bg-opacity-50 rounded-full p-4 hover:bg-opacity-75 transition-all transform hover:scale-110">
          <FaPlay className="text-white" size={32} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black to-transparent">
        <h2 className="text-2xl font-bold">BLENDER 3D FUNDAMENTALS</h2>
        <p>Learn The Basics of 3D in Blender with a Project Based Approach</p>
      </div>
    </div>
  </div>
);

export default CourseHeader;
