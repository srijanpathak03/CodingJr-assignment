import React from 'react';
import PricingCard from './PricingCard';
import CourseIncludes from './CourseIncludes';
import RatingCard from './RatingCard';
import PublisherCard from './PublisherCard';
import SuggestedCourses from './SuggestedCourses';

const RightSidebar: React.FC = () => (
  <aside className="w-full lg:w-1/4 p-4">
    <PricingCard />
    <CourseIncludes />
    <RatingCard />
    <PublisherCard />
    <SuggestedCourses />
  </aside>
);

export default RightSidebar;