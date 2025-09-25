import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentVerification from './components/StudentVerification';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/verification/:studentId" element={<StudentVerification />} />
      <Route path="/" element={<div><h1>Home</h1><p>Please use a verification link.</p></div>} />
    </Routes>
  );
}

export default App;