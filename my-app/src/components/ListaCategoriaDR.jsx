import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

function ListaCategoriaDR() {
    const [url, setUrl] = useState(useParams());
    const [catList, setCatList] = useState([
        { name: "CAPITULOS", miniDesc: "a" },
        { name: "PERSONAJES", miniDesc: "b" },
        { name: "JEFES", miniDesc: "c" },
        { name: "MUNDOS", miniDesc: "d" },
        { name: "MECANICAS", miniDesc: "e" }
    ]);
    return (
        <body id="deltarune" style={{ backgroundColor: "black" }}>
            <center>
                <h1>CATEGORIAS</h1>
                {catList.map((cat) => (<>
                    <Link to="">
                        <h3>{cat.name}</h3>
                        <p>{cat.miniDesc}</p>
                    </Link>
                    <hr />
                </>))}
                <p>Toda la informacion proviente de <a href="https://deltarune.fandom.com/es">Wikia Deltarune</a></p>
            </center>
        </body>
    );
}

export default ListaCategoriaDR;