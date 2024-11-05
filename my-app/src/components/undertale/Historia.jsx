import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import titulo from '../../files/Images/Undertale titulo.png';
import deltarune_logo from '../../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../../files/Images/Annoying dog.png';
import Determination_soul from '../../files/Images/detemination soul.png'
import undertale_Map_Logo from '../../files/Images/map_icon.png'
import Undertale_logo from '../../files/Images/Undertale-logo.png'
import save_point from '../../files/Images/save point.png'
import undertale_Item_Logo from '../../files/Images/undertale_item_logo.png'
import undertale_switch from '../../files/Images/undertale switch.png'
import { Routes, Route, useParams } from 'react-router-dom';
import './Undertale.css'
import Personajes from './Personajes'
const images = require.context('../../files/Images/undertale_imagenes_historia', false, /\.(png|jpe?g|webp|gif)$/);

const imagenes = images.keys().reduce((acc, image) => {

  const imageName = image.replace('./', '').replace(/\.(png|jpe?g|webp|gif)$/, '');
  acc[imageName] = images(image);
  return acc;
}, {});

function Mundo() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);
  const [ruta, setRuta] = useState("Neutral/Pasifista")
  const [Switch, setSwitch] = useState("Neutral_Pasifista")
  let { userId } = useParams();
  console.log(userId)
  function ChangeMode() {
    if (ruta == "Genocida") {
      setRuta("Neutral_Pasifista")
      setSwitch("Neutral_Pasifista")
    }
    else {
      setRuta("Genocida")
      setSwitch("Genocida")
    }
  }
  return (
    <div>
      <center>
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
        <nav>
          <Link to="http://localhost:3000/Undertale" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={Undertale_logo} className='button-img' />
            <p className='button_text'>Undertale</p>
          </Link >
          <Link to="http://localhost:3000/Undertale/Objetos" className='Especial_button' style={{ display: "flex", paddingRight: "45px" }}>
            <img src={undertale_Item_Logo} style={{ width: "50px", height: "50px" }} className='button-img' />
            <p className='button_text'>Objetos</p>
          </Link >
          <Link  to="http://localhost:3000/Undertale/Personajes" className='Especial_button' style={{ display: "flex", paddingRight: "45px"  }}>
          <img src={save_point} className='button-img' style={{width: "50px",height: "50px"}}/>
          <p className='button_text'>Personajes</p>
        </Link >
        </nav>

        <div class="change_Ruote" onClick={() => ChangeMode()}>
          <div className={Switch}> </div>
        </div>

        <img src={titulo} alt="Titulo" className='titulo' />
        <p>by Toby Fox</p>
        <h2>Mont Ebott</h2>
        <img src={imagenes["MonteEbott"]} className='Frames' />
        <br />
        <h2><perseverancia>Ruinas</perseverancia></h2>
        <br />
        <h3>Las Ruinas son una zona construida de color <perseverancia>morado</perseverancia>, conocida por sus caminos, largos pasillos y paredes de piedra. Hay muchos acertijos y trampas dentro de estos, así como un exceso de hojas rojas repartidas por el suelo y lianas verdes en las paredes.</h3>
        <h3>Después de que los monstruos fueron desterrados de la superficie por los humanos, los monstruos hicieron sus primeras residencias en lo que ahora son las Ruinas.
          Más tarde, los monstruos comenzaron a regresar a la Barrera, donde establecieron planes para crear su nueva capital.
        </h3>
        <img src={imagenes["inicio_del_juego"]} className='Frames' />
        <h3>esta habitación sería en la que caímos siendo amortiguados por esas <justicia>flores amarillas</justicia></h3>
        <br />
        <h3>apenas cambiamos de habitación</h3>
        <img src={imagenes["encuentro_Flowey"]} className='Frames' />
        <h3>conoceremos a <justicia>Flowey la flor</justicia></h3>
        <img src={imagenes["Tutorial"]} className='Frames' />
        <h3><justicia>Flowey</justicia> nos introducirá el tema del alma pero nos tratara de <determinacion>atacar</determinacion> a la mínima oportunidad y se reirá de nosotros, diciendo que en este mundo es <determinacion>matar o morir</determinacion></h3>
        <h2>y sin poder hacer nada </h2>
        <img src={imagenes["intento_Acecinato_Flowey"]} className='Frames' />
        <br />
        <h3>seremos salvados por <integridad>Toriel</integridad>, la guardiana de las <determinacion>Ruinas</determinacion>
        </h3>
        <img src={imagenes["Toriel"]} className='monsters' />
        <br />
        <img src={imagenes["salvados"]} className='Frames' />

        <h3>Toriel nos acompañara al inicio de las ruinas mostrándonos cómo hacer los puzzles y nos enseñaría con un muñeco que no si o si debes <determinacion>matar</determinacion> a los monstruos si <justicia>hablas</justicia> con ellos </h3>
        <div>
          <img src={imagenes["leccion_de_puzzles"]} className='Frames' />
          <img src={imagenes["leccio_del_maniqui"]} className='Frames' />
        </div>
        <h3>en un punto toriel nos dirá que le esperemos ahí porque debe hacer algo y nos dará un celular para comunicarnos con ella </h3>
        <img src={imagenes["abandono"]} className='Frames' />
        <h3> Si esperamos en la habitación donde Toriel nos dio el teléfono nos llamará pero no pasa nada importante.
        </h3>

        <h3> para avanzar no le devemos obedecer, encontrándonos con un Froggit que nos enseña a  <justicia>perdonar</justicia>, que es cuando logramos comvencer a un monstruo de que dejemos de pelear y solo funciona cuando spare se pone  <justicia>amarillo</justicia></h3>
        <div>
          <img src={imagenes["cant_Spare"]} className='Frames' />
          <img src={imagenes["Spare"]} className='Frames' />
        </div>
        <div>
          <img src={imagenes["Froggit"]} className='monsters' />
          <img src={imagenes["Whimsun"]} className='monsters' />
          <img src={imagenes["moldsmal"]} className='monsters' />
          <img src={imagenes["Migosp_wiht_other"]} className='monsters' />
          <img src={imagenes["Vegetoid"]} className='monsters' />
          <img src={imagenes["Loox"]} className='monsters' />
        </div>
        <div>
          <img src={imagenes["puzzle_ruinas"]} className='Frames' />
        </div>
        <h3>además Toriel nos llamara para preguntarnos cosas como si salimos de la habitación, que es peligroso salir solo, que cual nos gusta más canela o caramelo, etc
        </h3>
        {ruta == "Genocida" ? (
          <div>
            <h3>y si nos ponemos a <determinacion>matar</determinacion> monstruos hasta que ya no digan   <determinacion>PERO NO VINO NADIE</determinacion> iniciaremos con la ruta <determinacion>Genocida</determinacion>    </h3>
            <img src={imagenes["inicio_del_juego"]} className='Frames' />
            <h3>más adelante nos encontraremos a Napstablook             </h3>
            <img src={imagenes["encuentro_con_napstablook"]} className='Frames' />
            <h3>fingirá que está durmiendo y si <determinacion>mataste</determinacion>  a todos los monstruos se ahuyentara con nuestra presencia pero si aun no los mataste, si podremos interactuar con él y si lo tratamos de <determinacion>matar</determinacion> el juego se reirá de nosotros ya que napstablook nos dirá que él es intangible que solo bajo su barra de vida para no ser irrespetuoso y se irá</h3>
            <img src={imagenes["napstablook"]} className='monsters' />
          </div>
        ) : (
          <div>
            <h3>más adelante nos encontraremos a Napstablook </h3>
            <img src={imagenes["encuentro_con_napstablook"]} className='Frames' />
            <h3>fingirá que estar durmiendo y si lo movemos a la fuerza se iniciara un combate con él</h3>
            <img src={imagenes["napstablook"]} className='monsters' />
            <h3>si queremos hacernos su amigo solo habra que contarle chistes, pero si lo atacamos  el juego se reirá de nosotros ya que napstablook nos dirá que él es intangible y que solo bajo su barra de vida para no ser irrespetuoso  y se irá</h3>
          </div>
        )
        }
        <h3>cuando llegamos a la casa de Toriel</h3>
        <img src={imagenes["casa_toriel"]} className='Frames' />
        <h3>nos encontraremos con ella y nos curará </h3>
        <img src={imagenes["habla_con_toriel"]} className='Frames' />
        <h3>si queremos avanzar con la historia debemos hablar con ella diciendo que nos queremos ir, así toriel se ira rapido a un lugar</h3>
        <h3>y si le seguimos veremos un pasillo morado y a toriel y nos dirá que va destruir la salida para que no muera otro niño, ya que los otros <justicia>6 niños</justicia> se fueron de las ruinas y <determinacion>murieron</determinacion> .  </h3>
        <img src={imagenes["toriel_se_reusa_a_dejarte_ir"]} className='Frames' />
        <h3>ahora para poder salir de las ruinas tendremos que enfrentarnos a Toriel</h3>
        <img src={imagenes["toriel_te_prueba"]} className='Frames' />
        <br />

        {ruta == "Genocida" ? (
          <div>
            <img src={imagenes["pelea_toriel"]} className='monsters' />
            <h3>cuando la <determinacion>matamos</determinacion>  nos dirá que al mantenernos aquí no nos protegia a nosotros, si no a ellos</h3>
            <img src={imagenes["Toriel_dead"]} className='Frames' />
            <h3>cuando salgamos de las ruinas nos encontraremos a <justicia>Flowey</justicia></h3>
            <h3>como matamos a todos <justicia>Flowey</justicia> nos felicita y nos preguntara si éramos <determinacion>CHARA</determinacion>  </h3>
            <img src={imagenes["encuentro_Flowey"]} className='Frames' />
          </div>
        ) : (
          <div>
            <img src={imagenes["pelea_toriel"]} className='monsters' />
            <h3>si la <justicia>perdonamos</justicia> muchas veces ella se rendirá y nos dejara pasar</h3>
            <img src={imagenes["toriel_te_deja_ir"]} className='Frames' />
            <h3>pero si la matamos nos dirá que somos más fuertes de lo que ella pensaba y se hará polvo</h3>
            <img src={imagenes["Toriel_dead"]} className='Frames' />
            <h3>cuando salgamos de las ruinas nos encontraremos a <justicia>Flowey</justicia></h3>
            <h3>si <justicia>perdonamos</justicia> a Toriel y a los otros monstruos nos dirá que ahora pudimos avanzar con nuestras reglas pero que pronto entenderiamos que en este mundo es matar o morir
              si <determinacion>matamos</determinacion> a 1 monstruos que no sea Toriel se reirá de nuestra hipocresía por qué no <determinacion>matamos</determinacion> matamos a toriel pero si a otro monstruo que podría ser el toriel de otra persona per si <determinacion>matamos</determinacion> a Toriel nos dira que no tenemos alma
            </h3>
            <img src={imagenes["flowey_se_rie_de_ti"]} className='Frames' />
          </div>
        )
        }
        <h2>Snowdin</h2>
        <h3>Snowdin es la primera ciudad encontrada por el jugador después de salir de Las Ruinas.</h3>
        <h3>Snowdin está lleno de nieve, bosques y guardias.</h3>
        <img src={imagenes["entrada_snowdin"]} className='Frames' />
        <h3>Apenas salis de las ruinas vez que alguien te observa desde las sombras, y escuchas el sonido de pasos que no son tuyos. Entre los árboles, emerge una figura y por la espalda lentamente alguien te dice </h3>
        {ruta == "Genocida" ? (
          <div>
            <h2>"<determinacion>H U M A N O</determinacion>"</h2>
            <h2> "SABES COMO CONOCER A UN NUEVO COLEGA DATE LA VUELTA Y DAME LA MANO."</h2>
            <img src={imagenes["conociendo_sans"]} className='Frames' />
            <img src={imagenes["conociendo_sans_2"]} className='Frames' />
            <h3>Y nos daremos la vuelta y le daremos la mano, pero el tenia un cojín pedorro en la mano pero no nos reímos y sans empezaría a sospechar algo</h3>
            <img src={imagenes["sans_genocida"]} className='monsters' />
            <h3>  entonces se presenta el es <determinacion>Sans</determinacion> el esqueleto y nos dirá que él no es fanatico de la caza de humanos pero su hermano <determinacion>Papyrus</determinacion> si.</h3>
            <img src={imagenes["Papyrus_genocida"]} className='monsters' />
            <h3>y cuando avanzamos Sans se da cuenta que Papyrus está viniendo entonces rápidamente sans nos hace escondernos detrás de una lámpara de forma conveniente pero no nos escondemos y papyrus nos ve y al vernos se emociona y se va  </h3>
            <img src={imagenes["conociendo_papyrus"]} className='Frames' />
          </div>
        ) : (
          <div>
            <h2>"<justicia>H U M A N O</justicia>"</h2>
            <h2> "SABES COMO CONOCER A UN NUEVO COLEGA DATE LA VUELTA Y DAME LA MANO."</h2>
            <img src={imagenes["conociendo_sans"]} className='Frames' />
            <img src={imagenes["conociendo_sans_2"]} className='Frames' />
            <h3>Y nos daremos la vuelta y le daremos la mano, pero el tenia un <justicia>cojín pedorro</justicia> en la mano y parece que Frisk se ríe</h3>
            <img src={imagenes["sans"]} className='monsters' />
            <h3>  entonces se presenta el es <integridad>Sans</integridad> el esqueleto y nos dirá que él no es fanatico de la caza de humanos pero su hermano <integridad>Papyrus</integridad> si.</h3>
            <img src={imagenes["Papyrus"]} className='monsters' />
            <h3>y cuando avanzamos Sans se da cuenta que Papyrus está viniendo entoces rápidamente sans nos hace escondernos detrás de una lámpara de forma conveniente mientras habla con Papyrus</h3>
            <img src={imagenes["conociendo_papyrus"]} className='Frames' />
          </div>
        )
        }
        <h3>entonces conseremos a Doggo en snowdin que nos presentara los ataques <paciencia>celestes</paciencia></h3>
        <img src={imagenes["insertan_ataques_celestes"]} className='Frames' />
        <h3>estos ataques no nos aran daño si no nos <paciencia>movemos</paciencia></h3>

        <h3>Papyrus nos dejara puzzles y pastas por todo snowdin por que su sueño es ser parte de la guardia real para tener amigos y para eso necesita capturados </h3>


        {ruta == "Genocida" ? (
          <div>
            <h3>Pero nosotros <determinacion>ignoramos</determinacion> todos sus puzzles</h3>


            <h3> e iremos  <determinacion>matando</determinacion> a todos en snowdin y los del pueblo se ocultaran en sus casas </h3>
            <img src={imagenes["Snoedrate"]} className='monsters' />
            <img src={imagenes["Icecap"]} className='monsters' />
            <img src={imagenes["Jerry"]} className='monsters' />
            <img src={imagenes["Dogami_&_Dogguaresa"]} className='monsters' />
            <img src={imagenes["Greater Dog"]} className='monsters' />
            <img src={imagenes["Gyftrot"]} className='monsters' />
            <img src={imagenes["lesser_dog"]} className='monsters' />

            <h3> y sans nos advierte que no <determinacion>MATEMOS</determinacion>  a su hermano</h3>
            <img src={imagenes["sans_enojado"]} className='monsters' />
            <img src={imagenes["pelea_con_Papyrus"]} className='Frames' />
            <h3>Papyrus al encontranos al final de snowdin nos dirá que confía en nosotros y que podemos cambiar si lo deseamos, que nos ayudaria y cuando nos hacercamos Papyrus esperaba un <justicia>abrazo</justicia> pero lo de  <determinacion>decapitariamos</determinacion> de un solo golpe </h3>
            <img src={imagenes["papyrus_muere"]} className='Frames' />
            <br />
            <img src={imagenes["papyrus_polvo"]} className='Frames' />
            <br />

            <h3>y cuando avancemos entraremos a  <determinacion>Waterfall</determinacion></h3>
            <img src={imagenes["inicio_waterfall_genocida"]} className='Frames' />
          </div>
        ) : (
          <div>
            <img src={imagenes["savepoints_snowdin"]} className='miniFrames' />
            <img src={imagenes["puzzle_snowdin"]} className='miniFrames' />
            <img src={imagenes["ultimate_sonwdin_puzzle"]} className='miniFrames' />

            <h3>ademas nos iremos encontrando con monstruos en el camino</h3>
            <img src={imagenes["Snoedrate"]} className='monsters' />
            <img src={imagenes["Icecap"]} className='monsters' />
            <img src={imagenes["Jerry"]} className='monsters' />
            <img src={imagenes["Dogami_&_Dogguaresa"]} className='monsters' />
            <img src={imagenes["Greater Dog"]} className='monsters' />
            <img src={imagenes["Gyftrot"]} className='monsters' />
            <img src={imagenes["lesser_dog"]} className='monsters' />
            <br />
            <img src={imagenes["pelea_con_Papyrus"]} className='Frames' />
            <br />
            <img src={imagenes["durante_pelea_con_Papyrus"]} className='monsters' />
            <h3>al final de snowdin papyrus nos enfrenta directamente pero papyrus es el único monstruo que no puede matarnos porque cuando llegues a 1 de vida nos <justicia>capturara</justicia>, pero si lo enfrentamos hasta que se canse o perdemos varias veces papyrus nos ofrece ser su <justicia>amigo</justicia>  y te invita a una juntada en su casa  </h3>

            <img src={imagenes["casa_papyrus_&_sans"]} className='miniFrames' />
            <img src={imagenes["pieza_papyrus"]} className='miniFrames' />
            <img src={imagenes["Papyrus_juntada"]} className='monsters' />

            <h3>entonces cuando avancemos nos encontramos a sans en la entrada a <integridad>Waterfall</integridad> y podemos ir a comer con él a un bar de Snowdin</h3>
            <img src={imagenes["inicio_waterfall"]} className='miniFrames' />
            <img src={imagenes["juntada_con_sans"]} className='miniFrames' />
            <h3>pero si matamos a papyrus no lo veremos</h3>
            <img src={imagenes["papyrus_polvo"]} className='Frames' />
            <br />
            <img src={imagenes["iicio_waterfall_sin_sans"]} className='Frames' />
          </div>
        )
        }

        {ruta == "Genocida" ? (
          <div>
            <h2><determinacion>Waterfall</determinacion> </h2>
            <h3>Es una caverna húmeda y oscura llena de plantas acuáticas, ríos subterráneos y piedras brillantes en las paredes y el techo</h3>
            <h3>aqui nos encontraremos con <determinacion>Undyne</determinacion> la <determinacion>lider</determinacion> de la <determinacion>Guardia Real</determinacion></h3>
            <img src={imagenes["undyne_with_armor"]} className='Frames' />
            <img src={imagenes["encuentro_con_undey"]} className='Frames' />
            <h3>y nos tratara de <determinacion>matar</determinacion>  en todo momento ademas de los monstruos de la sona</h3>
            <img src={imagenes["undyne_nos_quiere_matar"]} className='Frames' />
            <br />
            <img src={imagenes["Aaron"]} className='monsters' />
            <img src={imagenes["moldsmal"]} className='monsters' />
            <img src={imagenes["moldbugg"]} className='monsters' />
            <img src={imagenes["Woshua"]} className='monsters' />
            <img src={imagenes["Shyren"]} className='monsters' />
            <img src={imagenes["temmi"]} className='monsters' />
            <h3>pero también conoceremos a <determinacion>Monster kid</determinacion> un chico fanatico de Undyne que tratara de llamar su atención y nos acompañara y ayudara pensando que somo un monstruo</h3>
            <img src={imagenes["conociendo_monsterkid"]} className='miniFrames' />
            <img src={imagenes["monsterkid_nos_ayuda"]} className='miniFrames' />
            <br />
            <h3>una de las veces que undyne trata de matarnos nos caeremos por un precipicio y caeríamos al <determinacion>basurero</determinacion> </h3>
            <img src={imagenes["caemos"]} className='Frames' />
          </div>
        ) : (
          <div>
            <h2><integridad>Waterfall</integridad> </h2>
            <h3>Es una caverna húmeda y oscura llena de plantas acuáticas, ríos subterráneos y piedras brillantes en las paredes y el techo</h3>
            <h3>aqui nos encontraremos con <amabilidad>Undyne</amabilidad> la <justicia>lider</justicia> de la <justicia>Guardia Real</justicia></h3>
            <img src={imagenes["undyne_with_armor"]} className='monsters' />
            <img src={imagenes["encuentro_con_undey"]} className='Frames' />
            <h3>y nos tratara de <determinacion>matar</determinacion>  en todo momento ademas de los monstruos de la sona</h3>
            <img src={imagenes["undyne_nos_quiere_matar"]} className='Frames' />
            <br />
            <img src={imagenes["Aaron"]} className='monsters' />
            <img src={imagenes["moldsmal"]} className='monsters' />
            <img src={imagenes["moldbugg"]} className='monsters' />
            <img src={imagenes["Woshua"]} className='monsters' />
            <img src={imagenes["Shyren"]} className='monsters' />
            <img src={imagenes["temmi"]} className='monsters' />
            <h3>pero también conoceremos a <justicia>Monster kid</justicia> un chico fanatico de Undyne que tratara de llamar su atención y nos acompañara y ayudara pensando que somo un monstruo</h3>
            <img src={imagenes["conociendo_monsterkid"]} className='miniFrames' />
            <img src={imagenes["viendo_el_castillo"]} className='miniFrames' />
            <img src={imagenes["monsterkid_nos_ayuda"]} className='miniFrames' />
            <br />
            <h3>una de las veces que undyne trata de matarnos nos caeremos por un precipicio y caeríamos al <justicia>basurero</justicia></h3>
            <img src={imagenes["caemos"]} className='Frames' />
          </div>
        )
        }
        <br />
        <img src={imagenes["basurero"]} className='Frames' />
        <h3>siendo amortiguados poe estas <justicia>flores</justicia> llegarias mos al basurero donde nos encontraremos a bad dummy</h3>
        <img src={imagenes["bad dummy"]} className='Frames' />
        <h3>el es un fantasma dentro del cuerpo de un maniquí y nos odiara por lo que le hicimos al maniquí del comienzo en las ruinas(no importaba si lo ignorábamos, le hablabamos o le pegaramos siempre nos odiara)  </h3>

        {ruta == "Genocida" ? (
          <div>
            <h3>de tanta ira que le provocamos bad dunny se funcionaria con su cuerpo y se haría tangible          </h3>
            <img src={imagenes["bad_dummy_muy_enojado"]} className='Frames' />
            <img src={imagenes["fusion"]} className='Frames' />
            <h3>y lo matariamos con un solo golpe   </h3>
            <img src={imagenes["mortal"]} className='monsters' />
            <h3>
              luego nos encontraríamos a monster kid en un puente y se enfrentara a nosotros
            </h3>
            <img src={imagenes["monsterkid_nos_enfrenta"]} className='Frames' />
            <img src={imagenes["pelea_monster_kid"]} className='monsters' />
            <h3>pero cuando tratemos de pegarle undyne se pondra en nuestro camino y la mataremos de un golpe</h3>
            <img src={imagenes["lo_salvaron"]} className='Frames' />
            <h3>le dice que esa herida no es nada y hace que se vaya</h3>
            <h3>pero cuando monsterkid se va undyne se estava <determinacion>volviendo polvo</determinacion></h3>
            <img src={imagenes["al_borde_de_la_muerte"]} className='monsters' />
            <h3>o eso pareciera pero algo dentro de ella no le deja morir, algo dentro de ella le dice que no puede permitir que sigamos matando gente, algo dentro de ella dice que sino nos detiene ahora nadie nos detendra y undyne se llena de <determinacion>DETERMINACIÓN</determinacion>  transformándose y volviendose mucho mas fuerte
            </h3>
            <img src={imagenes["pero_se_reusa"]} className='monsters' />
            <h2><determinacion>Undyne the Undying</determinacion></h2>
            <img src={imagenes["Undyne_the_Undying"]} className='monsters' />
            <h3>dejándonos una de las batallas más difíciles del juego, donde undyne  lo dára todo hasta que la matemos </h3>
            <iframe allowtransparency="true" width="485" height="402" src="//scratch.mit.edu/projects/669974432/embed?autostart=false" frameborder="0" allowfullscreen></iframe>
            <div className='gif-container_genocide'>
              <img src={imagenes["muere_la_inmortal"]} className='monsters' />
            </div>
          </div>
        ) : (
          <div>
            <h3>y tendremos que esquivar sus ataques y tratar de darle con sus propios ataques ya que no lo podremos matar por que el puede restaurar el maniquí por que es un fantasma poseyendolo  ni perdonar por que nos odia</h3>
            <img src={imagenes["bad_dummy_pelea"]} className='monsters' />
            <img src={imagenes["inmortal"]} className='Frames' />
            <h3> y hasta que Napstablok llega y con sus lágrimas ahuyenta al bad dunny</h3>
            <img src={imagenes["lluvia_acida"]} className='Frames' />
            <img src={imagenes["sal ados_napstablook"]} className='Frames' />
            <h3> luego nos encontraríamos a monster kid en un puente y cuando undyne llega el nos dira que ya no quiere ser nuestro amigo por que somos un humano </h3>
            <img src={imagenes["monsterkid_nos_enfrenta"]} className='Frames' />
            <h3>pero como no podia enfrentarnos por que aun nos veía como un amigo trata de irse pero se cae y termina colgando del puente </h3>
            <img src={imagenes["se_cae"]} className='Frames' />
            <h3>ahí podemos ayudarle o irnos si lo ayudamos monster kid elejara a Undyne</h3>
            <img src={imagenes["enfrenta_undyne"]} className='Frames' />
            <h3>pero sino lo ayudamos monster kid se caerá y undyne se lanzará a ayudarlo, se lastimara pero lograra salvarlo</h3>
            <h3>cuando  avancemos un poco más Undyne que no perderá más tiempo y se lanzará a atacarnos             </h3>
            <img src={imagenes["nos_enrentamos_a_Undyne"]} className='Frames' />
            <h3>para perdonar a undyne debemos <amabilidad>bloquear</amabilidad> sus ataques ya 1ue undyne nos hace pelear diferente al resto </h3>
            <img src={imagenes["undyne"]} className='monsters' style={{ position: "relative", left: "-2.5%" }} />
            <br />
            <img src={imagenes["alma_verde"]} className='monsters' />
            <h3>hasta que podamos huir (solo podemos uir cuando nuestra alma es <determinacion>roja</determinacion>)</h3>

            <h3> pero undyne nos volverá a enfrentar y hay que seguir haci hasta que lleguemos a hotland</h3>
            <h3>y cuando lleguemos undyne se desmayara por el calor y si queremos ser su <integridad>amigo</integridad> debemos darle un vaso con agua            </h3>
            <img src={imagenes["ayudamos_undyne"]} className='Frames' />
            <h3>papyrus nos llamara para juntarnos con él y undyne en la casa de ella (esto es para ser <integridad>amigos</integridad> de undyne) </h3>
            <h3>si volvemos a waterfall nos encontraremos con la casa de undyne</h3>
            <h3>y si no matamos a nadie y si la ayudamos en hotland podremos entrar a su casa
            </h3>
            <img src={imagenes["casa_undyne"]} className='Frames' />
            <h3>donde tendremos una clase de cocina con ella
            </h3>
            <img src={imagenes["casa_undyne_por_dentro"]} className='Frames' />
            <img src={imagenes["clase_cocina_fuego_perfecto"]} className='Frames' />
            <h3>y nos volveremos amigos</h3>
            <img src={imagenes["undune_se_hace_nuestra_amiga"]} className='Frames' />
            <h3>pero si la matamos ella se reusara a morrir</h3>
            <img src={imagenes["pero_se_reusa"]} className='monsters' />
            <h3>atacandonos con todo lo que tiene pero cada vez se ara mas devil hasta que muere</h3>
            <div className='gif-container'>
              <img src={imagenes["muere_undyne"]} className='monsters' />
            </div>
          </div>
        )
        }
        {ruta == "Genocida" ? (
          <div>
            <h2> <determinacion>Hotland</determinacion></h2>
            <h3>Hotland es una región volcánica y calurosa, cubierta de tierra roja, marrón y naranja que tiene lava en el fondo</h3>
            <h3>podemos recorrer hotland pero la mayor parte de hotland estara <determinacion>cerrada</determinacion> por nuestra culpa ademas los puzzles no funcionaran</h3>
            <img src={imagenes["cerrado"]} className='monsters' />
            <h3>a uno de los lugares que si podremos ir sera al laboratorio</h3>
            <img src={imagenes["lab"]} className='Frames' />
            <h3>donde nos encontraremos a <determinacion>Mettaton</determinacion></h3>
            <img src={imagenes["Mettaton"]} className='monsters' />
            <img src={imagenes["encuentro_mettaton"]} className='Frames' />
            <h3>que nos dira que la mayoria de los monstruos ya an <determinacion>evacuado</determinacion> y cuando nos hacercamos a <determinacion>matarlo</determinacion> él se va</h3>
            <h3>mientras avanzamos podremos continuar con el <determinacion>Genocidio</determinacion></h3>
            <img src={imagenes["Vulkin"]} className='monsters' />
            <img src={imagenes["tsunderplane"]} className='monsters' />
            <img src={imagenes["pyrope"]} className='monsters' />
            <img src={imagenes["Guardias_reales"]} className='monsters' />
            <h3>y cuando lleguemos al fin de hotland nos encontraremos a <determinacion>Muffet</determinacion></h3>
            <img src={imagenes["Muffet_nos_atrapa"]} className='Frames' />
            <h3>que trata de matarnos</h3>
            <img src={imagenes["Muffet"]} className='monsters' />
            <h3>pero no duro ni un <determinacion>golpe</determinacion></h3>
            <img src={imagenes["luto"]} className='monsters' />
          </div>
        ) : (
          <div>
            <h2> <valentia>Hotland</valentia></h2>
            <h3>Hotland es una región volcánica y calurosa, cubierta de tierra roja, marrón y naranja que tiene lava en el fondo</h3>
            <h3>al inicio de hotland  nos encontraremos un laboratorio y si entramos al laboratorio conoceremos a <justicia>Alphys</justicia>            </h3>
            <img src={imagenes["lab"]} className='Frames' />
            <h3>La científica real, que nos dirá que nos estuvo viendo todo nuestro camino como si fuera una serie y que se encariño con nosotros</h3>
            <img src={imagenes["Alphys"]} style={{ width: "5%", height: "7%" }} />
            <img src={imagenes["conocemos_alphys"]} className='Frames' />
            <h3>pero entonces llega <justicia>Mettaton</justicia> </h3>
            <img src={imagenes["Mettaton"]} className='monsters' />
            <img src={imagenes["conocemos_mettaton"]} className='Frames' />
            <h3>un robot creado por alphys con la finalidad de matar humanos y de entretenimiento, siendo el una estrella en el Underground</h3>
            <h3>mettaton se meterá en nuestro camino varias veces haciéndonos desafíos de cocina, puzzles, reportaje, etc            </h3>
            <img src={imagenes["preguntas"]} className='miniFrames' />
            <img src={imagenes["cocinando_con_un_robot_acecino"]} className='miniFrames' />
            <img src={imagenes["Mtt_News"]} className='miniFrames' />
            <img src={imagenes["Mtt_Musical"]} className='miniFrames' />
            <h3>tamben nos encontraremos con puzzles con una nueva mecanica ataques <valentia>naranjas</valentia> que no te hacen daño si te moves mientras los atravezas</h3>
            <img src={imagenes["ataques_naranjas"]} className='miniFrames' />
            <h3> y monstruos de la zona</h3>
            <img src={imagenes["Vulkin"]} className='monsters' />
            <img src={imagenes["tsunderplane"]} className='monsters' />
            <img src={imagenes["pyrope"]} className='monsters' />
            <img src={imagenes["Guardias_reales"]} className='monsters' />
            <h3>y al final de hotland nos encontraremos con <perseverancia>Muffet</perseverancia>            </h3>
            <img src={imagenes["Muffet_nos_atrapa"]} className='Frames' />
            <h3>Muffet nos ataca diferente al resto volviendo nuestra alma <perseverancia>morada</perseverancia> hacieno que devamos esquivar sus ataques sobre sus <perseverancia>telas de araña</perseverancia></h3>
            <img src={imagenes["Muffet"]} className='monsters' />
            <br />
            <img src={imagenes["alma_morada"]} className='monsters' />
          </div>
        )
        }
        {ruta == "Genocida" ? (
          <div>
          </div>
        ) : (
          <div>
            <h3>despues de enfrentarnos a Muffet veremos un hotel y al frente Sans</h3>
            <img src={imagenes["pre_cena_con_sans"]} className='Frames' />
            <h3>y él nos invitara a comer</h3>
            <img src={imagenes["cena_con_sans"]} className='Frames' />
            <h3>diciéndonos que la única razón por la que no nos ataco fue por que se lo prometió a una señora simpática del lado de las ruinas (<integridad>Toriel</integridad>) y si no fuera por ella estaríamos <determinacion>muertos al segundo de llegar snowdin</determinacion></h3>
            <img src={imagenes["sans_enojado"]} className='miniFrames' />
            <h3>luego se disculpa por ese comentario y se va            </h3>
            <h3>despues de salir del hotel entramos al Nucleo</h3>
          </div>
        )
        }

        {ruta == "Genocida" ? (
          <div>
            <h2><determinacion>Nucleo</determinacion></h2>
            <h3>el nucleo es una instalación de tecnología avanzada con algunos puzzles que proporciona electricidad para el subterráneo.
              y al final de este nos enfrentaremos a Mettaton
            </h3>
            <h3>que él al ver que eramos una <determinacion>amenaza</determinacion> para los monstruos y los humanos trata de detenernos activando se transformacion mas poderos <determinacion>Mettaton neo</determinacion></h3>
            <img src={imagenes["Mettaton_Neo"]} className='monsters' />
            <h3>pero lo matamos de un golpe
            </h3>
            <img src={imagenes["Mettaton_Neo_Muere"]} className='monsters' />
          </div>
        ) : (
          <div>
            <h2><paciencia>Nucleo</paciencia></h2>
            <h3>el nucleo es una instalación de tecnología avanzada con algunos puzzles que proporciona electricidad para el subterráneo.</h3>
            <img src={imagenes["entrada_nucleo"]} className='Frames' />
            <h3>aca Alphys nos sequira aydando con algunos puzzles pero no veriamos a Mettaton</h3>
            <img src={imagenes["alphys_ayuda"]} className='Frames' />
            <h3>pero si veriamos a los monstruos de la zona</h3>
            <img src={imagenes["Madjick"]} className='monsters' />
            <img src={imagenes["Knight Knight"]} className='monsters' />
            <img src={imagenes["Final_Froggit"]} className='monsters' />
            <img src={imagenes["Whimsalot"]} className='monsters' />
            <img src={imagenes["Astigmatism"]} className='monsters' />
            <h3>al final del Nucleo nos enfrentaremos a Mettaton y nos enteramos que en realidad todo esto estaba orquestado por alphys, ella queria caernos bien y entonces le pidio a Mettaton que se dejara vencer por ella y nosotros</h3>
            <img src={imagenes["descubrimiento"]} className='Frames' />
            <h3>pero él nos dijo que ya no hiba a permitir eso ya que queria nuestra alma para atravesar la barrera y ser una estrella pero para el mundo de los humanos            </h3>
            <img src={imagenes["batalla_con_mettaton"]} className='monsters' />
            <br />
            <img src={imagenes["Mettaton_batalla"]} className='monsters' />
            <h3> pero gracias a la info que nos dio alphys hacemos que mettaton se transforme en <justicia>Mettaton EX</justicia> </h3>
            <img src={imagenes["mettaton_swicht"]} className='monsters' />
            <img src={imagenes["Presentacion_mettaton_ex"]} className='monsters' />
            <img src={imagenes["mettaton_ex"]} className='monsters' />
            <h3>ahora mettaton es mas fuerte pero bajan sus defensas desarmandose durante la batalla</h3>
            <img src={imagenes["sin_brazos"]} className='monsters' />
            <h3>y tendremos que esquivar sus ataques mientras con nuestras acciones tratar de subir la audiencia de mettaton ya que cuando supere los <justicia>10 000</justicia> Mettaton parara la pelea para hablar con sus fans y se dara cuenta que el es lo unico que entretiene a los del Underground y se decide quedar </h3>
            <img src={imagenes["reflexion"]} className='monsters' />
            <h3>tras eso Mettaton <justicia>se quedo sin baterias</justicia></h3>
            <h3>pero si lo matamos o si lo perdonamos en ambos casos alphys llega y trata de ayudar a metaton(si <justicia>se quedo sin baterias</justicia> lo lleva a cargar y si lo <determinacion>matamos</determinacion> se pone triste) </h3>
            <img src={imagenes["alphys_al_recate"]} className='Frames' />
            <h3> ella nos cuenta que el alma de un humano no es suficiente para atravesar la barrera, devemos <determinacion>matar a ASGORE</determinacion> pero al hacer eso le quitaremos la esperanza a todos los monstruos</h3>
            <img src={imagenes["alphys_nos_dice_la_verdad"]} className='Frames' />
          </div>
        )
        }
        {ruta == "Genocida" ? (
          <div>
            <h2><determinacion>New Home</determinacion></h2>
            <img src={imagenes["new_home"]} className='Frames' />
            <h3>New Home es un lugar totalmente gris, ocupado por largos pasillos, y lo que parece ser una gran ciudad en el fondo</h3>
            <h3>donde flowey nos cuenta que que fue Asriel, el hijo de Asgore y Toriel, y que su mejor amigo, Chara (el primer humano en caer), quería liberar a los monstruos. Cuando Chara murió, Asriel absorbió su alma y cruzó la barrera, donde <determinacion>Chara</determinacion> le susurraba que atacara a los humanos para vengarse. Sin embargo, Asriel se negó a luchar, y aunque tenía el poder, prefirió regresar herido al subsuelo, donde murió. Revivido como Flowey sin emociones, comenzó a manipular el tiempo, pero ahora nos teme por nuestra <determinacion>despiadada determinación</determinacion>, incluso mayor que la suya.
            </h3>
            <img src={imagenes["habla_con_flowey"]} className='Frames' />
            <br />
            <img src={imagenes["miedo"]} className='Frames' />
            <h3>y escapa</h3>
            <h3>y llegamos al ultimo pasillo ahi nos encontraremos a Sans ya arto de nosotros nos pregunta: Si cualquiera puede cambiar si se propone, pensando en su hermano ya que él sí creía eso pero sans nos dice que el nunca creyo en eso y nos ataca con todo lo que tiene </h3>
            <img src={imagenes["pasillo"]} className='Frames' />
            <br />
            <img src={imagenes["Sans_en_pelea"]} className='monsters' />
            <br />
            <iframe src="https://jcw87.github.io/c2-sans-fight/" width="485" height="402"></iframe>
            <h3>sans es de los únicos que empieza atacando y con todo lo que tiene ademas de ser el único que esquiva nuestros ataques haciéndonos morir varias veces siendo esta la batalla más difícil del juego.</h3>
            <h3>pero cuando el no de mas nosotros al fin le podremos dar un golpe, el que lo matara</h3>
            <img src={imagenes["sans_muere"]} className='monsters' />
            <h3> y podremos seguir hasta llegar a Asgore          </h3>
            <img src={imagenes["Agore"]} className='monsters' />
            <h3>lo mataremos de un golpe y cuando estemos apunto de quedarse con su alma flowey la rompe</h3>
            <img src={imagenes["Asgore_muere"]} className='monsters' />
            <h3>y nos ruega para que no lo matemos que nos puede ser util</h3>
            <img src={imagenes["please_dont_kill_me"]} className='monsters' />
            <h3>y matamos a Flowey</h3>
            <img src={imagenes["flowey_dead"]} className='monsters' />
            <h3> en el vacio no habra nadie solo la soledad o esos pensamos porque nos encontramos con chara          </h3>
            <img src={imagenes["Chara"]} className='monsters' />
            <h3>que nos obligará hacer un trato con ella, ella nos dejara el mundo como estaba pero a cambio quiere nuestra alma y todo se recetea</h3>
            <img src={imagenes["chara_angry"]} className='monsters' />
            <h3><determinacion>Y ella destruye el mundo para que podamos regresar al comienzo y tener un mejor final</determinacion></h3>
            <h3><justicia>(para entender leer el otro modo)</justicia></h3>
          </div>
        ) : (
          <div>
            <h2><justicia>New Home</justicia></h2>
            <img src={imagenes["new_home"]} className='Frames' />
            <h3>New Home es un lugar totalmente gris, ocupado por largos pasillos, y lo que parece ser una gran ciudad en el fondo</h3>
            <h3>donde los monstruos nos contaran toda la historia de su príncipe Asriel y Chara</h3>
            <img src={imagenes["memory"]} className='miniFrames' />
            <h3> Un niño humano llamado Chara, cayó al subsuelo y fue adoptado por los Reyes Asgore y Toriel , volviéndose muy cercano a Asriel, el príncipe. Chara, cayó enfermo y como último deseo pidió que lo enterraran con las flores de su aldea entonces  Asriel absorbió su alma y obtuvo un gran poder tan grande que ahora podía cruzar la barrera, pero al llegar a la superficie, fue atacado por humanos. A pesar de tener el poder para vengarse, Asriel decidió no hacerlo y murió al regresar al subsuelo. Tras esto, el Rey Asgore juró vengarse de los humanos, lo que intensificó el conflicto entre ambos mundos y Toriel la reina se fue a las ruinas por la tristeza de haber perdido a sus 2 hijos y por la ira de la declaración de Asgore .</h3>
            <br />
            <h3>dandole de vuelta esperaza a todos los monstruos</h3>
            <img src={imagenes["history_NP_19"]} className='Frames' />

            <h3>y llegamos al ultimo pasillo ahi nos encontraremos a Sans que nos jusgara por nuestras acciones a base del <determinacion>EXP</determinacion> y el <determinacion>Love</determinacion> </h3>
            <img src={imagenes["pasillo"]} className='Frames' />
            <h3>ademas nos dira de la importancia de lo que pase cuando entemos con asgore ya que eso decidira el futuro de todos los monstruos y humanos</h3>
            <h3>y al fin nos encontramos con <determinacion>Asgore</determinacion> en la sala del trono</h3>
            <img src={imagenes["asgore"]} style={{ width: "10%", height: "14%" }} />
            <img src={imagenes["encuentro_con_asgore"]} className='Frames' />
            <h3>Aunque el juego siempre no lo muestra intimidante Asgore es un un monstruo amable que no quiere matarnos pero quiere liberar a su pueblo de una vez por todas y pelearemos contra él en la barrera</h3>
            <img src={imagenes["pre_de_la_pelea"]} className='Frames' />
            <img src={imagenes["Agore"]} className='Frames' />
            <h3>Asgore no dejará que lo perdonemos por que el destruyo esa opcion entonces si o si debemos atacar</h3>
            <img src={imagenes["Asgore_serio"]} className='Frames' />
            <img src={imagenes["break_mercy"]} className='Frames' />
            <img src={imagenes["break_mercy_part_2"]} className='Frames' />
            <h3>y cuando este en su punto mas devil podremos elegir entre <determinacion>matarlo</determinacion> o <justicia>perdonarle</justicia> </h3>
            <img src={imagenes["decicion"]} className='Frames' />
            <h3>pero no importa que decidamos Flowey lo <determinacion>matara</determinacion> y <determinacion>destruira su alma</determinacion> </h3>
            <img src={imagenes["Asgore_muere"]} className='Frames' />
            <h3> ademas absorbera las almas humanas            </h3>
            <img src={imagenes["absorber_neutral"]} className='Frames' />
            <h1><determinacion>cerrando el juego</determinacion></h1>
            <div style={{ backgroundColor: "black", color: "black", height: "1500px" }}></div>
            <h3>y cuando volvamos a entrar nos encontraremos a omega flowey</h3>
            <img src={imagenes["omega_flowey_1"]} className='Frames' />
            <br />
            <img src={imagenes["omega_flowey_2"]} className='Frames' />
            <br />
            <img src={imagenes["omega_flowey_3"]} className='Frames' />
            <br />
            <h3>que nos mata y resucita por diversión y seremos asesinados y revividos
            </h3>
            <img src={imagenes["omaga_flowey_kill_us"]} className='Frames' />
            <h3>hasta que las almas humanas deciden ayudarnos y le quitan a flowey sus poderes</h3>
            <img src={imagenes["omaga_flowet_lose"]} className='Frames' />
            <h3>pudiendo elegir si matar a flowey o perdonarlo</h3>
            <img src={imagenes["flowey_lose"]} className='Frames' />
            <h3>si lo perdonamos flowey nos dirá como hacer la ruta pacifista y si lo matamos el se reirá y dirá que al fin lo entendimos ESTE MUNDO ES MATAR O MORIR
              si no matamos a nadie y nos hicimos amigos de todos lo jefes flowey nos hagamos amigos de alphys </h3>
              <img src={imagenes["consejo"]} className='Frames' />

          </div>
        )
        }
                      <h3>si le hacemos caso y retrocedemos para ver a Alphys recibiremos una llamada de Undyne que nos dice que vallamos a a la casa de Papyrus y sans </h3>
              <img src={imagenes["llamada_Undyne"]} className='Frames' />
              <h3>y ahí nos da una carta para Alphys y quiere que se la demos como un favor</h3>
              <img src={imagenes["favor"]} className='Frames' />
              <h3> al alphys al leer la carta nos pide ayuda para practicar su cita con undyne              </h3>
              <img src={imagenes["cumplido"]} className='Frames' />
              <img src={imagenes["cita_alphys"]} className='Frames' />
              <h3>luego aparece undyne justo cuando alpphys practicava su confecion hacia ella escuchando todo y correspondiendolo a su manera</h3>
              <img src={imagenes["AxU"]} className='Frames' />
              <h3>y cuando alphys se va con undyne papyrus nos dice que cuidemos del laboratorio mientras alphys no esta</h3>
              <h3>y esa puerta estaba esta ves abierta cuando lleguemos al laboratorio ya que alphys quiere confrontar sus errores </h3>
              <img src={imagenes["entrar"]} className='Frames' />
              <h3>y cuando entramos llegaremos al verdadero laboratorio </h3>
              <img src={imagenes["verdadero _lab"]} className='Frames' />
              <h3>aqui nos encontraremos con monstruos que estaban medio muertos que fueron usados como conejillos de indias y se fusionaron entre ellos, alphys queria experimentar con la determinación pero salio muy mal y se crearon las amalgamas</h3>
              <img src={imagenes["amalgama_1"]} className='monsters' />       
              <img src={imagenes["amalgama_2"]} className='monsters' />       
              <img src={imagenes["amalgama_3"]} className='monsters' />       
              <img src={imagenes["amalgama_4"]} className='monsters' />       
              <img src={imagenes["amalgama_5"]} className='monsters' />       
              <h3>al final seremos rodeados por ellas</h3>
              <img src={imagenes["ataque_amalgama"]} className='Frames' />
              <h3>pero Alphys nos salvaria</h3>
              <img src={imagenes["salvados_del_ataque"]} className='Frames' />
              <h3>ahora cuando volvamos a luchar contra Asgore todos nuestros amigos vendran a salvarnos</h3>
              <img src={imagenes["reunidos"]} className='Frames' />
              <h3>pero llegaria Floey y nos etraparia</h3>
              <img src={imagenes["atrapados"]} className='Frames' />
              <h3>y sin poder hacer nada</h3>
              <img src={imagenes["perdicion"]} className='Frames' />
              <h3>seremos salvados por toriel</h3>
              <img src={imagenes["salvados_toreil"]} className='Frames' />
              <h3>y luego seremos salvados por nustros otros amigos</h3>
              <img src={imagenes["salvados_papyrus"]} className='Frames' />
              <img src={imagenes["salvados_undyne"]} className='Frames' />
              <img src={imagenes["salvados_asgore"]} className='Frames' />
              <img src={imagenes["salvados_alpgys"]} className='Frames' />
      <h3>y vendria todo el subsuelo para ayudar</h3>
      <img src={imagenes["reunion masiva"]} className='Frames' />
      <h3>pero</h3>
      <img src={imagenes["perdida_masiba"]} className='Frames' />
      <h3>Flowey los absorbio a todos</h3>
      <h3>convirtiendose en su verdadera forma</h3>
      <img src={imagenes["Asriel"]} className='Frames' />
      <br />
      <img src={imagenes["Asriel_Dreemurr"]} className='Frames' />atrapada
      <h3>ahora Asriel es invencible con una fuerza y defensa infinita lo único que evita que nos mate es nuestra determinación </h3>
      <img src={imagenes["dead"]} className='Frames' />
      <br />
      <img src={imagenes["me_reuso"]} className='Frames' />
      <h3> para ganarle debemos hacer reaccionar a nuestros amigos dentro de asriel y luego debemos hacer reaccionar a asriel</h3>
      <img src={imagenes["atrapada"]} className='Frames' />
      <h3>entonces Asriel liberara a los monstruos y destruirá la barrera </h3>
      <img src={imagenes["break_barrier"]} className='Frames' />
      <br />
      <img src={imagenes["barrera_rota"]} className='Frames' />
      <h3>y ahora todos somos libres y vamos a la superficie      </h3>
      <img src={imagenes["fin"]} className='Frames' />
      <br />


    
{ruta == "Genocida" ? (
          <div>
              <h3>o eso creias ¿no? por que si hacemos todo esto despues de hacer la ruta genocida esta ya no sera la pacifista si no la pos genocida ya que
      </h3>
      <img src={imagenes["posGenocida"]} className='Frames' />
      <h3> 
ella cumplio con su parte del trato ahora nos toca a nosostros =)
</h3>
<img src={imagenes["chara_angry"]} className='monsters' />
          </div>
        ) : (
          <div>
      <img src={imagenes["Pasifista_end"]} className='Frames' />
          </div>
        )
        }
      </center>
    </div>
  );
}

export default Mundo;