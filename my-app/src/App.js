import React from 'react';
import './index.css'; // Import the CSS file with the @font-face rule
import titulo from './files/Images/Titulo.png'
const App = () => {
  //<iframe src="https://jcw87.github.io/c2-sans-fight/" name="Game Name" width="800" height="480" frameborder="0" scrolling="no" ><p>Your browser does not support iframes.</p></iframe>
  return (
    <div>
      <nav>
        <div className='button'>Undertale </div>
        <div className='button'>Deltarune </div>
      </nav>
      <center>
      <img src={titulo}></img>
      <p>by toby fox</p>

      </center>
      
      </div> 
  );
};

export default App;        