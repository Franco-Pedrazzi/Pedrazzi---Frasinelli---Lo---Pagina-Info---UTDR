import React, { useState, useEffect } from "react";

import TitleLogo from "../files/Images/deltarune-title-logo.png";

function IndexDeltarune() {
  return (
    <body id="deltarune">
      <header>
        <center>
          <img src={TitleLogo} style={{ maxWidth: "700px", margin: "20px" }} />
        </center>
      </header>
      <main>
        <center>
          <section>
            <p>Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distino por sus acciones. En su mayoría.
            </p>
          </section>
        </center>
      </main>
      <footer></footer>
    </body>
  );
}

export default IndexDeltarune;
