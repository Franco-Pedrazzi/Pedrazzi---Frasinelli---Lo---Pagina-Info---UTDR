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
import Personages from './components/undertale/Personages.jsx';
import Obgetos from './components/undertale/Obgetos.jsx';
const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/Undertale" element={<IndexUndertale />} />
            <Route path="/Undertale/Historia" element={<Historia />} />
            <Route path="/Undertale/Personages" element={<Personages />} />
            <Route path="/Undertale/Obgetos" element={<Obgetos />} />
            <Route path="/Undertale/Personages/:articulo" element={<Personages />} />
            <Route path="/Undertale/Obgetos/:articulo" element={<Obgetos />} />

            <Route path="/Deltarune" element={<IndexDeltarune />} />
            <Route path="/Deltarune/:categoria" element={<Category />} />
            <Route path="/Deltarune/:categoria/:articulo" element={<Article />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

reportWebVitals();
