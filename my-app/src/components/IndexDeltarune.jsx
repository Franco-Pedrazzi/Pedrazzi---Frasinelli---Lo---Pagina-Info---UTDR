import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TitleLogo from "../files/Images/deltarune-title-logo.png";
import CyberCity from "../files/Images/cyber_city.gif";
import ChapterIcon from "../files/Images/ch3_icon.png";
import MainBTN from "../files/Images/mainBTN.png";
import MainBTN2 from "../files/Images/mainBTN2.png";
import deltaruneBTN from "../files/Images/deltaruneBTN.png"
import deltaruneBTN2 from "../files/Images/deltaruneBTN2.png"
import undertaleBTN from "../files/Images/undertaleBTN.png"
import undertaleBTN2 from "../files/Images/undertaleBTN2.png"

function IndexDeltarune() {

  const [chapters, setChapters] = useState([
    { index: 1, name: "Personajes", image: ChapterIcon }
  ]);

  return (
    <body id="deltarune" style={{ background: "transparent" }}>

      <section id="buttons" style={{  }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="http://localhost:3000">
            <img 
              src={MainBTN}
              style={{width:"60px"}}
              onMouseEnter={(e) => { e.currentTarget.src = MainBTN2 }}
              onMouseLeave={(e) => { e.currentTarget.src = MainBTN }}
            />
            </Link>
          </li>
          <li>
            <Link to="http://localhost:3000/Deltarune">
            <img
              src={deltaruneBTN}
              style={{width:"60px"}}
              onMouseEnter={(e) => { e.currentTarget.src = deltaruneBTN2 }}
              onMouseLeave={(e) => { e.currentTarget.src = deltaruneBTN }}
            />
            </Link>
          </li>
          <li>
            <Link to="http://localhost:3000/Undertale">
            <img
              src={undertaleBTN}
              style={{width:"60px"}}
              onMouseEnter={(e) => { e.currentTarget.src = undertaleBTN2 }}
              onMouseLeave={(e) => { e.currentTarget.src = undertaleBTN }}
            />
            </Link>
          </li>
        </ul>

      </section>

      <header>
        <center>
          <img src={TitleLogo} style={{ maxWidth: "700px", margin: "20px" }} className="logo" />
        </center>
      </header>

      <main>
        <center>

          <section style={{ maxWidth: "600px", border: "4px solid rgb(0, 192, 0)" }}>
            <center >
              <img src={CyberCity} />
              <h1 className="title">¿QUE ES?</h1>
              <p>Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distino por sus acciones. En su mayoría.
              </p>
            </center>
          </section>

          <section style={{ maxWidth: "800px", border: "4px solid rgb(255, 255, 255)" }}>
            <center>
              <h1 className="title" style={{ fontSize: "50px" }}>SELECCIONA EL CAPITULO</h1>

              {chapters.map(chapter => (<ul style={{ listStyleType: "none", listStyle: "none", display: "block" }}>
                <a>
                  <li style={{ display: "inline", marginRight: "10px", marginLeft: "20px", float: "left" }} >Chapter {chapter.index}</li>
                  <li style={{ display: "inline", marginRight: "10px", marginLeft: "20px" }} >{chapter.name}</li>
                  <li style={{ display: "inline", marginRight: "10px", marginLeft: "20px", float: "right" }} >
                    <img src={chapter.image} style={{ width: "100px" }} />
                  </li>
                </a>
              </ul>))}

            </center>
          </section>

        </center>
      </main>

      <dr-background />

    </body>
  );
}

export default IndexDeltarune;
