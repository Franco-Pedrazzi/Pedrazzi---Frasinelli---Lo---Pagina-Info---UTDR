import { useState, useEffect } from 'react'
import './index.css';
function App() {
  const [Info, SetInfo] = useState([])
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Undertale</h1>
      <h1>&</h1>
      <h1>Deltarune</h1>
    </div>
  );
}

export default App;
