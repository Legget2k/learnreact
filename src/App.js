import imagen0 from "./images/image0.jpg";
import imagen1 from "./images/image1.jpg";
import imagen2 from "./images/image2.jpg";
import { useRef } from "react";
import './App.css';

function App() {

  const reyesGodos = [
  { picture: <img alt="stormTrooper" src={imagen0} /> }, { name: <span>storm trooper</span> },
  { picture: <img alt="fox" src={imagen1} /> }, { name: <span>fooxi</span> },
  { picture: <img alt="fox" src={imagen2} /> }, { name: <span>fooxi very happy</span> }
  ]; //used in "cards-container"

  /*script app1--------------------------------------------------*/
  const refElement = useRef(); //importamos el hook useRe de react
  const cambioBolivianos = 7.20;

  const aumentar = (e) => {
    if (e.target.value === "clíck aquí") {
      e.target.value = 0;
    } else if (e.target.value >= 9) {
      e.target.value = 0;
    } else {
      e.target.value = Number(e.target.value) + 1;
    }

    if (e.target.value > 4) {
      e.target.style.color = "red";
    }else{
      e.target.style.color = "black";
    }
  }

  const cambio = () => {/*esta funcion realiza el cambio de dolares en refElement a bolivianos y la regresa en  refElement*/

    if (refElement.current.value === "clíck aquí") {
      refElement.current.value = 0;
    } else {
      refElement.current.value = Number(refElement.current.value) * cambioBolivianos;
    }
  }

  const cambioImagen = (e) => {
    if(e.target.src.includes("image0")){
      e.target.src=imagen1;
    }else{
      e.target.src=imagen0;
    }
  }

  const lectura=(e)=>{
    refElement.current.value = e.target.value;
  }

  /*script app1///////////////////////////////////////////////////*/

  return (
    <div className="App">

      <section className="cards-container">

        <div className="card">
          {reyesGodos[0].picture}
          {reyesGodos[1].name}
        </div>

        <div className="card">
          {reyesGodos[2].picture}
          {reyesGodos[3].name}
        </div>

        <div className="card">
          {reyesGodos[4].picture}
          {reyesGodos[5].name}
        </div>

      </section>

      <section className="app1-container">
        <div className="app1">
          <input ref={refElement} type="text" onClick={aumentar} value="clíck aquí" /> {/*value ya que es un input, si fuera un div podríamos cambiar el innerHTML*/}
          <button onClick={cambio}>Aceptar</button>
          <div className="card"><img onClick={cambioImagen} src={imagen0} /> </div>
          <input onChange={lectura} type="text" />
        </div>

      </section>
    </div>
  );

}

export default App;
