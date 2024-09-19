import React from 'react';
import { FaStar } from 'react-icons/fa';

const SuggestedCourses: React.FC = () => (
  <div className="mt-4">
    <h3 className="font-bold mb-2">Suggested courses</h3>
    <div className="space-y-2">
      <div className="bg-white p-2 rounded-lg shadow flex items-center space-x-2">
        <img src="/images/reactjs-course.jpg" alt="Learn ReactJs" className="w-15 h-15 rounded object-contain" />
        <div>
          <h4 className="font-bold">Learn ReactJS</h4>
          <p className="text-sm text-gray-500">By Julia Smith</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm">4.8</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-lg shadow flex items-center space-x-2">
        <img src="/images/flutter-course.jpg" alt="Flutter" className="w-15 h-15 rounded" />
        <div>
          <h4 className="font-bold">Flutter</h4>
          <p className="text-sm text-gray-500">By Michael Lee</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm">4.7</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-lg shadow flex items-center space-x-2">
        <img src="/images/devops-course.jpg" alt="Devops Mastery" className="w-15 h-15 rounded" />
        <div>
          <h4 className="font-bold">Devops Mastery</h4>
          <p className="text-sm text-gray-500">By Samantha Green</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm">4.9</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SuggestedCourses;
