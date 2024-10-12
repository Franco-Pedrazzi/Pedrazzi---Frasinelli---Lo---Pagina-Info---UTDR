import React, { useState, useEffect } from 'react';
import '../index.css';
import titulo from '../files/Images/Undertale titulo.png';
import deltarune_logo from '../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../files/Images/Annoying dog.png';
import loading from '../files/Images/Annoying_Dog_overworld_sleeping.webp';
import { db } from '../DataBase'; 
import { doc, getDoc } from "firebase/firestore"; 

function IndexUndertale () {
  const [docData, setDocData] = useState(null);

  useEffect(async () => {
      try {
        const docRef = doc(db, 'Undertale', 'UT'); 
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocData(docSnap.data());
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
  }, []); 

  return (
    <div>
      <nav>
        <a href='http://localhost:3000' className='Especial_button' style={{display:"flex", paddingRight: "45px"}}>
        <img src={Annoying_dog_bg} alt="Annoying_dog_bg" />
        <img src={Annoying_dog} className='button-img' style={{position:"relative",left:"-31%"}} />
          <p className='button_text'  style={{position:"relative",left:"-15%"}}>Inicio</p>
        </a>
        <div className='Especial_button' style={{display:"flex"}}>
          <img src={deltarune_logo_bg} alt="Deltarune logo background" />
          <img src={deltarune_logo} className='button-img' style={{position:"relative",left:"-25%"}} />
          <p className='button_text'  style={{position:"relative",left:"-15%"}}>Deltarune</p>
        </div>
      </nav>
      <center>
        <div className='content'> 
          <img src={titulo} alt="Titulo" />
          <p>by Toby Fox</p>
          {docData ? (
            <div>
              <p>{docData["Introducción"]}</p>
            </div>
          ) : (
            <img src={loading} alt="Loading..." />
          )}
        </div>
      </center>
    </div>
  );
}

export default IndexUndertale;