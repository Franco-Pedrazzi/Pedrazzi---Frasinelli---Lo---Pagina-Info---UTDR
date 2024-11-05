import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importa Firestore
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
import quit from '../../files/Images/Quit.png'
const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {
    const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
    acc[imageName] = images(image);
    return acc;
}, {});

function Personaje() {
    const [data, setData] = useState(null);
    const url = useParams().articulo;

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "Undertale", "Personajes");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const personaje = docSnap.data().characters.find(obj => obj.name.toLowerCase() === url.toLowerCase());
                    if (personaje) {
                        setData(personaje);
                    } else {
                        console.log("No se encontró el personaje");
                    }
                } else {
                    console.log("No se encontró el documento");
                }
            } catch (error) {
                console.error("Error al obtener el documento:", error);
                setData(null);
            }
        }
        fetchData();
    }, [url]);

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
                    <p className='button_text'>Historia</p>
                </Link>
                <Link to="http://localhost:3000/Undertale/Objetos" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
                    <img src={undertale_Item_Logo} style={{ width: "50px", height: "50px" }} className='button-img' />
                    <p className='button_text'>Objetos</p>
                </Link>
                <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
                    <img src={Undertale_logo} className='button-img' />
                    <p className='button_text'>Undertale</p>
                </Link>
            </nav>

            <center>
                {data && (
                    <div style={{ maxWidth: "600px", border: "4px solid rgb(255, 255, 255)", marginTop: "20px" }}>
                        <h2 className="title">"{data.name}"</h2>
                        <img src={data.image} alt={data.name} />
                        <h3>AT {data.stats.attack}</h3>
                        <h3>DF {data.stats.defense}</h3>
                        <h3>{data.description}</h3>
                    </div>
                )}
                <Link to="http://localhost:3000/Undertale/Personajes"><img className='button' src={quit}></img></Link>
            </center>
        </div>
    );
}

export default Personaje;