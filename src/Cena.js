import React from 'react'

function Cena( {nombre, color, precio, setTotal} ) {
      const comprar =(elemento)=>{
            setTotal( (e)=> e+precio);
            elemento.target.parentNode.parentNode.parentNode.style.display="none";
      }
      const ruta="https://www.html6.es/img/rey_"
      const imagen = `${ruta}${nombre.toLowerCase()}.png`;
      return (
    <>
      <div className='rey' style={ {backgroundColor:color} }>
            <h2>{nombre}</h2>
            <img src={imagen}/>
            <div className='titulo'>Precio:</div>
            <div className='precio'>
                  {precio}$
                  <div>
                        <button onClick={comprar}>Comprar</button>
                  </div>
            </div>
      </div>
    </>
  )
}

export default Cena
