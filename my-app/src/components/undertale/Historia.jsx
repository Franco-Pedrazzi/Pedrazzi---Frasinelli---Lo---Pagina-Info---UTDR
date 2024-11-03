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
import sala_1 from '../../files/Images/sala_1_undertale.png'
import { Routes, Route, useParams } from 'react-router-dom';
import './Undertale.css'
import Curiosidades from './Curiosidades'
function Mundo() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);
  const [ruta, setRuta] = useState("Neutral/Pasifista")
  let { userId } = useParams();
  console.log(userId)
  function ChangeMode() {
    if (ruta == "Genocida") {
      setRuta("Neutral/Pasifista")
    }
    else {
      setRuta("Genocida")
    }
  }
  return (
    <div>
      <center>
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
          <Link to="http://localhost:3000/Undertale/Curiosidades" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={save_point} className='button-img' style={{ width: "50px", height: "50px" }} />
            <p className='button_text'>Curiosidades</p>
          </Link >
        </nav>

        <input class="change_Ruote" onChange={() => ChangeMode()} type="checkbox" />

        <img src={titulo} alt="Titulo" className='titulo' />
        <p>by Toby Fox</p>
        <h2>Mont Ebott</h2>
        <br />
        <h2>Ruinas</h2>
        <br />
        <h3>Las Ruinas son una zona construida de color morado, conocida por sus caminos, largos pasillos y paredes de piedra. Hay muchos acertijos y trampas dentro de estos, así como un exceso de hojas rojas repartidas por el suelo y lianas verdes en las paredes.</h3>
        <h3>Después de que los monstruos fueron desterrados de la superficie por los humanos, los monstruos hicieron sus primeras residencias en lo que ahora son las Ruinas.
          Más tarde, los monstruos comenzaron a regresar a la Barrera, donde establecieron planes para crear su nueva capital.
        </h3>
        <img src={sala_1} style={{ width: "400px", height: "200px" }} />
        <h3>esta habitación sería en la que caímos siendo amortiguados por esas <justicia>flores amarillas</justicia></h3>
        <br />
        <h3>apenas cambiamos de habitación</h3>
        <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
        <h3>conoceremos a Flowey la flor</h3>
        <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
        <h3>Flowey nos introducirá el tema del alma pero nos tratara de <determinacion>atacar</determinacion> a la mínima oportunidad y se reirá de nosotros, diciendo que en este mundo es <determinacion>matar o morir</determinacion></h3>
        <h2>y sin poder hacer nada </h2>
        <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
        <br />
        <h3>seremos salvados por toriel, la guardiana de las ruinas
        </h3>
        <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
        <h3>toriel nos acompañara al inicio de las ruinas mostrándonos cómo hacer los puzzles y nos enseñaría con un muñeco que no si o si debes <determinacion>matar</determinacion> a los monstruos si <justicia>hablas</justicia> con ellos </h3>
        <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
        <h3>en un punto toriel nos dirá que le esperemos ahí porque debe hacer algo y nos dará un celular para comunicarnos con ella </h3>
        <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
        <h3> Si esperamos en la habitación donde Toriel nos dio el teléfono primero nos llamará diciendo que necesita 5 minutos más. luego cada 5 minutos se presenta una llamada nueva que consiste en Toriel siendo atacada por un perro, además de su lucha por recuperar su teléfono.
        </h3>

        <h3> pero si no le obedecemos podremos seguir con la historia encontrándonos con monstruos y puzzles, además Toriel nos llamara para preguntarnos cosas como si salimos de la habitación, que es peligroso salir solo, que cual nos gusta más canela o caramelo, etc
        </h3>
        {ruta=="Genocida"?(
          <div>
            <h3>y si nos ponemos a matar monstruos hasta que ya no digan “PERO NO VINO NADIE” iniciaremos con la ruta genocida    </h3>
            <img src={Determination_soul} style={{ width: "200px", height: "200px" }} />
          </div>
        ):(
          <div></div>
        )
        }
      </center>
    </div>
  );
}

export default Mundo;