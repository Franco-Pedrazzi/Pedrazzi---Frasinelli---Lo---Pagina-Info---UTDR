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
// Firebase confi
function App () {
  const [docData, setDocData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Suponiendo que estás obteniendo un documento específico de Firestore
        const docRef = doc(db, 'Annoying dog', 'TB');  // Cambia estos nombres según tu colección y documento
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setDocData(docSnap.data()); // Establece los datos del documento
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    };

    fetchData(); // Llama a la función para obtener los datos
  }, []); // El arreglo vacío asegura que solo se ejecute una vez cuando el componente se monta
  return (
    <div>
      <nav>
      <a href='http://localhost:3000/Undertale' className='Especial_button' style={{display:"flex", paddingRight: "45px"}}><img src={Undertale_logo} className='button-img'></img><p className='button_text'>Undertale</p></a>
        <div className='Especial_button' style={{display:"flex"}}><img src={deltarune_logo_bg}></img><img src={deltarune_logo} className='button-img' style={{position:"relative",left:"-31%"}}></img><p className='button_text'  style={{position:"relative",left:"-15%"}}>Deltarune</p></div>
      </nav>
      <center>
      <div className='content'> 
    
        <img src={titulo} alt="Titulo" />
        <p>by toby fox</p>
        {docData ? (
          <div>
            <p>Be careful: {docData["Be careful"]}</p>
            <p>OMG: {docData.OMG}</p>
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