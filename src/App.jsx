import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentVerification from './components/StudentVerification';
import './App.css';

/*
// -- Código de redirección anterior comentado --
const HomeRedirect = () => {
  React.useEffect(() => {
    window.location.href = 'https://elischools.com/';
  }, []);

  return <div>Redirecting to elischools.com...</div>;
};
*/

// Nuevo componente Home para la prueba
const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Página de Prueba</h1>
      <p>Haz clic en el botón para ir a la página de verificación.</p>
      <Link to="/elischools.com/verification/VQkdqi21q12/">
        <button>Ir a la Verificación</button>
      </Link>
    </div>
  );
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
      {/* <Route path="/" element={<HomeRedirect />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/elischools.com/verification/VQkdqi21q12/" element={<StudentVerification />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;