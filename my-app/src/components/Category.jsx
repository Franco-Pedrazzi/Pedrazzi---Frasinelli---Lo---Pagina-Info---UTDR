import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import DRButtons from "./DRButtons";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../DataBase";

import TitleLogo from "../files/Images/deltarune-title-logo.png";

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
        setArticles(null);
      }
    }
    fetchData();
  }, []);

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
          <center>
            <section style={{ width: "100%", maxWidth: "700px" }}>
              {articles == null ? (<><h3>Pero no vino nadie.</h3><hr /></>)
                : (
                  <>
                    <h1 className="title">{url.toUpperCase()}</h1>
                    <ul style={{ listStyleType: "none", padding: "0", listStyle: "none", display: "block" }}>
                      <hr />
                      {articles.map(article => (<>
                        <li style={{ margin: "20px" }}>
                          <Link to={`http://localhost:3000/Deltarune/${url}/${article.name.replace(/ /g, '_')}`}>
                            <h4 style={{ fontSize: "100%", margin: "0px" }}>{article.name}</h4>
                            <p style={{ fontSize: "18px", textShadow: "none", margin: "0px" }}>{article.miniDesc}</p>
                          </Link>
                        </li>
                        <hr />
                      </>))}
                    </ul>
                  </>
                )}
              <Link to={`http://localhost:3000/Deltarune`}><h3 style={{ fontSize: "200%" }}>VOLVER</h3></Link>
            </section>
          </center>
        </main>
      </body>
    </>
  );
}

export default Category;