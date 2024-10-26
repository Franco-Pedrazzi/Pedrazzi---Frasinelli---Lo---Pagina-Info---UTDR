import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../DataBase";

import TitleLogo from "../files/Images/deltarune-title-logo.png";
import CyberCity from "../files/Images/cyber_city.gif";
import ChapterIcon from "../files/Images/ch3_icon.png";
import MainBTN from "../files/Images/mainBTN.png";
import MainBTN2 from "../files/Images/mainBTN2.png";
import deltaruneBTN from "../files/Images/deltaruneBTN.png"
import deltaruneBTN2 from "../files/Images/deltaruneBTN2.png"
import undertaleBTN from "../files/Images/undertaleBTN.png"
import undertaleBTN2 from "../files/Images/undertaleBTN2.png"
import MenuSound from "../files/snd_menumove.mp3"

function IndexDeltarune() {

  const [docData, setDocData] = useState(null);
  const [chapters, setChapters] = useState([
    {
      index: 1, name: "Capitulos", image: ChapterIcon, articles: [
        { name: "Capitulo 1", miniDesc: "The Beginning", content: [] },
        { name: "Capitulo 2", miniDesc: "A Cyber's World", content: [] }]
    },
    {
      index: 2, name: "Personajes", image: ChapterIcon, articles: [
        { name: "Kris", miniDesc: "Sólo eres tú.", content: [] },
        { name: "Susie", miniDesc: "No te molestes en responder. Por si aún no te has dado cuenta... Tus decisiones no importan.", content: [] },
        { name: "Ralsei", miniDesc: "¡Espero que podamos ser buenos amigos!", content: [] },
        { name: "Lancer", miniDesc: "¡Soy...! El tipo malo.", content: [] },
        { name: "Noelle", miniDesc: "Este... extraño mundo... esta enorme ciudad... Es tan alocado... como que me hace dar vueltas la cabeza.", content: [] },
        { name: "Berdly", miniDesc: "¡Es LORD Berdly para ustedes simplones!", content: [] }]
    },
    {
      index: 3, name: "Jefes", image: ChapterIcon, articles: [
        { name: "Rey", miniDesc: "Para mi gente, soy un héroe... ¿Para ustedes? ¡¡¡SOY EL TIPO MALO!!!", content: [] },
        { name: "Reina", miniDesc: "Solo Quiero Hacer A Todos Sonreir Y Si Tengo Que Volverme Una Malvada Villana Para Conseguirlo Es Eso Malo?", content: [] },
        { name: "Jevil", miniDesc: "AHORA, AHORA!! QUE LOS JUEGOS COMIENCEN!!", content: [] },
        { name: "Spamton", miniDesc: "DESPUÉS DE TODO, ¡TÚ QUIERES SER UN [Big Shot]! ¡¡EAHAHAHAHAA!!", content: [] }]
    },
    {
      index: 4, name: "Localizaciones", image: ChapterIcon, articles: [
        { name: "Hometown (Mundo de Luz)", miniDesc: "El inicio", content: [] },
        { name: "Mundo(s) Oscuro(s)", miniDesc: "LA OSCURIDAD", content: [] }]
    },
    {
      index: 5, name: "Mecanicas", image: ChapterIcon, articles: [
        { name: "SAVE", miniDesc: "Aveces, la ves parpadeando. Aquella luz que sólo tú puedes ver. Por segunda naturaleza, te acercas y... [Archivo Salvado]", content: [] },
        { name: "ALMA", miniDesc: "Sientes como si tu ALMA brillara.", content: [] },  
        { name: "SURVEY_PROGRAM (Introduccion)", miniDesc: "ESTAS AHI? ESTAMOS CONECTADOS?", content: [] }]
    }
  ]);
  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "Deltarune", "Informacion");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocData(docSnap.data());
          setChapters(docData.categories)
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    }
    async function playSound() {
      let array = document.getElementsByTagName("a");
      for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('mouseenter', () => {
          try {
            const sound = new Audio(MenuSound)
            sound.volume = 0.5;
            sound.play();
          }
          catch (error) {
            console.log(error);
          }
        });
      }
    }
    fetchData();
    playSound();
  }, []);
  /*useEffect(() => {
    async function fetchData() {
      try {
        setDoc(doc(db, "Deltarune", "Informacion"), {
          mainPageData: "Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distinto por sus acciones. En su mayoría.",
          categories: [
            {
              index: 1, name: "Capitulos", image: ChapterIcon, articles: [
                { name: "Capitulo 1", miniDesc: "The Beginning", content: [] },
                { name: "Capitulo 2", miniDesc: "A Cyber's World", content: [] }]
            },
            {
              index: 2, name: "Personajes", image: ChapterIcon, articles: [
                { name: "Kris", miniDesc: "Sólo eres tú.", content: [] },
                { name: "Susie", miniDesc: "No te molestes en responder. Por si aún no te has dado cuenta... Tus decisiones no importan.", content: [] },
                { name: "Ralsei", miniDesc: "¡Espero que podamos ser buenos amigos!", content: [] },
                { name: "Lancer", miniDesc: "¡Soy...! El tipo malo.", content: [] },
                { name: "Noelle", miniDesc: "Este... extraño mundo... esta enorme ciudad... Es tan alocado... como que me hace dar vueltas la cabeza.", content: [] },
                { name: "Berdly", miniDesc: "¡Es LORD Berdly para ustedes simplones!", content: [] }]
            },
            {
              index: 3, name: "Jefes", image: ChapterIcon, articles: [
                { name: "Rey", miniDesc: "Para mi gente, soy un héroe... ¿Para ustedes? ¡¡¡SOY EL TIPO MALO!!!", content: [] },
                { name: "Reina", miniDesc: "Solo Quiero Hacer A Todos Sonreir Y Si Tengo Que Volverme Una Malvada Villana Para Conseguirlo Es Eso Malo?", content: [] },
                { name: "Jevil", miniDesc: "AHORA, AHORA!! QUE LOS JUEGOS COMIENCEN!!", content: [] },
                { name: "Spamton", miniDesc: "DESPUÉS DE TODO, ¡TÚ QUIERES SER UN [Big Shot]! ¡¡EAHAHAHAHAA!!", content: [] }]
            },
            {
              index: 4, name: "Localizaciones", image: ChapterIcon, articles: [
                { name: "Hometown (Mundo de Luz)", miniDesc: "El inicio", content: [] },
                { name: "Mundo(s) Oscuro(s)", miniDesc: "LA OSCURIDAD", content: [] }]
            },
            {
              index: 5, name: "Mecanicas", image: ChapterIcon, articles: [
                { name: "SAVE", miniDesc: "Aveces, la ves parpadeando. Aquella luz que sólo tú puedes ver. Por segunda naturaleza, te acercas y... [Archivo Salvado]", content: [] },
                { name: "ALMA", miniDesc: "Sientes como si tu ALMA brillara.", content: [] },  
                { name: "SURVEY_PROGRAM (Introduccion)", miniDesc: "ESTAS AHI? ESTAMOS CONECTADOS?", content: [] }]
            }
          ]
        });
      }
      catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    }
    fetchData();
  }, []);*/

  console.log(docData);

  const buttons = [
    {link: "http://localhost:3000", img1:MainBTN , img2:MainBTN2},
    {link: "http://localhost:3000/Undertale", img1:undertaleBTN , img2:undertaleBTN2},
    {link: "http://localhost:3000/Deltarune", img1:deltaruneBTN , img2:deltaruneBTN2}]

  return (
    <body id="deltarune" style={{ background: "transparent" }}>

      <div id="buttons" style={{ position: "fixed", zIndex: "10000", margin: "-10px" }}>
        <ul style={{ listStyleType: "none" }}>
        {buttons.map((elem) => 
          (<li>
            <Link to={elem.link}>
              <img
                src={elem.img1}
                style={{ width: "60px" }}
                onMouseEnter={(e) => { e.currentTarget.src = elem.img2 }}
                onMouseLeave={(e) => { e.currentTarget.src = elem.img1 }}
              />
            </Link>
          </li>))}
        </ul>
      </div>

      <header>
        <center>
          <img src={TitleLogo} style={{ maxWidth: "700px", margin: "20px" }} className="logo" />
        </center>
      </header>

      <main style={{ justifyContent: "space-between" }}>
        <center>

          <section style={{ maxWidth: "600px", border: "4px solid rgb(0, 192, 0)" }}>
            <center >
              <img src={CyberCity} style={{ width: "500px", margin: "10px", border: "3px solid rgb(0, 192, 0)" }} />
              <h1 className="title">¿QUE ES?</h1>
              <p>Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distinto por sus acciones. En su mayoría.
              </p>
            </center>
          </section>

          <section style={{ maxWidth: "1000px", border: "4px solid rgb(255, 255, 255)", padding: "20px", minWidth: "600px" }}>
            <center>
              <h1 className="title" style={{ fontSize: "50px" }}>SELECCIONA LA CAPITULO</h1>

              <div style={{ display: "inline-block", width: "100%" }}>
                <ul style={{ listStyleType: "none", padding: "0", listStyle: "none", display: "block" }}>

                  <hr style={{ margin: "1.5% 0", opacity: "0.2", display: "block" }} />
                  {chapters.map(chapter => (<>

                    <li style={{}} >

                      <Link to={`http://localhost:3000/Deltarune/${chapter.name}`}
                        style={{ display: "flex", lineHeight: "70px", alignItems: "center", justifyContent: "space-between", textAlign: "-webkit-match-parent" }}
                        onMouseEnter={(e) => { e.currentTarget.children[2].setAttribute("style", { width: "80px", display: "block", WebkitFilter: "sepia(175%) saturate(99999999%) " }) }}
                        onMouseLeave={(e) => { e.currentTarget.children[2].setAttribute("style", { width: "80px", display: "block" }) }}
                      >

                        <span style={{ display: "inline-block" }} >Chapter {chapter.index}</span>
                        <span style={{ display: "inline-block" }} >{chapter.name}</span>
                        <img src={chapter.image} style={{ width: "80px", display: "block", WebkitFilter: "sepia(175%) saturate(99999999%) " }} />

                      </Link>

                    </li>

                    <hr style={{ margin: "1.5% 0", opacity: "0.2", display: "block" }} />
                  </>
                  ))}
                </ul>
              </div>

            </center>
          </section>

        </center>
      </main>

      <dr-background />

    </body>
  );
}

export default IndexDeltarune;
