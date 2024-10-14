import React, { useState, useEffect } from 'react';
import './index.css';
import titulo from './files/Images/Titulo.png';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importa Firestore
import deltarune_logo from './files/Images/Deltarune-logo.png'
import deltarune_logo_bg from './files/Images/Deltarune-logo-background.png'
import Undertale_logo from './files/Images/Undertale-logo.png'
import loading from './files/Images/Annoying_Dog_overworld_sleeping.webp'
import { db } from './DataBase';
import { Link } from "react-router-dom";
import IndexUndertale from './components/IndexUndertale.jsx'
function App () {
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    async function fetchData() {
    try {
      const docRef = doc(db, 'Annoying dog', 'TB'); 
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDocData(docSnap.data());
      } else {
        console.log("No se encontró el documento");
      }
    } catch (error) {
     
      console.error("Error al obtener el documento:", error);
    }
    }
    fetchData() 
}, []); 

  return (
    <div>
      <nav>

      <Link to='http://localhost:3000/Undertale' className='Especial_button' style={{display:"flex", paddingRight: "45px"}}>
      <img src={Undertale_logo} className='button-img'></img>
      <p className='button_text'>Undertale</p>
      </Link>

      <Link to='http://localhost:3000/Deltarune' className='Especial_button' style={{display:"flex"}}>
          <img src={deltarune_logo_bg} className='icon_bg'></img>
          <img src={deltarune_logo} className='button-img' style={{position:"relative",left:"-31%"}}></img>
          <p className='button_text'  style={{position:"relative",left:"-15%"}}>Deltarune</p>
      </Link>
      </nav>
      <center>
      <div className='content'> 
    
        <img src={titulo} alt="Titulo" className='titulo'  />
        <p>by toby fox</p>
        {docData ? (
          <div>
            <h3>Be careful: {docData["Be careful"]}</h3>
            <h3>OMG: {docData.OMG}</h3>
          </div>
        ) : (
          <img src={loading}></img>
        )}
      
      </div>
      </center>
    </div>
  );
};

export default App;