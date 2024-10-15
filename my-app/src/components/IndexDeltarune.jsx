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
        <main></main>
        <footer></footer>
      </body>
  );
}

export default IndexDeltarune;
