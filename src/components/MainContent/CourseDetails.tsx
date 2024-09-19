import React from 'react';
import { FaVideo, FaClock, FaStar } from 'react-icons/fa';

interface CourseDetail {
  icon: string;
  label: string;
  value: string | number;
}

interface CourseDetailsProps {
  courseDetails: CourseDetail[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courseDetails }) => (
  <div className="mt-4">
    <h3 className="text-xl font-bold">Course details</h3>
    <div className="mt-2 grid grid-cols-3 gap-4">
      {courseDetails.map((detail, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h4 className="font-bold flex items-center">
            <span className="mr-2">
              {detail.icon === 'FaVideo' && <FaVideo />}
              {detail.icon === 'FaClock' && <FaClock />}
              {detail.icon === 'FaStar' && <FaStar />}
            </span>
            {detail.label}
          </h4>
          <p className="text-2xl">{detail.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CourseDetails;