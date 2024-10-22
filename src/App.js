import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';
import { useState } from 'react';

function App() {
  const [lista, setLista]=useState([true, false, true, true, false, true, true, false, true])
  function katt(adat){
    const slista=[...lista]
    slista[adat]=!slista[adat]
    setLista([...slista])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article><Jatekter lista={lista} katt={katt} /></article>
      <footer>Lukács Alexandra</footer>
    </div>
  );
}

export default App;
