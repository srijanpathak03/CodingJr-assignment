// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaChevronLeft } from 'react-icons/fa';
import { RootState } from '../../store/rootReducer';
import { toggleSection } from '../../store/slices/courseSectionsSlice';
import CourseSection from './CourseSection';

const Sidebar: React.FC = () => {
  const courseSections = useSelector((state: RootState) => state.courseSections);
  const dispatch = useDispatch();

  return (
    <aside className="w-full bg-gray-900 text-white p-4 lg:h-auto overflow-y-auto">
      <button className="flex items-center text-gray-400 mb-4 hover:text-white transition-colors">
        <FaChevronLeft className="mr-2" />
        Back to courses
      </button>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Blender 3D Fundamentals</h2>
        <p className="text-sm text-gray-400">10 sections • 128 lectures • 56h 28m total length</p>
      </div>
      <div className="space-y-2">
        {courseSections.map((section, index) => (
          <CourseSection
            key={section.title}
            section={section}
            onToggle={() => dispatch(toggleSection(index))}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;