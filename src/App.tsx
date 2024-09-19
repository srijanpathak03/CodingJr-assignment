// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import CourseResourcesCard from './components/Sidebar/CourseResourcesCard';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            <Sidebar />
            <CourseResourcesCard />
          </div>
          <MainContent />
          <RightSidebar />
        </main>
      </div>
    </Provider>
  );
};

export default App;