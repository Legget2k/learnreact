import React from 'react'

function Cena(nombre, precio, color, setTotal) {
      const comprar=()=>{
            
      }
  return <>
      <div className='rey'>
            <h1>{nombre}</h1>
            <div className='titulo'>Precio</div>
            <div className='precio'>
                  {precio}$
                  <div>
                        <button onClick={comprar}>Comprar</button>
                  </div>
            </div>

      </div>
    </>;
}

export default Cena
