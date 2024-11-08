import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Favicon from "react-favicon";

import "./index.css";
import titulo from "./files/Images/Titulo.png";
import deltarune_logo from "./files/Images/Deltarune-logo.png";
import deltarune_logo_bg from "./files/Images/Deltarune-logo-background.png";
import Undertale_logo from "./files/Images/Undertale-logo.png";
import sans from "./files/Images/funny-sans.gif";
import dog from "./files/Images/lesser-dog.gif";
import temmie from "./files/Images/hoi-temmie.gif";
import frisk from "./files/Images/frisk-undertale.gif";
import kris from "./files/Images/kris.gif";


function App() {
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    // Crear un script de forma dinámica para cargar el script de Tenor
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Favicon url="https://undertale.com/favicon.ico" />

      <nav>
        <Link to="http://localhost:3000/Undertale" className="Especial_button" style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Undertale_logo} className="button-img"></img>
          <p className="button_text">Undertale</p>
        </Link>

        <Link to="http://localhost:3000/Deltarune" className="Especial_button" style={{ display: "flex" }}>
          <img src={deltarune_logo_bg} className="icon_bg"></img>
          <img src={deltarune_logo} className="button-img" style={{ position: "relative", left: "-31%" }}></img>
          <p className="button_text" style={{ position: "relative", left: "-15%" }}>
            Deltarune
          </p>
        </Link>
      </nav>

      <center>
        <div className="content">
          <img src={titulo} alt="Titulo" className="titulo" />
          <p>by toby fox</p>

          <div>
            <h1 className="multicolortext">Toby Fox</h1>
            <h3><span class="multicolortext">Robert Fox</span> (conocido profesionalmente como el famoso <span class="multicolortext">Toby Fox</span>) es un creador de videojuegos y compositor de música, es conocido por ser el creador de <span class="multicolortext">Undertale</span>.</h3>
            <h2>Historia de su desarrollo y composición en videojuegos</h2>
            <h3>Empezó siendo parte de la comunidad <span class="multicolortext">Starman.net</span> del juego <span class="multicolortext">EarthBound</span>, e hizo mods del juego con <span class="multicolortext">RPG Maker</span> (aplicación que permite al usuario crear sus propios videojuegos de rol). Uno de los más destacados fue el <span class="multicolortext">Halloween Hack</span>, que se trata de cambiar el estilo de juego a ser de lo normal a terrorífico. Después empezó a enfocarse en sus propias ideas originales, que culminaron en la creación de <span class="multicolortext">Undertale</span> con el cambio de herramienta de <span class="multicolortext">RPG Maker</span> a <span class="multicolortext">GameMaker Studio</span> (plataforma basada en un lenguaje de programación interpretado y un kit de desarrollo de software para desarrollar videojuegos) para tener más libertad y control sobre los aspectos técnicos de su proyecto. Aunque él quería hacer <span class="multicolortext">Deltarune</span>, hizo primero <span class="multicolortext">Undertale</span> para descifrar cómo hacer un mejor juego. Término <span class="multicolortext">Undertale</span> con gran éxito y pudo empezar con el desarrollo de su querido <span class="multicolortext">Deltarune</span>. Hasta ahora <span class="multicolortext">Toby</span> sigue usando <span class="multicolortext">GameMaker</span> para el juego que sigue en desarrollo, <span class="multicolortext">Deltarune</span>.
            </h3>

            <h3>
              Mientras tanto <span class="multicolortext">Toby</span> también hizo composición para otros juegos como <span class="multicolortext">Super Smash Bros</span> que fueron añadido su música
              <span class="multicolortext"> Megalovania </span> y el traje de <span class="multicolortext">Sans</span> para <span class="multicolortext">Mii</span>, en <span class="multicolortext">Pokémon Sword & Shield</span> compuso
              la canción <span class="multicolortext">Battle Tower</span>, para <span class="multicolortext">Little Town Hero</span> algunas de las pistas más destacadas del juego y
              para <span class="multicolortext">OMORI</span> contribuyó con una pista musical para el juego, etc.
            </h3>
            <img src={sans} style={{ position: 'absolute', top: '100px', height: "200px", display: "block"}}  ></img>
            <img src={dog} style={{ position: 'absolute', top: '80px', height: "1000px", display: "block", right: '0px'}} ></img>
            <img src={temmie} style={{ position: 'absolute', top: '380px', height: "200px", display: "block"}}  ></img>
            <img src={frisk} style={{ position: 'absolute', top: '620px',height: "200px", display: "block"}} ></img>
            <img src={kris} style={{ position: 'absolute', top: '870px', height: "200px", display: "block"}} ></img>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
