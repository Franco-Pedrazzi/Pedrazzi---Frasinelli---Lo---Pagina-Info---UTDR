import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import DRButtons from "./DRButtons";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../DataBase";

import TitleLogo from "../files/Images/deltarune-title-logo.png";

function Article() {
  const [content, setContent] = useState([]);
  const url = useParams().articulo;
  const prevUrl = useParams().categoria;
  const [articles, setArticles] = useState(null);
  /*  useEffect(() => {
      async function fetchData() {
        try {
          const docRef = doc(db, "Deltarune", "Informacion");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setArticles(docSnap.data().categories.filter(obj => obj.name == url)[0].articles);
          } else {
            console.log("No se encontró el documento");
          }
        } catch (error) {
          console.error("Error al obtener el documento:", error);
          setArticles(null);
        }
      }
      /*async function playSound() {
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
      playSound();  * /
      fetchData();
    }, []);
  */

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "Deltarune", "Informacion");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data().categories.filter(obj => obj.name == prevUrl)[0].articles.filter(obj => obj.name.replace(/ /g, '') == url)[0].content);
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
        setArticles(null);
      }
    }
    /*async function playSound() {
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
    playSound();  */
    fetchData();
  }, []);

  console.log(content);
  const content1 = {
    title: "TITULO",
    image1: "",
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image2: "",
    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
    image3: "",
    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
    image4: "",
    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
  }
  return (
    <>
      <DRButtons />
      <body id="deltarune" style={{ background: "transparent" }}>

        <header style={{ overflow: "hidden" }}>
          <center>
            <img src={TitleLogo} style={{ width: "100%", maxWidth: "700px", marginBottom: "20px", marginTop: "20px" }} className="logo" />
          </center>
        </header>

        <main style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <section style={{ width: "100%", maxWidth: "1000px" }}>
            <center>
              <h1 className="title">{content1.title}</h1>
              <p style={{fontSize: "120%"}}>{content1.text1}</p>
              <p style={{fontSize: "120%"}}>{content1.text2}</p>
              <p style={{fontSize: "120%"}}>{content1.text3}</p>
              <p style={{fontSize: "120%"}}>{content1.text4}</p>
              <hr />
              <Link to={`http://localhost:3000/Deltarune/${prevUrl}/`}><h3 style={{ fontSize: "200%" }}>VOLVER</h3></Link>
            </center>
          </section>
        </main>

      </body>
    </>
  );
}

export default Article;