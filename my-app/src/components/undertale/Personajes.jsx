import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
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
import { db } from '../../DataBase';
const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {
  const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
  acc[imageName] = images(image);
  return acc;
}, {});

const characters = [
  { name: "Napstablook", image: imagenes["napstablook"] },
  { name: "Flowey", image: imagenes["Flowey"] },
  { name: "Toriel", image: imagenes["pelea_toriel"] },
  { name: "Papyrus", image: imagenes["durante_pelea_con_Papyrus"] },
  { name: "Undyne", image: imagenes["undyne"] },
  { name: "Alphys", image: imagenes["Alphys_grande"] },
  { name: "Muffet", image: imagenes["Muffet"] },
  { name: "Mettaton", image: imagenes["Mettaton_batalla"] },
  { name: "Sans", image: imagenes["Sans_en_pelea"] },
  { name: "Agore", image: imagenes["Agore"] },
  { name: "Froggit", image: imagenes["Froggit"] },
  { name: "Whimsun", image: imagenes["Whimsun"] },
  { name: "Moldsmal", image: imagenes["moldsmal"] },
  { name: "Migosp", image: imagenes["Migosp_wiht_other"] },
  { name: "Vegetoid", image: imagenes["Vegetoid"] },
  { name: "Loox", image: imagenes["Loox"] },
  { name: "Snoedrate", image: imagenes["Snoedrate"] },
  { name: "Icecap", image: imagenes["Icecap"] },
  { name: "Jerry", image: imagenes["Jerry"] },
  { name: "Dogami & Dogguaresa", image: imagenes["Dogami_&_Dogguaresa"] },
  { name: "Greater Dog", image: imagenes["Greater Dog"] },
  { name: "Gyftrot", image: imagenes["Gyftrot"] },
  { name: "Lesser Dog", image: imagenes["lesser_dog"] },
  { name: "Aaron", image: imagenes["Aaron"] },
  { name: "Moldbugg", image: imagenes["moldbugg"] },
  { name: "Woshua", image: imagenes["Woshua"] },
  { name: "Shyren", image: imagenes["Shyren"] },
  { name: "Temmi", image: imagenes["temmi"] },
  { name: "Vulkin", image: imagenes["Vulkin"] },
  { name: "Tsunderplane", image: imagenes["tsunderplane"] },
  { name: "Pyrope", image: imagenes["pyrope"] },
  { name: "Guardias Reales", image: imagenes["Guardias_reales"] },
  { name: "Madjick", image: imagenes["Madjick"] },
  { name: "Knight Knight", image: imagenes["Knight Knight"] },
  { name: "Final Froggit", image: imagenes["Final_Froggit"] },
  { name: "Whimsalot", image: imagenes["Whimsalot"] },
  { name: "Astigmatism", image: imagenes["Astigmatism"] },
  { name: "MemoryHead", image: imagenes["amalgama_1"] },
  { name: "Snowdrake's Mother", image: imagenes["amalgama_2"] },
  { name: "Reaper Bird", image: imagenes["amalgama_3"] },
  { name: "Lemon Bread", image: imagenes["amalgama_4"] },
  { name: "Endogeny", image: imagenes["amalgama_5"] },
];
function Personajes() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);
  const url = useParams().articulo;
  console.log(useParams());
  const [data, setData] = useState([]);


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
      <Link  to="http://localhost:3000/Undertale/Historia" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
        <p className='button_text' style={{fontSizeAdjust:"50px"}}>H</p>
          <p className='button_text'>Historia</p>
        </Link >
        <Link to="http://localhost:3000/Undertale/Objetos" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={undertale_Item_Logo} style={{ width: "50px", height: "50px" }} className='button-img' />
          <p className='button_text'>Objetos</p>
        </Link >
        <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Undertale_logo} className='button-img' />
          <p className='button_text'>Undertale</p>
        </Link >
      </nav>

      <center>

          <h2>Personajes</h2>
          {characters.map((character) => (
  <Link to={`http://localhost:3000/Undertale/Personajes/${character.name.replace(/ /g, '_')}`} key={character.name}>
    <img src={character.image} alt={character.name} />
  </Link>
))}
        

      </center>
    </div>
  );
}

export default Personajes;