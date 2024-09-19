import React from 'react';

const PublisherCard: React.FC = () => (
  <div className="mt-4 bg-white p-4 rounded-lg shadow">
    <h3 className="font-bold mb-2">Publisher</h3>
    <div className="flex items-center space-x-2">
      <img
        src="images/avatar.jpeg"
        alt="Srijan Pathak"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h4 className="font-bold">Srijan Pathak</h4>
        <p className="text-sm text-gray-500">3D Artist</p>
      </div>
    </div>
    <p className="mt-2 text-sm text-gray-600">
      Hey! My name is Srijan. I'm 20 and a freelance 3D Artist with around 6 years of experience.
    </p>
    <div className="mt-2 text-sm text-gray-500">
      <p>4.8 Instructor rating</p>
      <p>889 Reviews</p>
      <p>4,887 Students</p>
      <p>6 Courses</p>
    </div>
  </div>
);

export default PublisherCard;