import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../DataBase';
import './Undertale.css';
import titulo from '../../files/Images/Undertale titulo.png';
import deltarune_logo from '../../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../../files/Images/Annoying dog.png';
import undertale_Item_Logo from '../../files/Images/undertale_item_logo.png';
import Undertale_logo from '../../files/Images/Undertale-logo.png';
import save_point from '../../files/Images/save point.png';
import quit from '../../files/Images/Quit.png'
const images = require.context('../../files/Images/objetos', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {
    const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
    acc[imageName] = images(image);
    return acc;
}, {});
function Objeto() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { articulo, categoria } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "Undertale", "objetos");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    // Verificamos si la categoría existe y es un arreglo
                    if (Array.isArray(data[categoria])) {
                        // Buscamos el objeto en la categoría especificada
                        const objeto = data[categoria].find(obj => {
                            const objNombre = obj.nombre.toLowerCase().replace(/ /g, '_'); // Normalizamos el nombre
                            return objNombre === articulo.toLowerCase(); // Comparamos con el artículo
                        });

                        if (objeto) {
                            setData(objeto); // Si encontramos el objeto, lo establecemos
                        } else {
                            setError(`No se encontró el objeto: ${articulo}`);
                        }
                    } else {
                        setError(`La propiedad '${categoria}' no es un arreglo o no existe`);
                    }
                } else {
                    setError("No se encontró el documento");
                }
            } catch (err) {
                console.error("Error al obtener el documento:", err);
                setError("Error al obtener el documento. Inténtalo de nuevo más tarde.");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [articulo, categoria]); // Añadido 'categoria' como dependencia

    return (
        <div>
            <nav>
                <Link to='/' className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
                    <img src={Annoying_dog_bg} alt="Annoying dog background" className='icon_bg' />
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
                    <p className='button_text' style={{ fontSizeAdjust: "50px" }}>H</p>
                    <p className='button_text'>Historia</p>
                </Link >
                <Link to="/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
                    <img src={Undertale_logo} className='button-img' />
                    <p className='button_text'>Undertale</p>
                </Link>
                <Link to="/Undertale/Personajes" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
                    <img src={save_point} className='button-img' style={{ width: "50px", height: "50px" }} />
                    <p className='button_text'>Personajes</p>
                </Link >
            </nav>

            <center>
                {loading ? (
                    <h3>Cargando...</h3>
                ) : error ? (
                    <h3 style={{ color: 'red' }}>{error}</h3>
                ) : (
                    data && (
                        <div style={{ maxWidth: "600px", border: "4px solid rgb(255, 255, 255)", marginTop: "20px" }}>
                            <h2 className="title">"{data.nombre}"</h2>
                            {data.image && <img src={data.image} alt={`Imagen de ${data.nombre}`} />}
                            <h3>{data.descripcion}</h3>

                        </div>
                    )
                )}
                <Link to="http://localhost:3000/Undertale/Objetos"><img className='button' src={quit}></img></Link>
            </center>
        </div>
    );
}

export default Objeto;