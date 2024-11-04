import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import titulo from '../../files/Images/Undertale titulo.png';
import deltarune_logo from '../../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../../files/Images/Annoying dog.png';
import Determination_soul from '../../files/Images/detemination soul.png'
import undertale_Map_Logo from '../../files/Images/map_icon.png'
import Undertale_logo from '../../files/Images/Undertale-logo.png'
import save_point from '../../files/Images/save point.png'
import undertale_Item_Logo from '../../files/Images/undertale_item_logo.png'
import undertale_switch from '../../files/Images/undertale switch.png'
import { Routes, Route, useParams } from 'react-router-dom';
import './Undertale.css'
import { db } from '../../DataBase';
import { doc, setDoc } from "firebase/firestore";
const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {

  const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
  acc[imageName] = images(image);
  return acc;
}, {});

function Obgetos() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);
  
  return (
    <div>
      <nav>
        <Link to='/' className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Annoying_dog_bg} alt="Annoying Dog Background" className='icon_bg' />
          <img src={Annoying_dog} className='button-img' style={{ position: "relative", left: "-33%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Inicio</p>
        </Link>
        <Link to="/Deltarune" className='Especial_button' style={{ display: "flex" }}>
          <img src={deltarune_logo_bg} alt="Deltarune logo background" className='icon_bg' />
          <img src={deltarune_logo} className='button-img' style={{ position: "relative", left: "-29%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Deltarune</p>
        </Link>
      </nav>
      
      <nav>
        <Link to="/Undertale/Historia" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <p className='button_text' style={{fontSizeAdjust:"50px"}}>H</p>
          <p className='button_text'>Historia</p>
        </Link>
        <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={Undertale_logo} className='button-img' />
            <p className='button_text'>Undertale</p>
          </Link >
          <Link  to="http://localhost:3000/Undertale/Personages" className='Especial_button' style={{ display: "flex", paddingRight: "45px"  }}>
          <img src={save_point} className='button-img' style={{width: "50px",height: "50px"}}/>
          <p className='button_text'>Personages</p>
        </Link >
      </nav>
      
      <center>
     
      </center>
    </div>
  );
}

export default Obgetos;