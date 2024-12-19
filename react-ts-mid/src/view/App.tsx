import React from 'react';
import StudentList from '../pages/StudentHub';
import AddStudent from '../pages/AddStudent';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>StudentHub</h1>
      <AddStudent />
      <StudentList />
    </div>
  );
};

export default App;
