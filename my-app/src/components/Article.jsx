import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import DRButtons from "./DRButtons";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../DataBase";

import TitleLogo from "../files/Images/deltarune-title-logo.png";
import PlaceHolder from "../files/Images/placeholder.jpeg";

function Article() {
  const [content, setContent] = useState([]);
  const url = useParams().articulo;
  const prevUrl = useParams().categoria;

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "Deltarune", "Informacion");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data().categories.filter(obj => obj.name == prevUrl)[0].articles.filter(obj => obj.name.replace(/ /g, '_') == url)[0].content);
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
        setContent(null);
      }
    }
    fetchData();
  }, []);

  /*useEffect(() => {
    async function sendData() {
      try {
        setDoc(doc(db, "Deltarune", "Informacion"), {
          content: {
            title: "¿QUE ES?",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/cyber_city.gif?alt=media&token=5de0418f-5bbd-476f-95a9-89d6aebf06fc",
            text1: 'Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distinto por sus acciones. En su mayoría.'
            },
          categories: [
            {
              index: 1, name: "Capitulos", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch1_icon.png?alt=media&token=6f949a52-f319-4214-882f-4100d741f1dc", articles: [
                {
                  name: "Capitulo 1", miniDesc: "The Beginning", content: {
                    title: "Capitulo 1",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo1%2Fimagen_2024-11-03_151656298.png?alt=media&token=1aa2aa62-5691-44d4-80ef-fbe03d7dfb2d",
                    text1: 'El Capítulo 1 de Deltarune, también llamado The Beginning es la primera aventura en este juego. Fue lanzado el 31 de Octubre de 2018 y nos introduce a los aspectos principales y más importantes del juego.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo1%2Fimagen_2024-11-03_143348201.png?alt=media&token=adaea6d2-0654-4960-8c4d-4ea06e6951fb",
                    text2: 'Al comenzar el juego, la Introducción nos invita a crear un personaje, darle un cuerpo y una mente, luego nombrar al envase y dar el nombre del creador (el jugador, nosotros). Sólo para que al final, nuestra creación sea descartada, diciendo que "Nadie decide lo que es en este mundo", y despertamos en el cuerpo de Kris. Su madre, Toriel, nos dice que ya se está haciendo tarde y que hay que ir a la escuela, abre las cortinas y sale de la habitación.',
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo1%2Fimagen_2024-11-03_143506201.png?alt=media&token=71d7cc9b-fe1a-4d7b-961f-2aa1bf15b63b",
                    text3:'Podemos revisar la casa de Kris, al salir de ella, subiremos al auto de Toriel, mientras arrancan, empieza a sonar la música, y Toriel se pregunta si Asriel disfrutará de este pequeño pueblo después de haber estado en la universidad. Durante el camino a la escuela podemos ver a varios personajes que conocíamos de Undertale. Entramos a la escuela, Toriel nos da un abrazo de despedida, y vamos al salón de Alphys.',
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo1%2Fimagen_2024-11-03_143409495.png?alt=media&token=e5024ae7-1c2a-47db-b970-190b8e386cb0",
                    text4:'En algún momento de la noche, vemos que Kris se mueve en la cama, como que tuviera alguna pesadilla. Repentinamente salta fuera de ella, y avanza hasta el centro de la habitación dando pesados pasos. Sobre la alfombra adornada con la Runa Delta, Kris levanta el brazo lentamente, y se arranca el ALMA violentamente de su cuerpo. Cuando la tiene en su mano, se acerca a la jaula de pájaros que hay en la esquina de la habitación, y arroja el alma dentro de ella. Podemos mover el Alma dentro de la jaula, pero ya hemos perdido el control sobre Kris. Kris levanta su cuchillo y nos mira con su ojo rojo y brillante de forma amenazante.',
                  }
                },
                {
                  name: "Capitulo 2", miniDesc: "A Cyber's World", content: {
                    title: "Capitulo 2",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo2%2Fimagen_2024-11-03_151515386.png?alt=media&token=eb35688d-7f8f-4008-b79c-b6c54466af3e",
                    text1:'El Capítulo 2 de Deltarune, también llamado A Cyber´s World, es la segunda y actualmente última aventura jugable de Kris, Susie y Ralsei. Fue lanzado el 17 de septiembre de 2021.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo2%2Fimagen_2024-11-03_150947087.png?alt=media&token=f4b5a6cb-a101-47b0-81fe-44bf56b2db60",
                    text2:'Al comenzar el capítulo, cuando la pantalla aún está en negro, Toriel pregunta a Kris si está despierto, asustada, se da cuenta de que hay un cuchillo, y grita hasta que la pantalla se ilumina. Estamos en el cuarto de Kris, Toriel entra con una bandeja vacía en las manos, y le pregunta, furiosa, si de verdad se comió toda la tarta durante la noche. Sabía que fue Kris quien lo hizo porque su cuchillo estaba en la bandeja. Después de darse un manotazo en la cara, empieza a reírse, y se pregunta si tiene que poner candado en el horno otra vez. Sale de la habitación, y Kris se levanta. El ALMA está dentro de él y no en la jaula, en algún momento de la noche Kris debió ponérsela de nuevo. Podemos revisar la habitación otra vez, con algunas nuevas cosas que ver. Al salir de la casa, vamos con Toriel a la escuela sin mediar palabras.',
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo2%2Fimagen_2024-11-03_145614859.png?alt=media&token=ab438c44-1eee-47fe-a092-c08403d206ae",
                    text3:'Ralsei los recibe amablemente, se sentía realmente contento de que volvieran. Susie se da cuenta entonces de que Lancer no está, NADIE está ahí, sólo Ralsei. Él le pide que espere un rato, que tiene una sorpresa preparada. Y nos pide que volvamos al mundo de la luz, vayamos al salón viejo de la escuela, y traigamos todo lo que haya ahí. No nos queda más opción que salir del Mundo Oscuro otra vez. Vamos al salón sin uso, y Kris recoge todo lo que hay, incluso la alfombra. Lo lleva todo en una enorme bola polvorienta sobre su cabeza, y vuelve al Mundo Oscuro. Todos estos objetos se transforman en pequeñas estrellitas brillantes mientras vamos bajando. Cuando llegamos con Ralsei y Susie otra vez, el escenario se transforma completamente, y todos los personajes antes conocidos regresan.',
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/capitulo2%2Fimagen_2024-11-03_151106571.png?alt=media&token=210db8c2-5f78-4770-bdc3-0315ae8154e4",
                    text4:'Mientras bajamos hacia este nuevo mundo, algo sale volando del inventario de Kris. La apariencia del lugar es bastante diferente. Avanzan por este extraño lugar. Escuchan a Noelle pidiendo ayuda. Resulta que ella también cayó a este Mundo Oscuro. Cuando ve a Susie, le dice que huya antes de que sea demasiado tarde. Entonces, Noelle es encerrada en una jaula y llevada lejos. Aparece una mujer riendo con maldad, y se presenta. Es número serial 5U4EX7YY2E9N, o mejor conocida como la Reina.',
                  }
                }]
            },
            {
              index: 2, name: "Personajes", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch2_icon.png?alt=media&token=6cebb19b-d950-417d-8c05-5e69ccc0107d", articles: [
                {
                  name: "Kris", miniDesc: "Sólo eres tú.", content: {
                    title: "Kris",
                    image1:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/kris%2Fimagen_2024-11-03_153550764.png?alt=media&token=27c68e02-5eab-4f24-86c6-cbd67f7c7ffa",
                    text1:'Kris es el protagonista principal del videojuego Deltarune, el Héroe de la Luz humano y además el líder de los Guerreros Delta. Es el personaje que el jugador puede controlar, aunque no totalmente.',
                    image2:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/kris%2Fimagen_2024-11-03_152123634.png?alt=media&token=bd769e54-3ab1-4cc6-bed6-762e6afea497",
                    text2:'Kris es un humano que aparece inicialmente con el cabello castaño rojizo desordenado y un tono de piel amarillento o dorado. Lleva puesta una camisa de manga larga color verde limón con una sola franja amarilla horizontal y pantalones y zapatos del mismo color que su cabello.',
                    image3:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/kris%2Fimagen_2024-11-03_174334962.png?alt=media&token=40130a49-d601-45a7-8a2e-3f366bb2e957",
                    text3:'Kris es visto por primera vez cuando Toriel lo despierta para ir a la escuela. Al salir de casa, Toriel nos llevará a la escuela. Kris llegó tarde a la clase, ya todos habían hecho equipo para el siguiente proyecto grupal. Cuando Susie llega al salón, Alphys, su maestra, los pone como compañeros de equipo. Después de eso, Alphys se da cuenta de que no hay tiza para comenzar la clase, así que envía a Susie y a Kris a buscar tiza en el armario de suministros. En el pasillo, Kris ve a Susie comer una tiza. Ella se da cuenta y se acerca a Kris de forma amenazante, lo golpea contra los casilleros y amenaza con comerse su cara. Decide no hacerlo porque piensa que Toriel es una buena madre, y le dolería tener que enterrar a su hijo. Ambos se van al armario, sin embargo, al abrir la puerta, los pasillos oscurecen. A pesar de todo, entran al armario, pero no hay paredes, ni interruptor de luz, cuando se disponían a salir de ahí, el suelo desaparece y caen al Mundo Oscuro.',
                    image4:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/kris%2Fimagen_2024-11-03_153625851.png?alt=media&token=43a039fa-30a9-446c-80a7-fe5e1923778d",
                    text4:'Todos los personajes tienen opiniones variadas de Kris, pareciéndole espeluznante a algunos, y alguien agradable a otros. En el Mundo Oscuro, Kris es visto como un líder. Ralsei, Susie y Noelle acatan sus órdenes en batalla y le siguen por todo el mundo, con algunas excepciones. Susie y el Rey se refieren a Kris como una "persona callada", igualmente todos están acostumbrados a que Kris no converse mucho. La Reina dice que es de "vibras relajadas", que mantiene la calma pese a las circunstancias, y casi nunca parece sorprenderse o asustarse ante circunstancias en las que todos los demás se muestran alterados. Berdly suele burlarse de Kris y lo trata como a un tonto, aunque sea el Nº3 de la clase, Alphys dice que es muy buen estudiante, una estrella en la clase.',
                  }
                },
                {
                  name: "Susie", miniDesc: "No te molestes en responder. Por si aún no te has dado cuenta... Tus decisiones no importan.", content: {
                    title: "Susie",
                    image1:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/susie%2Fimagen_2024-11-03_163722029.png?alt=media&token=ec8f8cb0-04fb-488c-ad0e-d4829b5208db",
                    text1:'Susie es una protagonista en Deltarune, la héroe monstruo de la profecía, compañera de clase y amiga de Kris.',
                    image2:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/susie%2Fimagen_2024-11-03_163743240.png?alt=media&token=677e63a6-8eb8-4be9-835f-27ada4d90e50",
                    text2:'Susie es un monstruo alto, con un aspecto vagamente similar a un reptil o caballo. Tiene pecas en ambos lados de su cara. Su cabello es color berenjena o morado rojizo oscuro despeinado, su piel es de un púrpura ligeramente rosado. Viste con una chaqueta morado azulado, una camiseta blanco con azul claro, unos pantalones azules rotos, y un par de zapatos negros.',
                    image3:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/susie%2Fimagen_2024-11-03_163714805.png?alt=media&token=fff4b7b3-caeb-42a2-b5b9-09abe507c738",
                    text3:'Sabemos que desde que llegó a la escuela, Susie ha tenido un comportamiento problemático, Nadie puede afirmar que ha visto a Susie golpeando a alguien, pero sabemos gracias a Noelle Holiday que Kris se llevaba bien con Susie. No sabemos por qué pudo haber sido esto o si la relación pudo haber cambiado en algún punto antes del inicio del juego. Al parecer, la única persona con la que Susie no se metía era con Noelle, pues en su primer día de clases, Noelle le había prestado uno de sus lápices y Susie aceptó este gesto.',
                    image4:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/susie%2Fimagen_2024-11-03_163730398.png?alt=media&token=1f1a0735-960f-4cb3-a2b6-ab6c7b5b219c",
                    text4:'Susie aparece por primera vez cuando Kris estaba buscando un compañero para el proyecto grupal. Apenas llega, Alphys la pone como compañera de Kris. Como ya todos tenían compañero, Alphys se dispone a empezar la clase, pero entonces se da cuenta de que no hay tiza. Manda a Susie a buscar la tiza en el armario de suministros, y ella sale del aula. En medio pasillo, saca una tiza de su bolsillo y se la come de un bocado, voltea y se da cuenta de que Kris estaba ahí. Le pregunta si vio algo, pero no recibe respuesta. Susie se enojó. estuvieron hablando. Decide no hacerlo por pensar en la madre de Kris, Toriel, a quien considera una buena madre. Ambos van hacia el armario de suministros, al abrir la puerta, los pasillos oscurecen. A pesar de esto, entran a buscar la tiza. Dentro del armario estaba totalmente oscuro, buscan un rato, no hay interruptor de luz, ni siquiera paredes. Cuando se acercaban a la puerta, ésta se cierra repentinamente y el suelo desaparece, haciendo a Susie y a Kris caer al Mundo Oscuro.',
                  }
                },
                {
                  name: "Ralsei", miniDesc: "¡Espero que podamos ser buenos amigos!", content: {
                    title: "Ralsei",
                    image1:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ralsei%2Fimagen_2024-11-03_164310697.png?alt=media&token=2ef00a39-242c-40a2-9fd5-a415004ef7b7",
                    text1:'Ralsei es uno de los protagonistas principales del videojuego Deltarune, es el príncipe de la oscuridad de la profecía y el primer habitante de Castle Town.',
                    image2:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ralsei%2Fimagen_2024-11-03_164326545.png?alt=media&token=4a8e97b1-84e0-4f7a-bdac-ab2ff2d28325",
                    text2:'Ralsei es el príncipe del único Mundo Oscuro con una Fuente de Oscuridad pura. A pesar de ser un príncipe, nunca tuvo súbditos, de hecho, estuvo toda su vida solo, esperando la llegada de los héroes de la leyenda, Kris y Susie.',
                    image3:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ralsei%2Fimagen_2024-11-03_164332027.png?alt=media&token=47c5a1d1-c115-4dc2-af00-b4d4a6e1d4a2",
                    text3:'Ralsei presenta una actitud muy amigable y simpática, en toda la aventura incentiva a Kris a ser lo más amable posible, piensa que las cosas pueden resolverse sin necesidad de violencia y trata de ayudar a todos los que pueda con consejos y lecciones. Nos ha dicho que llevaba esperando toda su vida sólo hasta conocer a Kris y a Susie. Es por eso que siempre está tan contento de volver a vernos y se siente muy feliz de ser nuestro amigo.',
                    image4:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ralsei%2Fimagen_2024-11-03_164336135.png?alt=media&token=edee3be3-7e34-4206-b6df-7a292cf6d7df",
                    text4:'Ralsei aparece por primera vez en su castillo, usando una capucha. Cuando Kris y Susie llegan con él, les da la bienvenida y les pide que escuchen una leyenda. Después de escucharla, nos dice que nosotros (Kris, Susie y él mismo) son los héroes de la leyenda. Entonces llega Lancer, envía lejos a Ralsei golpeándolo con su bicicleta y Kris y Susie tienen su primera batalla. Tras derrotar a Lancer, Ralsei regresa, se quita la capucha y se presenta correctamente. Como a Susie realmente no le importa nada de lo que suceda, se va sola para tratar de regresar a la escuela. Kris y Ralsei hacen equipo y se encaminan a buscar a Susie. Antes de cruzar la gran puerta, Ralsei ofrece a Kris un pequeño tutorial para el combate.',
                  }
                },
                {
                  name: "Lancer", miniDesc: "¡Soy...! El tipo malo.", content: {
                    title: "Lancer",
                    image1:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/lancer%2Fimagen_2024-11-03_164739010.png?alt=media&token=02a76d33-a695-48e7-bfe9-5b4d700b157c",
                    text1:'Lancer es un personaje en Deltarune. Es antagonista durante el comienzo de la aventura y amigo durante la mayor parte de ésta.',
                    image2:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/lancer%2Fimagen_2024-11-03_164749234.png?alt=media&token=06667cd8-d638-43f3-bdef-6df44009ac40",
                    text2:'Lancer usa una capucha azul oscuro que protege sus ojos, formando la forma de una pica o espada (♠) en su cara. Su ropa tiene un emblema azul en forma de pica en el frente, y su gran lengua es de un tono azulado, la cual a menudo cuelga de su boca. Como su padre, tiene la piel blanca y un cuerpo redondo. Según Kris, es difícil distinguir el cuerpo de Lancer de su ropa.',
                    image3:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/lancer%2Fimagen_2024-11-03_164754330.png?alt=media&token=22b51db5-38fe-4476-9673-44b786494c55",
                    text3:'Lancer es bastante infantil, y a menudo presenta un comportamiento algo inmaduro. Se lleva bastante bien con Susie y admira su forma de intimidar. Los súbditos del Rey no soportan a Lancer, pero cuando éste se convierte en el nuevo rey, se dan cuenta de que puede ser muy bueno en esto.',
                    image4:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/lancer%2Fimagen_2024-11-03_171539032.png?alt=media&token=7532a66e-513f-4e42-955f-021afb7f294c",
                    text4:'Lancer aparece por primera vez en la ?????? zona, como una sombra misteriosa. Cuando Kris se encuentra con Susie, él los sorprenderá y los atacará con una lluvia de picas, hasta que logran escapar. Más adelante, irrumpe en el castillo de Ralsei, lo golpea con su bicicleta y lo manda a volar. Se presenta a Kris y a Susie como el tipo malo, que evitará que ellos vayan a sellar la Fuente de la Oscuridad de su mundo. Se enfrenta a ellos en la primera batalla de la aventura. Poco después, se va.',
                  }
                },
                {
                  name: "Noelle", miniDesc: "Este... extraño mundo... esta enorme ciudad... Es tan alocado... como que me hace dar vueltas la cabeza.", content: {
                    title: "Noelle",
                    image1:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/noelle%2Fimagen_2024-11-03_170804175.png?alt=media&token=c523f9da-fc8e-4c4b-9fe4-522c57987642",
                    text1:'Noelle es una personaje en Deltarune. Es amiga y compañera de clase de Kris y cobra un papel muy importante en el Capítulo 2.',
                    image2:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/noelle%2Fnoelle.png?alt=media&token=f6dada48-0367-4b6b-b78b-a8cd07bbd2b2",
                    text2:'Noelle es una monstruo ciervo, tiene el pelo rubio y su piel es color canela. En Hometown, viste una camisa morada con cuadrados verde y rojo cuyas mangas terminan en blanco y una falda morada.En el Mundo Oscuro, su piel y su cabello se vuelven más claros. Viste un largo vestido/blusa blanco ligeramente cian.',
                    image3:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/noelle%2Fimagen_2024-11-03_170756629.png?alt=media&token=dd168179-49a7-48c0-9514-1281e5e247bb",
                    text3:'Noelle es una chica muy inteligente, siendo considerada la "segunda mejor de la clase" superada por Berdly, a quien ayuda a estudiar. También es muy amable, siempre dispuesta a ayudar a sus amigos y esperando lo mejor de todos. También muestra ser algo tímida y miedosa, según su padre, tiene miedo de muchas cosas. A pesar de ser muy asustadiza, también puede ser un poco irritable y defensiva. Ella es muy poderosa, pero se siente débil y desconoce sus habilidades.',
                    image4:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/noelle%2Fberdlyfinal_2x.gif?alt=media&token=1e9e30cd-c831-4312-a14c-99b183c31962",
                    text4:'Noelle ha vivido en Hometown, junto a la casa de Kris, durante toda su vida. Ya que los padres de ambas familias, Rudy y Asgore fueron compañeros de universidad y amigos, las familias Holiday y Dreemurr se hicieron bastante cercanas. Noelle solía pasar el rato con su hermana mayor Dess y sus vecinos Kris y Asriel.',
                  }
                },
                {
                  name: "Berdly", miniDesc: "¡Es LORD Berdly para ustedes simplones!", content: {
                    title: "Berdly",
                    image1:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/berdly%2Fimagen_2024-11-03_175330300.png?alt=media&token=19c63ca5-4834-464f-aa81-09dabe770f95",
                    text1:'Berdly es un personaje en Deltarune. Es compañero de clase de Kris y cobra un papel muy importante en el Capítulo 2.',
                    image2:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/berdly%2Fimagen_2024-11-03_175646588.png?alt=media&token=05117104-c4e8-43f8-b4e5-66f2af6ee934",
                    text2:'Berdly es arrogante durante la mayoría del tiempo, a veces también es sarcástico. Trata a varios de sus compañeros como tontos y es el Nº1 de la clase. Suele presumir de su éxito e inteligencia, y disfruta de sentirse superior a los demás. Sin embargo, él en realidad es bastante tonto e inseguro, y su éxito lo ha tenido por la ayuda de Noelle.',
                    image3:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/berdly%2Fcamp_fire5_en-i1pyKBJ9BRgjP1OS.gif?alt=media&token=4ba2f788-ab5e-4853-a94b-2a10d6e83af5",
                    text3:'Según nos cuenta Berdly, en el pasado solía ser un pájaro muy fácil de olvidar, que muchos ni siquiera recordaban su nombre. Esto cambió un día que hubo un concurso de deletreo en la escuela, evento para el que él y Noelle se habían preparado mucho. Noelle falló una palabra, y Berdly se llevó la victoria. Esto hizo a Berdly conocer la sensación de ser más inteligente, más exitoso, alguien superior. A partir de aquel día, Berdly fue reconocido por sus excelentes calificaciones y su inteligencia, sin embargo, no se sentiría del todo contento, ya que ese éxito lo ha tenido gracias a Noelle, quien siempre lo ha ayudado a estudiar, y no obtiene el reconocimiento que se merece.',
                    image4:"https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/berdly%2Fimagen_2024-11-03_175638968.png?alt=media&token=6ba329e5-e3d5-43db-abd1-744c2269cb0a",
                    text4:'Está tan obsesionado con la Reina y su futuro ideal que, con ayuda de Sweet Cap´n Cakes, construye una enorme estatua de su grandeza y de la Reina. La encuentra junto con Kris en cierta parte de la ciudad, y cuando se va de ahí, piensa que la Reina lo está siguiendo. Después se dio cuenta de que la perdió otra vez.',
                  }
                }]
            },
            {
              index: 3, name: "Jefes", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch3_icon.png?alt=media&token=14386d5e-043c-4bf7-b393-c438b9d02146", articles: [
                {
                  name: "Rey", miniDesc: "Para mi gente, soy un héroe... ¿Para ustedes? ¡¡¡SOY EL TIPO MALO!!!", content: {
                    title: "Rey",
                    image1:"",
                    text1:'El Rey es el antagonista y jefe final del Capítulo 1 de Deltarune.',
                    image2:"",
                    text2:'El Rey tiene una capa negra, sus ojos no se pueden ver, tiene una corona brillante y grande y una boca en el estomago, de donde sale una pica que usa para luchar. Su piel es blanca y al final de la mano es azul, al igual que sus Pies. Es grande y redondo, igual que su hijo Lancer. Tras ser derrotado, su capa se va volando.',
                    image3:"",
                    text3:'Antes, el Rey gobernaba junto a otros tres reyes, cada uno de los cuarto representando un símbolo de la baraja de naipes. Cuando el Caballero llegó a su mundo y creó su Fuente de la Oscuridad, el Rey encerró a sus compañeros, se puso a él ya su hijo como nuevos gobernantes, y planeó apoderarse del mundo de la luz, hacer que la oscuridad gobierne y hacerles saber a los Iluminados lo que es vivir en desesperación.',
                    image4:"",
                    text4:'Cuando Kris, Susie y Ralsei llegan a la cima del Castillo de Cartas, Lancer se encuentra dialogando con el Rey, y trata de convencerlo de que no es necesario luchar contra los Iluminados. El Rey se mantiene aferrado a su idea de acabar con ellos y su mundo, y reprende a su hijo por haberse dejado envenenar con la falsa amabilidad que la escoria que son los Iluminados le han dado. Susie interfiere, el Rey los amenaza con arrojar del castillo a su hijo. Lancer le arroja una pica y escapa, y comienza la batalla final.',
                  }
                },
                {
                  name: "Reina", miniDesc: "Solo Quiero Hacer A Todos Sonreir Y Si Tengo Que Volverme Una Malvada Villana Para Conseguirlo ¿Es Eso Malo?", content: {
                    title: "Reina",
                    image1:"",
                    text1:'Número serial Q5U4EX7YY2E9N, mejor conocida simplemente como la Reina es un personaje que aparece por primera vez en el Capítulo 2 de Deltarune, y es la antagonista principal de este capítulo.',
                    image2:"",
                    text2:'Al ser la Reina una computadora, no entiende los sentimientos de las otras personas completamente. Tiene intenciones nobles, al querer usar el poder de la oscuridad para crear un mundo ideal en el que nadie deba sufrir, pero sus planes los lleva a cabo de una forma fría y dura. Es muy firme en sus intenciones, lo que la lleva a manipular o forzar a los demás. Además, es muy materialista, y cree que puede hacer a todos felices simplemente dándoles los objetos que quieran, tal vez con la excepción de Noelle Holiday.',
                    image3:"",
                    text3:'Viste un ajustado traje negro que sólo le cubre el torso, que tiene en el pecho y hombros de color azul brillante. Además, usa tacones negros y guantes azules. En lugar de ojos tiene una pantalla, a través de la cual expresa en ocasiones la emoción o sensación que tenga en ese momento.',
                    image4:"",
                    text4:'La primera vez que la vemos es en el campo cibernético, justo cuando se lleva a Noelle, aparece con una risa malvada en su trono volador. Casi no quiere hablar porque quiere ir directo a su plan, pero Susie hace que nos diga sus intenciones de utilizar a Noelle para convertir su cara en un robot y dominar el mundo a través de la oscuridad, y nos dejará a luchar contra un par de Werewires. Más tarde, la volvemos a ver en otra parte del campo cibernético, mientras trataba de hacer que Noelle se convirtiera en su peón, aquí nos pone un minijuego al estilo de la saga de videojuegos Punch-Out! y tras ganar nos dice que seamos sus peones, cosa a la que nuestro equipo se niega, y la Reina cambia nuestras preferencias a "Perecer". A través de un puzzle nos hace firmar un contrato para ser sus peones, pero no tiene efecto alguno en realidad. Al final del campo cibernético el equipo llegará a una montaña rusa, subidos cada uno en carros distintos. Aquí aparece la Reina para tratar otra vez de convencernos de unirnos a ella, y tiene como nuevos aliados a Noelle y a Berdly, y tendremos que luchar contra éste último, tras vencer, la Reina nos dará un advertencia de que la Montaña Rusa no estaba terminada aún, se va riendo y nuestro equipo sale disparado al basurero de la Ciudad.',
                  }
                },
                {
                  name: "Jevil", miniDesc: "¡¡AHORA, AHORA!! ¡¡QUE LOS JUEGOS COMIENCEN!!", content: {
                    title: "Jevil",
                    image1:"",
                    text1:'Jevil es el jefe secreto del Capítulo 1 de Deltarune.',
                    image2:"",
                    text2:'Jevil es un bufón de piel pálida, orejas puntiagudas, ojos triangulares y una sonrisa que expresa locura. Usa una ropa clásica de bufón, de color morado en su mayoría, cuello color amarillo y verde limón, sus zapatos son del mismo color. Tiene una cola con forma de J y una especie de capa negra. Su gorra se divide en dos, una parte negra y otra morada, con pequeños cascabeles amarillos en las puntas.',
                    image3:"",
                    text3:'Jevil tiene una actitud bastante sádica, loca y burlona, y muchas veces habla de forma metafórica. Le encanta el CAOS y jugar a una batalla a muerte. Tiene una extraña forma de ver el mundo: Piensa que todo es un juego, y que él es el jugador; piensa que todos están encerrados, y que él es el único libre; toma un combate a muerte como un simple juego.',
                    image4:"",
                    text4:'Seam nos cuenta que, hace algún tiempo, Jevil era el Bufón de la Corte, y también era amigo de Seam, quien en ese entonces era el Mago de la Corte. Sin embargo un día, Jevil conoció a una persona extraña, que se presume que es el Caballero y, a partir de ese día, Jevil se volvió loco. Seam dice que las extrañas palabras del bufón hicieron que tenga una visión del Mundo Oscuro... más oscura. En palabras de Jevil, el solo quería jugar un juego, pero los reyes pensaron que ese juego era muy peligroso. Este juego seguramente se trataba de pelear a muerte contra todos en el reino. Por esto, los reyes encerraron a Jevil, aunque él piensa que encerraron a su raza entera, dejándolo solo en una pequeña libertad.',
                  }
                },
                {
                  name: "Spamton", miniDesc: "DESPUÉS DE TODO, ¡TÚ QUIERES SER UN [Big Shot]! ¡¡EAHAHAHAHAA!!", content: {
                    title: "Spamton",
                    image1:"",
                    text1:'Spamton es un personaje y jefe del Capítulo 2 de Deltarune, un jefe secreto con solo un encuentro obligatorio. Al igual que el jefe secreto del Capítulo 1, se requiere todo un proceso para llegar a su batalla secreta.',
                    image2:"",
                    text2:'Spamton tiene la forma de un muñeco, es de baja estatura y tiene una larga nariz que recuerda fácilmente a los Addisons y su piel es de color blanco. Viste un traje formal color negro, su peinado es corto y de color negro, lleva puesto unos lentes color rosa y amarillo. Su vestidura parece estar basada en la de Swatch, ya que el mismo menciona que algunas personas intentaron copiarse de su apariencia. Es un muñeco de ventrílocuo clásico.',
                    image3:"",
                    text3:'Similar al jefe secreto del Capítulo 1, Spamton habla siempre en mayúsculas, pero otra cosa que destaca de su forma de hablar es su uso de "enlaces", pues en muchas ocasiones algunas de las cosas que dice están entre [[corchetes dobles]], y a veces estos "enlaces" dicen "[[Hyperlink blocked]] ([[hipervínculo bloqueado]])". A veces suele hablarnos de el año 1997 y de un tipo llamado "Mike" quien Spamton asegura que es un criminal visto en TV. Igual que el jefe secreto anterior, a Spamton se le puede considerar un loco.',
                    image4:"",
                    text4:'Con frecuencia este personaje nos habla de aceptar una oferta, y algunos de sus ataques se relacionan con el dinero, por lo que se da a entender que es un hombre de negocios; esto se hace notar más cuando nos enteramos de su historia, que habla de cómo Spamton cayó en la bancarrota al perder a un valioso contacto, y terminó viviendo en la basura; por esto último es que lo encontramos en tachos de basura, la zona de basura o el abandonado piso subterráneo de la mansión de la Reina.',
                  }
                }]
            },
            {
              index: 4, name: "Localizaciones", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch4_icon.png?alt=media&token=560a85ac-a37a-40ad-9037-0635c4b8f4cf", articles: [
                {
                  name: "Hometown (Mundo de Luz)", miniDesc: "El inicio", content: {
                    title: "Hometown (Mundo de Luz)",
                    image1:"",
                    text1:'Hometown es el pueblo en el que vive Kris y muchos otros personajes, aparece en el epílogo de Deltarune. Se puede explorar prácticamente todo el pueblo al final de cada capítulo.',
                    image2:"",
                    text2:'ometown es un pueblo relativamente pequeño. Sus calles son de un gris casi morado, las veredas son gris pálido, por todos lados hay pasto verde claro y árboles espesos, color naranja de otoño.',
                    image3:"",
                    text3:'Ya que Hometown es el hogar de Kris y todos sus conocidos, nuestra historia comienza en este lugar. Kris despierta en su casa, Toriel lo lleva a la escuela, en el camino veremos a varios de los monstruos, quienes nos saludarán emocionados. Al llegar a la escuela Kris y Susie van al armario de suministros y caen al Mundo Oscuro.',
                    image4:"",
                    text4:'En el siguiente capítulo, vamos a la escuela rápidamente, y no veremos el camino a la escuela. Después de salir de clases, Kris y Susie volverán al mundo oscuro en el armario de suministros de su escuela. Pero, poco después, se verán obligados a salir de ahí para hacer su proyecto grupal. Van a la biblioteca, donde encuentran otro mundo oscuro, y saltan a esta nueva aventura.',
                  }
                },
                {
                  name: "Mundo(s) Oscuro(s)", miniDesc: "LA OSCURIDAD", content: {
                    title: "Mundo(s) Oscuro(s)",
                    image1:"",
                    text1:'El Mundo Oscuro es la zona en la que se desarrollan la mayoría de eventos en Deltarune. Existen varios mundos oscuros a lo largo de nuestra aventura, cada uno con su propia Fuente de la Oscuridad que le da poder y vida.',
                    image2:"",
                    text2:'En un principio, este mundo es aterrador, y se siente totalmente desierto y en ruinas. El cielo es totalmente negro, al fondo se ven algunas rocas o pilares caídos. Las rocas son de color morado pálido o gris, y parece que flotaran sobre una nada de oscuridad infinita. Hay varios agujeros de los que brota un líquido viscoso y negro, marcas de ojos, bultos blancos polvorientos... Después de la primera persecución, no podremos volver a esta zona.',
                    image3:"",
                    text3:'Tanto el Reino de Cartas como el Mundo Cibernético son mundos creados por alguien conocido como el Caballero. Las Fuentes de la Oscuridad que ha forjado hacen fallar el equilibrio entre luz y oscuridad, así que deben ser selladas. No se sabe quién es el Caballero o por qué crea estas fuentes. Probablemente lo descubramos en el último capítulo.',
                    image4:"",
                    text4:'El pueblo de Castle Town es bastante pequeño, y en un inicio, está vacío. Parece haber varias casas pequeñas, negras, con detalles en azul brillante, pero no se puede acercarse a ellas. En el centro hay 4 pequeños locales: Una tienda de objetos, una tienda de armas, una posada y una con un ? encima. Los cuatro están cerrados, y no hay nadie dentro.',
                  }
                }]
            },
            {
              index: 5, name: "Mecanicas", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch5_icon.png?alt=media&token=06f508f4-77a8-494e-a23d-019f9438127d", articles: [
                {
                  name: "SAVE", miniDesc: "Aveces, la ves parpadeando. Aquella luz que sólo tú puedes ver. Por segunda naturaleza, te acercas y... [Archivo Salvado]", content: {
                    title: "SAVE",
                    image1:"",
                    text1:'El SAVE, conocido como punto de guardado en español, es la mecánica principal de gameplay de los videojuegos Deltarune y UNDERTALE.',
                    image2:"",
                    text2:'Aparece como una luz destellante, como una estrella de cuatro puntas y de color blanco o plateado, que ilumina más que todo en la habitación. Gira en sentido horario, se encoje y agranda constantemente.',
                    image3:"",
                    text3:'Puedes encontrártela en diversos puntos del Mundo Oscuro, sobre todo en salas anteriores o posteriores a eventos especiales. Se encarga de guardar el progreso que llevamos en el juego, y poder luego volver a ese punto. A partir del Capítulo 2, en este punto también se pueden ver otras cosas como el Almacenamiento y la Lista de reclutas. Y podemos guardar nuestra partida en diferentes espacios (hay 4 en total), esto resulta útil si queremos ver varias posibilidades a partir de un punto específico de la aventura.',
                    image4:"",
                    text4:'Hay veces en las que la partida se guarda automáticamente al pasar por puntos determinados, cosa que no sucedía en UNDERTALE. Cabe destacar que si cerramos o salimos de la partida, al volver no estaremos en esos puntos sino en el último punto de guardado manual.',
                  }
                },
                {
                  name: "ALMA", miniDesc: "Sientes como si tu ALMA brillara.", content: {
                    title: "ALMA",
                    image1:"",
                    text1:'El ALMA es la esencia misma del ser que lo posee. Desempeña un papel crucial en la progresión y la trama de Deltarune. Un alma adquiere la forma de un corazón, y la nuestra es de color rojo brillante.',
                    image2:"",
                    text2:'El ALMA puede moverse a través de los menús, tanto en batalla como en overworld. Con nuestra ALMA podemos elegir las acciones de nuestro equipo en batalla, revisar o utilizar objetos que tengamos en nuestro inventario, revisar y cambiar el armamento de nuestro equipo, o ver sus estadísticas.',
                    image3:"",
                    text3:'En batalla, el ALMA puede moverse dentro del tablero de balas, y debe evitar los golpes del enemigo. Si el ALMA es golpeada, los puntos de vida de nuestro equipo bajarán. Si la vida de todos llega a 0 o menos, el ALMA se rompe, y tendremos que volver a intentarlo, desde el último punto en que nuestro progreso fue salvado. También, existe la habilidad de pastar los ataques, es decir, pasar cerca de las balas sin dejarse tocar. Si lo hacemos correctamente, conseguiremos TP.',
                    image4:"",
                    text4:'Cuando llegamos a una Fuente de la Oscuridad, Kris se parará frente a está y nuestra ALMA brillará, sellando la fuente. Es decir, el ALMA es elemental para sellar estas fuentes y restaurar el equilibrio entre luz y oscuridad.',
                  }
                },
                {
                  name: "SURVEY_PROGRAM (Introduccion)", miniDesc: "¿ESTAS AHI? ¿ESTAMOS CONECTADOS?", content: {
                    title: "SURVEY_PROGRAM (Introduccion)",
                    image1:"",
                    text1:'Introducción (también conocida como Encuesta) es la parte inicial de Deltarune. Se hacen varias preguntas con el propósito de crear un "Recipiente" para el mundo de Deltarune e identificar a su creador.',
                    image2:"",
                    text2:'La introducción se reproduce una vez hasta que el juego se guarda por primera vez. Solo se puede reproducir en un nuevo archivo de guardado.',
                    image3:"",
                    text3:'Una vez que se descarta a la creación, cada archivo guardado aparece con el nombre del creador en el guardado.',
                    image4:"",
                    text4:'Curiosamente, los únicos nombres que causan la respuesta de "coincidencia interesante" son los personajes que se encuentran en Hometown. Los personajes que solo aparecen en Undertale, pero no aparecen y / o se mencionan en Deltarune (como Grillby o Mettaton) no tienen una respuesta especial (excepto Papyrus, aunque se alude a él), ni los personajes que solo aparecen en el mundo oscuro (como Lancer o Ralsei).',
                  }
                }]
            }
          ]
        });
      }
      catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    }
    sendData();
  }, []);*/

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
              {content == null ? (<h3>Pero no vino nadie.</h3>)
                : (
                  <>
                    <h1 className="title">{content.title}</h1>
                    <img src={content.image1} style={{ width: "500px", margin: "10px", maxWidth: "100%" }} />
                    <p style={{ fontSize: "120%" }}>{content.text1}</p>
                    <img src={content.image2} style={{ width: "500px", margin: "10px", maxWidth: "100%" }} />
                    <p style={{ fontSize: "120%" }}>{content.text2}</p>
                    <img src={content.image3} style={{ width: "500px", margin: "10px", maxWidth: "100%" }} />
                    <p style={{ fontSize: "120%" }}>{content.text3}</p>
                    <img src={content.image4} style={{ width: "500px", margin: "10px", maxWidth: "100%" }} />
                    <p style={{ fontSize: "120%" }}>{content.text4}</p>

                  </>
                )}

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