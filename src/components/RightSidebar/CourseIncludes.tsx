import React from 'react';
import { FaVideo, FaFileAlt, FaDownload, FaMobileAlt } from 'react-icons/fa';

const CourseIncludes: React.FC = () => (
  <div className="mt-4">
    <h3 className="font-bold mb-2">Course includes:</h3>
    <ul className="space-y-2">
      {[
        { icon: <FaVideo />, text: '56 hours on-demand video' },
        { icon: <FaFileAlt />, text: '6 Articles' },
        { icon: <FaDownload />, text: '8 Downloadable resources' },
        { icon: <FaMobileAlt />, text: 'Mobile version' },
      ].map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2">{item.icon}</span>
          {item.text}
        </li>
      ))}
    </ul>
  </div>
);

export default CourseIncludes;