import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrudeUsuarios from './components/CrudeUsuarios';
import Menu from './components/Menu';
import Sobre from './components/About';
import App from './App';
import About from './components/About';
import Home from './components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="usuarios" element={<CrudeUsuarios />} />
      <Route path="sobre" element={<About />} />
    </Routes>
  </BrowserRouter>
);

