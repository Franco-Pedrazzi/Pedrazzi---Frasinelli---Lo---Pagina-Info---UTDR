import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexUndertale from './components/IndexUndertale.jsx';
import IndexDeltarune from './components/IndexDeltarune.jsx';
import Footer from './components/Footer.jsx';
import Mundo from './components/undertale/Mundo.jsx'
import Curiosidades from './components/undertale/Curiosidades.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/Undertale" element={<IndexUndertale />} />
            <Route path="/Undertale/:categoria" element={<Mundo />} />
            <Route path="/Undertale/:categoria" element={<Curiosidades />} />
            <Route path="/Undertale/:categoria/:articulo/*" element={<Mundo />} />

            <Route path="/Deltarune" element={<IndexDeltarune />} />
            
        </Routes>
    <Footer />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
