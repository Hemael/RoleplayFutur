import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './pages/connexion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Router>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>

  </React.StrictMode>
);


