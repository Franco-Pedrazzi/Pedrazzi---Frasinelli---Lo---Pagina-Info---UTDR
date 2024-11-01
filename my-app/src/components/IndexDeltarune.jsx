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
  const [chapters, setChapters] = useState([
    /*{
      index: 1, name: "Capitulos", image: ChapterIcon, articles: [
        {
          name: "Capitulo 1", miniDesc: "The Beginning", content: {
            title: "Capitulo 1",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Capitulo 2", miniDesc: "A Cyber's World", content: {
            title: "Capitulo 2",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        }]
    },
    {
      index: 2, name: "Personajes", image: ChapterIcon, articles: [
        {
          name: "Kris", miniDesc: "Sólo eres tú.", content: {
            title: "Kris",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Susie", miniDesc: "No te molestes en responder. Por si aún no te has dado cuenta... Tus decisiones no importan.", content: {
            title: "Susie",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Ralsei", miniDesc: "¡Espero que podamos ser buenos amigos!", content: {
            title: "Ralsei",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Lancer", miniDesc: "¡Soy...! El tipo malo.", content: {
            title: "Lancer",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Noelle", miniDesc: "Este... extraño mundo... esta enorme ciudad... Es tan alocado... como que me hace dar vueltas la cabeza.", content: {
            title: "Noelle",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Berdly", miniDesc: "¡Es LORD Berdly para ustedes simplones!", content: {
            title: "Berdly",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        }]
    },
    {
      index: 3, name: "Jefes", image: ChapterIcon, articles: [
        {
          name: "Rey", miniDesc: "Para mi gente, soy un héroe... ¿Para ustedes? ¡¡¡SOY EL TIPO MALO!!!", content: {
            title: "Rey",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Reina", miniDesc: "Solo Quiero Hacer A Todos Sonreir Y Si Tengo Que Volverme Una Malvada Villana Para Conseguirlo Es Eso Malo?", content: {
            title: "Reina",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Jevil", miniDesc: "AHORA, AHORA!! QUE LOS JUEGOS COMIENCEN!!", content: {
            title: "Jevil",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Spamton", miniDesc: "DESPUÉS DE TODO, ¡TÚ QUIERES SER UN [Big Shot]! ¡¡EAHAHAHAHAA!!", content: {
            title: "Spamton",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        }]
    },
    {
      index: 4, name: "Localizaciones", image: ChapterIcon, articles: [
        {
          name: "Hometown (Mundo de Luz)", miniDesc: "El inicio", content: {
            title: "Hometown (Mundo de Luz)",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "Mundo(s) Oscuro(s)", miniDesc: "LA OSCURIDAD", content: {
            title: "Mundo(s) Oscuro(s)",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        }]
    },
    {
      index: 5, name: "Mecanicas", image: ChapterIcon, articles: [
        {
          name: "SAVE", miniDesc: "Aveces, la ves parpadeando. Aquella luz que sólo tú puedes ver. Por segunda naturaleza, te acercas y... [Archivo Salvado]", content: {
            title: "SAVE",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "ALMA", miniDesc: "Sientes como si tu ALMA brillara.", content: {
            title: "ALMA",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        },
        {
          name: "SURVEY_PROGRAM (Introduccion)", miniDesc: "ESTAS AHI? ESTAMOS CONECTADOS?", content: {
            title: "SURVEY_PROGRAM (Introduccion)",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
            image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
            image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
          }
        }]
    }*/
  ]);

  /*useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "Deltarune", "Informacion");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setChapters(docSnap.data().categories);
          setDocInfo(docSnap.data())
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
    playSound();  * /
    fetchData();
  }, []);*/

  useEffect(() => {
    async function sendData() {
      try {
        setDoc(doc(db, "Deltarune", "Informacion"), {
          content: {
            title: "¿QUE ES?",
            image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
            text1: 'Deltarune es un videojuego de rol creado por Toby Fox, creador de Undertale. El Capítulo 1 fue lanzado el 31 de octubre de 2018 y el Capítulo 2 fue lanzado el 17 de septiembre de 2021. Comparte varias mecánicas con Undertale, como el uso del Tablero de balas en batalla y la posibilidad de terminar una batalla pacíficamente. Sin embargo, el videojuego rompe la cuarta pared tratando de negar al jugador la posibilidad de obtener un final distinto por sus acciones. En su mayoría.'
            },
          categories: [
            {
              index: 1, name: "Capitulos", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch1_icon.png?alt=media&token=6f949a52-f319-4214-882f-4100d741f1dc", articles: [
                {
                  name: "Capitulo 1", miniDesc: "The Beginning", content: {
                    title: "Capitulo 1",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Capitulo 2", miniDesc: "A Cyber's World", content: {
                    title: "Capitulo 2",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                }]
            },
            {
              index: 2, name: "Personajes", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch2_icon.png?alt=media&token=6cebb19b-d950-417d-8c05-5e69ccc0107d", articles: [
                {
                  name: "Kris", miniDesc: "Sólo eres tú.", content: {
                    title: "Kris",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Susie", miniDesc: "No te molestes en responder. Por si aún no te has dado cuenta... Tus decisiones no importan.", content: {
                    title: "Susie",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Ralsei", miniDesc: "¡Espero que podamos ser buenos amigos!", content: {
                    title: "Ralsei",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Lancer", miniDesc: "¡Soy...! El tipo malo.", content: {
                    title: "Lancer",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Noelle", miniDesc: "Este... extraño mundo... esta enorme ciudad... Es tan alocado... como que me hace dar vueltas la cabeza.", content: {
                    title: "Noelle",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Berdly", miniDesc: "¡Es LORD Berdly para ustedes simplones!", content: {
                    title: "Berdly",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                }]
            },
            {
              index: 3, name: "Jefes", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch3_icon.png?alt=media&token=14386d5e-043c-4bf7-b393-c438b9d02146", articles: [
                {
                  name: "Rey", miniDesc: "Para mi gente, soy un héroe... ¿Para ustedes? ¡¡¡SOY EL TIPO MALO!!!", content: {
                    title: "Rey",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Reina", miniDesc: "Solo Quiero Hacer A Todos Sonreir Y Si Tengo Que Volverme Una Malvada Villana Para Conseguirlo ¿Es Eso Malo?", content: {
                    title: "Reina",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Jevil", miniDesc: "¡¡AHORA, AHORA!! ¡¡QUE LOS JUEGOS COMIENCEN!!", content: {
                    title: "Jevil",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Spamton", miniDesc: "DESPUÉS DE TODO, ¡TÚ QUIERES SER UN [Big Shot]! ¡¡EAHAHAHAHAA!!", content: {
                    title: "Spamton",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                }]
            },
            {
              index: 4, name: "Localizaciones", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch4_icon.png?alt=media&token=560a85ac-a37a-40ad-9037-0635c4b8f4cf", articles: [
                {
                  name: "Hometown (Mundo de Luz)", miniDesc: "El inicio", content: {
                    title: "Hometown (Mundo de Luz)",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "Mundo(s) Oscuro(s)", miniDesc: "LA OSCURIDAD", content: {
                    title: "Mundo(s) Oscuro(s)",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                }]
            },
            {
              index: 5, name: "Mecanicas", image: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/ch5_icon.png?alt=media&token=06f508f4-77a8-494e-a23d-019f9438127d", articles: [
                {
                  name: "SAVE", miniDesc: "Aveces, la ves parpadeando. Aquella luz que sólo tú puedes ver. Por segunda naturaleza, te acercas y... [Archivo Salvado]", content: {
                    title: "SAVE",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "ALMA", miniDesc: "Sientes como si tu ALMA brillara.", content: {
                    title: "ALMA",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
                  }
                },
                {
                  name: "SURVEY_PROGRAM (Introduccion)", miniDesc: "¿ESTAS AHI? ¿ESTAMOS CONECTADOS?", content: {
                    title: "SURVEY_PROGRAM (Introduccion)",
                    image1: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    image2: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text2: "Nulla facilisis eleifend integer penatibus primis aliquet ante sem ornare. Velit nunc etiam platea cursus velit magnis. Quis platea dictum porttitor hendrerit non libero aenean iaculis inceptos? Ullamcorper porttitor tellus quam sem sit pellentesque vestibulum. Dui iaculis ex eros, facilisi natoque malesuada placerat. Vitae faucibus odio feugiat suspendisse; porta natoque fringilla. Molestie tempor lacinia tincidunt scelerisque dui est. Suscipit tellus vestibulum cursus fusce curae nibh.",
                    image3: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text3: "Tortor himenaeos velit nunc tortor neque. Nisl finibus tortor accumsan dis massa; etiam viverra rhoncus habitant? Primis dictum nulla ipsum, curae sed nam. Urna quisque litora urna tristique egestas, est libero iaculis. Lacus ante etiam phasellus ex montes bibendum donec tellus. Nostra montes ad pretium mi est vel cras. Sodales vitae convallis lobortis dapibus praesent metus sed vitae. Pretium adipiscing consectetur integer fusce, tincidunt nisl vitae. Scelerisque porta adipiscing enim sagittis diam lectus.",
                    image4: "https://firebasestorage.googleapis.com/v0/b/usuarios-ff69d.appspot.com/o/placeholder.jpeg?alt=media&token=a46d6397-5f80-4712-9b21-fb2926afc8ac",
                    text4: "Id ut feugiat hac velit congue accumsan lectus torquent. Dignissim elit id molestie consectetur parturient nam. Nascetur cursus nisi quisque volutpat semper primis. Aptent faucibus fringilla ligula senectus ultrices primis enim. Dolor massa et porttitor class proin donec in. Odio neque natoque sit; quam cubilia proin vestibulum. Facilisi ligula eleifend tincidunt cubilia posuere efficitur per. Eros efficitur ut aptent feugiat phasellus?",
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
  }, []);
  console.log(docInfo);

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
