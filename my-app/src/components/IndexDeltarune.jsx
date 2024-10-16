import React, { useState, useEffect } from "react";

import TitleLogo from "../files/Images/deltarune-title-logo.png";
import CyberCity from "../files/Images/cyber_city.gif";

function IndexDeltarune() {
  return (
    <body id="deltarune">
      <dr-background />
      <header>
        <center>
          <img src={TitleLogo} style={{ maxWidth: "700px", margin: "20px" }} className="logo" />
        </center>
      </header>
      <main style={{display:"inline-block", padding: "2rem 2rem"}}>
        <section style={{ float:"left" }}>
          <center >
            <img src={CyberCity} />
            <h1 className="title">Que es?</h1>
            <p>Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distino por sus acciones. En su mayoría.
            </p>
          </center>
        </section>
        <section style={{ float:"right" }}>
          <center>
            <img src={CyberCity} />
            <h1 className="title">Que es?</h1>
            <p>Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distino por sus acciones. En su mayoría.
            </p>
          </center>
        </section>
      </main>
      <footer></footer>
    </body>
  );
}

export default IndexDeltarune;
