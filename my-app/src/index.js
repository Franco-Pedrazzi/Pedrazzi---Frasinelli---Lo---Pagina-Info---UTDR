import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexUndertale from './components/IndexUndertale.jsx';
import IndexDeltarune from './components/IndexDeltarune.jsx';
import Category from './components/Category.jsx';
import Article from './components/Article.jsx';
import Footer from './components/Footer.jsx';
import Historia from './components/undertale/Historia.jsx'
import Personajes from './components/undertale/Personajes.jsx';
import Objetos from './components/undertale/Objetos.jsx';
import Objeto from './components/undertale/objeto.jsx';
import Personaje from './components/undertale/Personaje.jsx';
const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/Undertale" element={<IndexUndertale />} />
            <Route path="/Undertale/Historia" element={<Historia />} />
            <Route path="/Undertale/Personajes" element={<Personajes />} />
            <Route path="/Undertale/Objetos" element={<Objetos />} />
            <Route path="/Undertale/Personajes/:articulo" element={<Personaje />} />
            <Route path="/Undertale/Objeto/:categoria/:articulo" element={<Objeto />} />

            <Route path="/Deltarune" element={<IndexDeltarune />} />
            <Route path="/Deltarune/:categoria" element={<Category />} />
            <Route path="/Deltarune/:categoria/:articulo" element={<Article />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

reportWebVitals();
