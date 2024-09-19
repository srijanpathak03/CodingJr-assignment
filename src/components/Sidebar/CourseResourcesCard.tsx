// src/components/CourseResourcesCard.tsx
import React from 'react';
import { FaDownload, FaExternalLinkAlt, FaBook, FaDiscord } from 'react-icons/fa';

const CourseResourcesCard: React.FC = () => {
  const resources = [
    { icon: <FaDownload />, text: 'Course Materials', link: '#' },
    { icon: <FaExternalLinkAlt />, text: 'Blender Website', link: 'https://www.blender.org/' },
    { icon: <FaBook />, text: 'Blender Manual', link: 'https://docs.blender.org/manual/en/latest/' },
    { icon: <FaDiscord />, text: 'Join Discord Community', link: '#' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Course Resources</h3>
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="flex items-center">
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="mr-3 text-blue-500 text-xl">{resource.icon}</span>
              <span className="text-lg font-medium">{resource.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <hr className="my-6 border-gray-300" />
      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">More resources coming soon...</span>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default CourseResourcesCard;
