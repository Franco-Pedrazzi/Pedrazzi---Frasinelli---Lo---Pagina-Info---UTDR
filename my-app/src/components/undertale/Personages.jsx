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
const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {

  const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
  acc[imageName] = images(image);
  return acc;
}, {});

function Personages() {
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
        <Link to="/Undertale/obgetos" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={save_point} style={{width: "50px", height: "50px"}} className='button-img'/>
          <p className='button_text'>Objetos</p>
        </Link>
        <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={Undertale_logo} className='button-img' />
            <p className='button_text'>Undertale</p>
          </Link >
      </nav>
      
      <center>
      <h2>Jefes</h2>
      <img src={imagenes["napstablook"]} className='monsters' />
      <img src={imagenes["pelea_toriel"]} className='monsters' />
      <img src={imagenes["durante_pelea_con_Papyrus"]} className='monsters' />
      <img src={imagenes["undyne"]} className='monsters' style={{ position: "relative", left: "-2.5%" }} />
      <img src={imagenes["Alphys_grande"]} className='monsters' />
      <img src={imagenes["Muffet"]} className='monsters' />
      <img src={imagenes["Mettaton_batalla"]} className='monsters' />
      <img src={imagenes["Sans_en_pelea"]} className='monsters' />
      <img src={imagenes["Agore"]} className='Frames' />
        <br />
        <h2>Monstruos</h2>
      <img src={imagenes["Froggit"]} className='monsters' />
          <img src={imagenes["Whimsun"]} className='monsters' />
          <img src={imagenes["moldsmal"]} className='monsters' />
          <img src={imagenes["Migosp_wiht_other"]} className='monsters' />
          <img src={imagenes["Vegetoid"]} className='monsters' />
          <img src={imagenes["Loox"]} className='monsters' />
          <img src={imagenes["Snoedrate"]} className='monsters' />
            <img src={imagenes["Icecap"]} className='monsters' />
            <img src={imagenes["Jerry"]} className='monsters' />
            <img src={imagenes["Dogami_&_Dogguaresa"]} className='monsters' />
            <img src={imagenes["Greater Dog"]} className='monsters' />
            <img src={imagenes["Gyftrot"]} className='monsters' />
            <img src={imagenes["lesser_dog"]} className='monsters' />
            <img src={imagenes["Aaron"]} className='monsters' />
            <img src={imagenes["moldsmal"]} className='monsters' />
            <img src={imagenes["moldbugg"]} className='monsters' />
            <img src={imagenes["Woshua"]} className='monsters' />
            <img src={imagenes["Shyren"]} className='monsters' />
            <img src={imagenes["temmi"]} className='monsters' />
            <img src={imagenes["Vulkin"]} className='monsters' />
            <img src={imagenes["tsunderplane"]} className='monsters' />
            <img src={imagenes["pyrope"]} className='monsters' />
            <img src={imagenes["Guardias_reales"]} className='monsters' />
            <img src={imagenes["Madjick"]} className='monsters' />
            <img src={imagenes["Knight Knight"]} className='monsters' />
            <img src={imagenes["Final_Froggit"]} className='monsters' />
            <img src={imagenes["Whimsalot"]} className='monsters' />
            <img src={imagenes["Astigmatism"]} className='monsters' />
            <img src={imagenes["amalgama_1"]} className='monsters' />       
              <img src={imagenes["amalgama_2"]} className='monsters' />       
              <img src={imagenes["amalgama_3"]} className='monsters' />       
              <img src={imagenes["amalgama_4"]} className='monsters' />       
              <img src={imagenes["amalgama_5"]} className='monsters' />   
      </center>
    </div>
  );
}

export default Personages;