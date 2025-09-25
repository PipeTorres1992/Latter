import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import StudentVerification from './components/StudentVerification';
import './App.css';

// Component to handle the redirect
const HomeRedirect = () => {
  React.useEffect(() => {
    window.location.href = 'https://elischools.com/';
  }, []);

  return <div>Redirecting to elischools.com...</div>;
};

// Component for the 404 Not Found page
const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/elischools.com/verification/VQkdqi21q12" element={<StudentVerification />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
