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
const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Undertale" element={<IndexUndertale />} />
            <Route path="/Undertale/:categoria" element={<IndexUndertale />} />
            <Route path="/Undertale/:categoria/:articulo" element={<IndexUndertale />} />

            <Route path="/Deltarune" element={<IndexDeltarune />} />
            <Route path="/Deltarune/:categoria" element={<Category />} />
            <Route path="/Deltarune/:categoria/:articulo" element={<Article />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
