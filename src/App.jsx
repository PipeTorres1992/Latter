import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentVerification from './components/StudentVerification';
import './App.css';

// Componente para manejar la redirección
const HomeRedirect = () => {
  React.useEffect(() => {
    window.location.href = 'https://elischools.com/';
  }, []);

  return <div>Redirecting to elischools.com...</div>;
};

// Componente para la página 404 Not Found
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
      <Route path="/verification/VQkdqi21q12/" element={<StudentVerification />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
