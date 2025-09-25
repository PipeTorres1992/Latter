import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentVerification from './components/StudentVerification';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentVerification />} />

    </Routes>
  );
}

export default App;