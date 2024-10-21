import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { db } from '../DataBase';
import { doc, getDoc } from "firebase/firestore";

import titulo from '../files/Images/Undertale titulo.png';
import deltarune_logo from '../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../files/Images/Annoying dog.png';
import quit from '../files/Images/Quit.png'
import loading from '../files/Images/Annoying_Dog_overworld_sleeping.webp';
import intro from '../files/Images/undertale_intro.mp4'
import Determination_soul from '../files/Images/detemination soul.png'
import monster_soul from '../files/Images/monster soul.png'
function IndexUndertale() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);

  return (
    <div>
      <nav>
        <Link to='http://localhost:3000' className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Annoying_dog_bg} alt="Annoying_dog_bg" className='icon_bg' />
          <img src={Annoying_dog} className='button-img' style={{ position: "relative", left: "-33%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Inicio</p>
        </Link>
        <Link to="http://localhost:3000/Deltarune" className='Especial_button' style={{ display: "flex" }}>
          <img src={deltarune_logo_bg} alt="Deltarune logo background" className='icon_bg' />
          <img src={deltarune_logo} className='button-img' style={{ position: "relative", left: "-29%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Deltarune</p>
        </Link>
        
      </nav>
      <nav><Link to='http://localhost:3000' className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
          <img src={Annoying_dog_bg} alt="Annoying_dog_bg" className='icon_bg' />
          <img src={Annoying_dog} className='button-img' style={{ position: "relative", left: "-33%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Personages</p>
        </Link>
        <Link to="http://localhost:3000/Deltarune" className='Especial_button' style={{ display: "flex" }}>
          <img src={deltarune_logo_bg} alt="Deltarune logo background" className='icon_bg' />
          <img src={deltarune_logo} className='button-img' style={{ position: "relative", left: "-29%" }} />
          <p className='button_text' style={{ position: "relative", left: "-15%" }}>Deltarune</p>
        </Link></nav>
      <center>
        <div className='content'>

          <br />
          {introduccion ? (
            <div>
              <img src={titulo} alt="Titulo" className='titulo' />
              <p>by Toby Fox</p>
              <h3>
                Undertale es un RPG en el que controlas a Frisk, un humano, que tras subir el monte Ebott caería a un mundo repleto de monstruos, llamado Underground y ahora ese mundo estará destinado a estar bajo tu control y tu fuerte <determinacion>Determinación</determinacion> ya que no importa lo que hagan los habitantes, tu <determinacion>Determinación</determinacion> te hace imparable.
              </h3>
              <br />
              <h1>RUTAS</h1>
              <h3>
                Undertale tiene 3 Rutas la  <neutral>Neutral</neutral>,la <pacifista>Pacifista</pacifista> y la <genocida>Genocida</genocida> que serían las maneras en las que te irás del Underground , cada ruta depende de tu relación con los monstruos
              </h3>
              <h3>
                La ruta <neutral>Neutral</neutral> es cuando te haces amigo de algunos monstruos pero matas otros, solo con matar UN monstruo ya se inicia esta ruta, esta ruta tiene varios finales dependiendo de a quien mates o de quien te hagas amigo.
              </h3>
              <h3>
                La ruta <pacifista>Pacifista</pacifista> es cuando te haces amigo de todos los monstruos y no matas a ninguno
              </h3>
              <h3>
                La ruta <genocida>Genocida</genocida> es cuando <genocida>MATAS A TODOS SOLO DEJANDO SU POLVO</genocida>.
              </h3>
              <h1>Almas</h1>
              <h3>En Undertale existe el Alma que es la culminación de cada ser, el Alma se hace más fuerte con <genocida>LOVE</genocida>(LV) y aumenta con una determinada cantidad de <genocida>EXP</genocida>.              </h3>
              <h3>¿Qué significa  <genocida>LOVE</genocida>? podrías pensar que significa amor en ingles pero no, es un acrónimo de <genocida>Level of Violence</genocida> (Nivel de Violencia), ¿y <genocida>EXP</genocida>? es otro acrónimo de <genocida>Execution Points</genocida> (Puntos de Exterminio) y se van ganando mientras vas matando Monstruos </h3>

              <h3>Los humanos pueden tener hasta 7 diferentes tipos de Almas y cada una de estas tienen sus propias caracteristicas</h3>
              <div className='almas'>
                <paciencia><img src={Determination_soul} /> Paciencia</paciencia>
                <br />
                <valentia><img src={Determination_soul} /> Valentía</valentia>
                <br />
                <integridad><img src={Determination_soul} /> Integridad</integridad>
                <br />
                <perseverancia><img src={Determination_soul} /> Perseverancia</perseverancia>
                <br />
                <amabilidad><img src={Determination_soul} /> Amabilidad</amabilidad>
                <br />
                <justicia><img src={Determination_soul} /> Justicia</justicia>
                <br />
                <determinacion><img src={Determination_soul} /> Determinación</determinacion>(la de nuestro protagonista)
              </div>
              <h1>Los Monstruos</h1>
              <h3>Los monstruos a diferencia de los humanos su cuerpo está hecho con magia, haciendo de que ellos puedan hacer poderosos ataques mágicos pero aun asi los humanos son más poderosos, ya que los cuerpos de los monstruos y sus Almas son más débiles que las de un humano, tan haci que cuando mueren su cuerpo se hace polvo y se alma pedazos, todos los monstruos a excepción de uno su Rey <genocida>Asgore</genocida> ya que su alma aunque él muera se mantendrá intacta.
              <h3>asi se ve el alma de los monstruos</h3>
              <img style={{width:"20%",height:"20%"}}src={monster_soul}></img>
              </h3>
              <br />
<h2>¿Por qué los humanos encerraron a los monstruos en el Underground si eran más débiles que ellos?</h2>
           <h3>
Eso Tiene una simple respuesta <genocida>MIEDO</genocida> por que cuando un Humano muere su alma se mantiene y los monstruos puede absorber y hacerse mas poderosos de tal modo que con 7 se vuelven <genocida>DIOSES</genocida>. <genocida>Asgore</genocida> ya tienen 6 y buscan la séptima para poder destruir la barrera que los mantiene encerrados y declararle la guerra a los humanos.</h3>

            </div>
          ) : (
            <div>
              <video onEnded={() => setIntroduccion(true)} autoPlay style={{ maxWidth: "50%", maxHeight: "30%", minWidth: "50%", miHeight: "30%" }} src={intro}></video>
              <div onClick={() => setIntroduccion(true)} ><img className='button' src={quit}></img></div>
            </div>

          )}
        </div>
      </center>
    </div>
  );
}

export default IndexUndertale;