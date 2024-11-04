import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../DataBase";

import TitleLogo from "../files/Images/deltarune-title-logo.png";
import CyberCity from "../files/Images/cyber_city.gif";
import ChapterIcon from "../files/Images/ch3_icon.png";
import MenuSound from "../files/snd_menumove.mp3";

import DRButtons from "./DRButtons";

function IndexDeltarune() {
  const [docInfo, setDocInfo] = useState(null);
  const [content, setContent] = useState({image1: ""});
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "Deltarune", "Informacion");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setChapters(docSnap.data().categories);
          setContent(docSnap.data().content);
          setDocInfo(docSnap.data())
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
      <DRButtons />
      <body id="deltarune" style={{ background: "transparent" }}>

        <header>
          <center>
            <img src={TitleLogo} style={{ maxWidth: "700px", marginBottom: "20px", marginTop: "20px" }} className="logo" />
          </center>
        </header>

        <main style={{ justifyContent: "space-between" }}>
          <center>

            <section style={{ maxWidth: "600px", border: "4px solid rgb(0, 192, 0)" }}>
              <center>
                <img src={content.image1} style={{ width: "500px", margin: "10px", border: "3px solid rgb(0, 192, 0)" }} />
                <h1 className="title">{content.title}</h1>
                <p>{content.text1}</p>
              </center>
            </section>

            <section style={{ maxWidth: "1000px", border: "4px solid rgb(255, 255, 255)", padding: "20px", minWidth: "600px" }}>
              <center>
                <h1 className="title" style={{ fontSize: "50px" }}>SELECCIONA EL CAPITULO</h1>

                <div style={{ display: "inline-block", width: "100%" }}>
                  <ul style={{ listStyleType: "none", padding: "0", listStyle: "none", display: "block" }}>
                    <hr />
                    {chapters.map(chapter => (<>

                      <li style={{}} >

                        <Link to={`http://localhost:3000/Deltarune/${chapter.name}`}
                          style={{ display: "flex", lineHeight: "70px", alignItems: "center", justifyContent: "space-between", textAlign: "-webkit-match-parent" }}
                          onMouseEnter={(e) => { e.currentTarget.children[2].style.WebkitFilter = "sepia(175%) saturate(99999999%) " }}
                          onMouseLeave={(e) => { e.currentTarget.children[2].style.WebkitFilter = "none" }}
                        >

                          <span style={{ display: "inline-block" }} >Chapter {chapter.index}</span>
                          <span style={{ display: "inline-block" }} >{chapter.name}</span>
                          <img src={chapter.image} style={{ width: "80px", display: "block" }} />

                        </Link>

                      </li>
                      <hr />
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
    </>
  );
}

export default IndexDeltarune;
