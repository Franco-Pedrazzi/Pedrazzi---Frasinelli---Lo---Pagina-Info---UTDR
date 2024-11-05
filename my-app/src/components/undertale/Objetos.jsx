import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import titulo from '../../files/Images/Undertale titulo.png';
import deltarune_logo from '../../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../../files/Images/Annoying dog.png';
import undertale_Item_Logo from '../../files/Images/undertale_item_logo.png';
import Undertale_logo from '../../files/Images/Undertale-logo.png';
import './Undertale.css';
import { db } from '../../DataBase';
import { doc, getDoc } from "firebase/firestore";
import save_point from '../../files/Images/save point.png'
const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {
  const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
  acc[imageName] = images(image);
  return acc;
}, {});

function Obgetos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "Undertale", "objetos");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data()); // Store the entire data object
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderItems = (category) => (
    data[category]?.map((obj) => <div><Link to={`http://localhost:3000/Undertale/Objeto/${category}/${obj.nombre.replace(/ /g, '_')}`} key={obj.nombre}>{obj.nombre}</Link> <br /></div>) || null

  );

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
        <Link to="http://localhost:3000/Undertale/Historia" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <p className='button_text' style={{ fontSizeAdjust: "50px" }}>H</p>
          <p className='button_text'>Historia</p>
        </Link >
        <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Undertale_logo} className='button-img' />
          <p className='button_text'>Undertale</p>
        </Link>
        <Link to="http://localhost:3000/Undertale/Personajes" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={save_point} className='button-img' style={{ width: "50px", height: "50px" }} />
          <p className='button_text'>Personajes</p>
        </Link >
      </nav>

      <center>
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          data && (
            <div style={{ maxWidth: "600px", border: "4px solid rgb(255, 255, 255)", marginTop: "20px" }}>
              <h2><justicia>Armaduras</justicia></h2>
              {renderItems("armaduras")}
              <h2><justicia>Armas</justicia></h2>
              {renderItems("armas")}
              <h2><justicia>Objetos De Curacion</justicia></h2>
              {renderItems("objetosDeCuracion")}
              <h2><justicia>Objetos Especiales</justicia></h2>
              {renderItems("objetosEspeciales")}
            </div>
          )
        )}
      </center>
    </div>
  );
}

export default Obgetos;