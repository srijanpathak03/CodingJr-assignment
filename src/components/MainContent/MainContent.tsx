// src/components/MainContent/MainContent.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import CourseHeader from './CourseHeader';
import CourseInstructor from './CourseInstructor';
import CourseDescription from './CourseDescription';
import CourseDetails from './CourseDetails';
import FAQSection from './FAQSection';

const MainContent: React.FC = () => {
  const faqs = useSelector((state: RootState) => state.faq);
  const courseDetails = [
    { icon: 'FaVideo', label: 'Lessons', value: 128 },
    { icon: 'FaClock', label: 'Duration', value: '56h 28m' },
    { icon: 'FaStar', label: 'Skill level', value: 'Beginner' },
  ];

  return (
    <section className="w-full lg:w-2/4 p-4">
      <CourseHeader />
      <CourseInstructor />
      <CourseDescription />
      <CourseDetails courseDetails={courseDetails} />
      <FAQSection faqs={faqs} />
    </section>
  );
};

export default MainContent;