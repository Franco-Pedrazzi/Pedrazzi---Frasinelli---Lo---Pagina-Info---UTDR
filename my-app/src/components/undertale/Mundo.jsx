import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import titulo from '../../files/Images/Undertale titulo.png';
import deltarune_logo from '../../files/Images/Deltarune-logo.png';
import deltarune_logo_bg from '../../files/Images/Deltarune-logo-background.png';
import Annoying_dog_bg from '../../files/Images/Annoying dog fondo.png';
import Annoying_dog from '../../files/Images/Annoying dog.png';
import quit from '../../files/Images/Quit.png'
import intro from '../../files/Images/undertale_intro.mp4'
import Determination_soul from '../../files/Images/detemination soul.png'
import monster_soul from '../../files/Images/monster soul.png'
import undertale_Map_Logo from '../../files/Images/map_icon.png'
import Undertale_logo from '../../files/Images/Undertale-logo.png'
import save_point from '../../files/Images/save point.png'
import { Routes, Route, useParams } from 'react-router-dom';
import Curiosidades from './Curiosidades'
function Mundo() {
  const [docData, setDocData] = useState(null);
  const [introduccion, setIntroduccion] = useState(false);
  let { userId } = useParams();
    console.log(userId)
  return (
    <Routes>
    <Route path="users">
      <Route path=":userId" element={<Curiosidades />} />
    </Route>
  </Routes>
  );
}

export default Mundo;