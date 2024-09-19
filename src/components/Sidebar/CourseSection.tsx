import React from 'react';
import { FaChevronDown, FaPlay } from 'react-icons/fa';
import { CourseSection as CourseSectionType } from '../../types';

interface CourseSectionProps {
  section: CourseSectionType;
  onToggle: () => void;
}

const CourseSection: React.FC<CourseSectionProps> = ({ section, onToggle }) => (
  <div>
    <button
      className={`block w-full text-left p-2 rounded transition-colors ${
        section.isExpanded ? 'bg-gray-800' : 'hover:bg-gray-800'
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center">
        <span>{section.title}</span>
        <FaChevronDown className={`transition-transform ${section.isExpanded ? 'rotate-180' : ''}`} />
      </div>
    </button>
    {section.isExpanded && section.lessons && (
      <div className="ml-4 mt-2 space-y-2">
        {section.lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <FaPlay className="text-xs" />
              <span>{lesson.title}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{lesson.duration}</span>
              <div className="w-16 bg-gray-700 rounded-full h-1">
                <div
                  className="bg-purple-600 rounded-full h-1"
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default CourseSection;