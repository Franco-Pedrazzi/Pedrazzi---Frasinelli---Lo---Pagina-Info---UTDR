import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../DataBase";

function Category() {

  const url = useParams().categoria;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
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

  console.log(articles);

  return (
    <body id="deltarune" style={{ background: "transparent", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <center>
        <section style={{ width: "100%", maxWidth: "700px" }}>
          <h1 className="title">{url.toUpperCase()}</h1>
          <ul style={{ listStyleType: "none", padding: "0", listStyle: "none", display: "block" }}>
            <hr />
            {articles.map(article => (<>
              <li style={{margin: "20px"}}>
                <Link to={`http://localhost:3000/Deltarune/${url}/${article.name}`}>
                  <h4 style={{ fontSize: "30px", margin: "0px" }}>{article.name}</h4>
                  <p style={{ fontSize: "18px", textShadow: "none", margin: "0px" }}>{article.miniDesc}</p>
                </Link>
              </li>
              <hr />
            </>))}
          </ul>
          <Link to={`http://localhost:3000/Deltarune`}><h3>VOLVER</h3></Link>
        </section>
      </center>
    </body>
  );
}

export default Category;