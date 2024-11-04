import React, { useState } from 'react';
import { Link } from "react-router-dom";

import titulo from '../../files/Images/Undertale titulo.png';
import deltarune_logo from '../../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../../files/Images/Annoying dog.png';
import Determination_soul from '../../files/Images/detemination soul.png';
import undertale_Map_Logo from '../../files/Images/map_icon.png';
import Undertale_logo from '../../files/Images/Undertale-logo.png';
import save_point from '../../files/Images/save point.png';
import undertale_Item_Logo from '../../files/Images/undertale_item_logo.png';
import undertale_switch from '../../files/Images/undertale switch.png';
import { Routes, Route, useParams } from 'react-router-dom';
import './Undertale.css';

const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {
  const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
  acc[imageName] = images(image);
  return acc;
}, {});

const characters = [
  { name: "Napstablook", image: imagenes["napstablook"], route: "/Undertale/napstablook" },
  { name: "Toriel", image: imagenes["pelea_toriel"], route: "/Undertale/toriel" },
  { name: "Papyrus", image: imagenes["durante_pelea_con_Papyrus"], route: "/Undertale/papyrus" },
  { name: "Undyne", image: imagenes["undyne"], route: "/Undertale/undyne" },
  { name: "Alphys", image: imagenes["Alphys_grande"], route: "/Undertale/alphys" },
  { name: "Muffet", image: imagenes["Muffet"], route: "/Undertale/muffet" },
  { name: "Mettaton", image: imagenes["Mettaton_batalla"], route: "/Undertale/mettaton" },
  { name: "Sans", image: imagenes["Sans_en_pelea"], route: "/Undertale/sans" },
  { name: "Agore", image: imagenes["Agore"], route: "/Undertale/agore" },
  { name: "Froggit", image: imagenes["Froggit"], route: "/Undertale/froggit" },
  { name: "Whimsun", image: imagenes["Whimsun"], route: "/Undertale/whimsun" },
  { name: "Moldsmal", image: imagenes["moldsmal"], route: "/Undertale/moldsmal" },
  { name: "Migosp", image: imagenes["Migosp_wiht_other"], route: "/Undertale/migosp" },
  { name: "Vegetoid", image: imagenes["Vegetoid"], route: "/Undertale/vegetoid" },
  { name: "Loox", image: imagenes["Loox"], route: "/Undertale/loox" },
  { name: "Snoedrate", image: imagenes["Snoedrate"], route: "/Undertale/snoedrate" },
  { name: "Icecap", image: imagenes["Icecap"], route: "/Undertale/icecap" },
  { name: "Jerry", image: imagenes["Jerry"], route: "/Undertale/jerry" },
  { name: "Dogami & Dogguaresa", image: imagenes["Dogami_&_Dogguaresa"], route: "/Undertale/dogami" },
  { name: "Greater Dog", image: imagenes["Greater Dog"], route: "/Undertale/greaterdog" },
  { name: "Gyftrot", image: imagenes["Gyftrot"], route: "/Undertale/gyftrot" },
  { name: "Lesser Dog", image: imagenes["lesser_dog"], route: "/Undertale/lesserdog" },
  { name: "Aaron", image: imagenes["Aaron"], route: "/Undertale/aaron" },
  { name: "Moldbugg", image: imagenes["moldbugg"], route: "/Undertale/moldbugg" },
  { name: "Woshua", image: imagenes["Woshua"], route: "/Undertale/woshua" },
  { name: "Shyren", image: imagenes["Shyren"], route: "/Undertale/shyren" },
  { name: "Temmi", image: imagenes["temmi"], route: "/Undertale/temmi" },
  { name: "Vulkin", image: imagenes["Vulkin"], route: "/Undertale/vulkin" },
  { name: "Tsunderplane", image: imagenes["tsunderplane"], route: "/Undertale/tsunderplane" },
  { name: "Pyrope", image: imagenes["pyrope"], route: "/Undertale/pyrope" },
  { name: "Guardias Reales", image: imagenes["Guardias_reales"], route: "/Undertale/guardias" },
  { name: "Madjick", image: imagenes["Madjick"], route: "/Undertale/madjick" },
  { name: "Knight Knight", image: imagenes["Knight Knight"], route: "/Undertale/knightknight" },
  { name: "Final Froggit", image: imagenes["Final_Froggit"], route: "/Undertale/finalfroggit" },
  { name: "Whimsalot", image: imagenes["Whimsalot"], route: "/Undertale/whimsalot" },
  { name: "Astigmatism", image: imagenes["Astigmatism"], route: "/Undertale/astigmatism" },
  { name: "Amalgama 1", image: imagenes["amalgama_1"], route: "/Undertale/amalgama1" },
  { name: "Amalgama 2", image: imagenes["amalgama_2"], route: "/Undertale/amalgama2" },
  { name: "Amalgama 3", image: imagenes["amalgama_3"], route: "/Undertale/amalgama3" },
  { name: "Amalgama 4", image: imagenes["amalgama_4"], route: "/Undertale/amalgama4" },
  { name: "Amalgama 5", image: imagenes["amalgama_5"], route: "/Undertale/amalgama5" },
];

function Personages() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);

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
        <nav>
          <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={Undertale_logo} className='button-img' />
            <p className='button_text'>Undertale</p>
          </Link >
          <Link to="http://localhost:3000/Undertale/obgetos" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={undertale_Item_Logo} style={{ width: "50px", height: "50px" }} className='button-img' />
            <p className='button_text'>obgetos</p>
          </Link >
          <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={Undertale_logo} className='button-img' />
            <p className='button_text'>Undertale</p>
          </Link >
        </nav>

      <center>
        <h2>Personajes</h2>
        {characters.map((character, index) => (
          <Link
            key={index}
            to={character.route}

            onMouseEnter={(e) => {
              e.currentTarget.children[1].style.WebkitFilter = "sepia(175%) saturate(99999999%) ";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.children[1].style.WebkitFilter = "none";
            }}
          >
            <span >{character.name}</span>
            <img src={character.image} />
          </Link>
        ))}
      </center>
    </div>
  );
}

export default Personages;