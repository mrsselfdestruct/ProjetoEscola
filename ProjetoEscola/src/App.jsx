
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import React, { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./assets/pages/Home'));
const Cursos = lazy(() => import('./assets/pages/Cursos'));
const Sobre = lazy(() => import('./assets/pages/Sobre'));


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
