import React from 'react';
import './index.css'; // Import the CSS file with the @font-face rule
import titulo from './files/Images/Titulo.png'
const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      <img src={titulo}></img>
      <p>by toby fox</p>
    </div>
  );
};

export default App;        