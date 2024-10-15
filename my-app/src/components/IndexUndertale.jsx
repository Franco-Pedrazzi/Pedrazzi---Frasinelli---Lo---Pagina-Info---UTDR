import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { db } from '../DataBase';
import { doc, getDoc } from "firebase/firestore";

import titulo from '../files/Images/Undertale titulo.png';
import deltarune_logo from '../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../files/Images/Annoying dog.png';
import quit from '../files/Images/Quit.png'
import loading from '../files/Images/Annoying_Dog_overworld_sleeping.webp';
import intro from '../files/Images/undertale_intro.mp4'

function IndexUndertale() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);
  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData()
  }, []);

  return (
    <div>
      <nav>
        <Link to='http://localhost:3000' className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Annoying_dog_bg} alt="Annoying_dog_bg" className='icon_bg' />
          <img src={Annoying_dog} className='button-img' style={{ position: "relative", left: "-33%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Inicio</p>
        </Link>
        <Link to="http://localhost:3000/Deltarune" className='Especial_button' style={{ display: "flex" }}>
          <img src={deltarune_logo_bg} alt="Deltarune logo background" className='icon_bg' />
          <img src={deltarune_logo} className='button-img' style={{ position: "relative", left: "-29%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Deltarune</p>
        </Link>
      </nav>
      <center>
        <div className='content'>

          <br />
          {introduccion ? (
            <div>
              <img src={titulo} alt="Titulo" className='titulo' />
              <p>by Toby Fox</p>
            </div>
          ) : (
            <div>
              <video onEnded={() => setIntroduccion(true)} autoPlay style={{ maxWidth: "50%", maxHeight: "30%", minWidth: "50%", miHeight: "30%" }} src={intro}></video>
              <div onClick={() => setIntroduccion(true)} ><img className='button' src={quit}></img></div>
            </div>

          )}
          {docData ? (
            <div>
              {introduccion && <h3>{docData["Introducción"]}</h3>}

            </div>
          ) : (
            <div>
              {introduccion && <img src={loading} alt="Loading..." />}
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default IndexUndertale;