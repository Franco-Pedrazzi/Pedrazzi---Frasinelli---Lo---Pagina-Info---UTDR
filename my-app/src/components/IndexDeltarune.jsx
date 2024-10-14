import React, { useState, useEffect } from 'react';
import '../index.css';
import titulo from '../files/Images/Titulo.png';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importa Firestore
import deltarune_logo from '../files/Images/Deltarune-logo.png'
import deltarune_logo_bg from '../files/Images/Deltarune-logo-background.png'
import Undertale_logo from '../files/Images/Undertale-logo.png'
import loading from '../files/Images/Annoying_Dog_overworld_sleeping.webp'
import { db } from '../DataBase';
import { Link } from "react-router-dom";

function IndexDeltarune () {
  
  return (
    <div>
      
    </div>
  );
};

export default IndexDeltarune;