import React from 'react';
import { useState } from 'react';
import Cena from './Cena';
import './App.css';

function App() {
  const reyes = [
    {nombre: "Atanagildo", color:"darkolivegreen", precio:178},
    {nombre: "Ervigio", color:"crimson", precio:169},
    {nombre: "Ataúlfo", color:"darkred", precio:81},
    {nombre: "Leogivildo", color:"darkmagenta", precio:126},
    {nombre: "Recesvinto", color:"brown", precio:142},    
    {nombre: "Sisebuto", color: "blue", precio: 69}
  ];

  const [total, setTotal] = useState(0);

  return (
    <>
    <h1>Total a pagar: {total}</h1>
    <div className='caja-central'>
      <Cena nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} setTotal={setTotal}></Cena>
      <Cena nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} setTotal={setTotal}></Cena>
      <Cena nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} setTotal={setTotal}></Cena>
      <Cena nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} setTotal={setTotal}></Cena>
      <Cena nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} setTotal={setTotal}></Cena>
      <Cena nombre={reyes[5].nombre} color={reyes[5].color} precio={reyes[5].precio} setTotal={setTotal}></Cena>
    </div>
    </>

  )
}

export default App
