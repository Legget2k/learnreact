import imagen0 from "./images/image0.jpg";
import imagen1 from "./images/image1.jpg";
import imagen2 from "./images/image2.jpg";
import imagen3 from "./images/image3.jpg";
import { useRef } from "react";
import { useState } from "react";
import './App.css';

function App() {
  
  /*script app0--------------------------------------------------*/
  const alterImg=(e)=>{
    if(e.target.src.includes("base64")){ //la img de sombrero tiene como nombre base 64 comprobar con alert(imagen3)
      e.target.style.visibility="hidden";
      e.target.parentNode.style.backgroundColor = "#251e1e";
      e.target.parentNode.style.border = "0px";
    }else{
      e.target.src=imagen3;
    }
  }
  const alterTxt=(e)=>{
    if(e.target.innerHTML === "visto"){
      e.target.innerHTML = "";
    }else{
      e.target.innerHTML = "visto";
    }
  }
  const reyesGodos = [
  { picture: <img onClick={alterImg} alt="stormTrooper" src={imagen0} /> }, { name: <span onClick={alterTxt}>storm trooper</span> },
  { picture: <img onClick={alterImg} alt="fox" src={imagen1} /> }, { name: <span onClick={alterTxt}>fooxi</span> },
  { picture: <img onClick={alterImg} alt="fox" src={imagen2} /> }, { name: <span onClick={alterTxt}>fooxi very happy</span> }
  ]; //used in "cards-container"
  /*script app0/////////////////////////////////////////////////*/

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

  /*script app2----------------------------------------------------*/

  //count
  const [contador, setContador] = useState(0); //aqui inicializamos contador en 0
  const disminuir = () =>{
    setContador(contador-1);
  }
  const aumentarSecondApp =()=>{
    setContador(contador+1);
  }
  const restablecer=()=>{
    setContador(0);
  }

  //calculator
  const[numero1, setNumero1] = useState(0);
  const[numero2, setNumero2] = useState(0);
  const[resultado, setResultado] = useState(0);

  const modifSumator1 = (e) =>{
    setNumero1(e.target.value);
  }
  const modifSumator2 = (e) =>{
    setNumero2(e.target.value);
  }
  const sumar = () =>{
    setResultado(Number(numero1) + Number(numero2)); //numero 1 es texto y numero 2 es texto, ambas variables se les debe aplicar el number por separado
  }

  //afisiones
  const kingAfi = [
    {nombre: <span className="king-nombre">Ataúlfo</span>, aficion: <span className="king-aficion">Comer toros sin pelar</span>},
    {nombre: <span className="king-nombre">Teodorico</span>, aficion: <span className="king-aficion">Ver Documentales de la tele</span>},
    {nombre: <span className="king-nombre">Recesvinto</span>, aficion: <span className="king-aficion">Leer a Hegel</span>}
  ];
  const [kingContador, setKingContador] = useState(0);
  const [mensaje, setMensaje] = useState();
  
  const afiAlter = () =>{
    if(kingContador+1 >= kingAfi.length){
      setKingContador(0);
    }else{
      setKingContador(Number(kingContador)+1);
    }
    setMensaje(<p>La aficion de <span className="king-nombre">{kingAfi[kingContador].nombre}</span>
    es <span className="king-aficion">{kingAfi[kingContador].aficion}</span></p>);
  }

  //cambiazo
  const tasaCambios = [
    {moneda: "Euro", cambio: 1},
    {moneda: "Peso Argentino", cambio: 118.6},
    {moneda: "Peso Colombiano", cambio: 4543.5},
    {moneda: "Peso Mexicano", cambio:23.2},
    {moneda: "Dólar", cambio: 1.14}
  ];

  const[cambiario, setCambiario] = useState(0);
  const[res1, setRes1] = useState(0);
  const[res2, setRes2] = useState(0);
  const[res3, setRes3] = useState(0);
  const[res4, setRes4] = useState(0);
  
  const cambiazo = (e) =>{
    setCambiario(e.target.value);
    setRes1(Number(e.target.value) * Number(tasaCambios[1].cambio));
    setRes2(Number(e.target.value) * Number(tasaCambios[2].cambio));
    setRes3(Number(e.target.value) * Number(tasaCambios[3].cambio));
    setRes4(Number(e.target.value) * Number(tasaCambios[4].cambio));
  }

  /*script app2///////////////////////////////////////////////////////*/

  return (
    <div className="App">

      <section className="container">
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

      <section className="container">
        <div className="app1">
          <input ref={refElement} type="text" onClick={aumentar} value="clíck aquí" /> {/*value ya que es un input, si fuera un div podríamos cambiar el innerHTML*/}
          <button onClick={cambio}>Aceptar</button>
          <div className="card"><img onClick={cambioImagen} src={imagen0} /> </div>
          <input onChange={lectura} type="text" />
        </div>

      </section>

      <section className="container">
        <div className="app2">
          
          <div className="app2-count card">
            <h1>{contador}</h1>
            <button onClick={disminuir}>disminuir</button>
            <button onClick={aumentarSecondApp}>aumentar</button>
            <button onClick={restablecer}>restablecer</button>
          </div>

          <div className="app2-sumator card">
            <input type="number" value={numero1} onChange={modifSumator1}/>
            <input type="number" value={numero2} onChange={modifSumator2}/>
            <input type="number" value={resultado} readOnly/>
            <button onClick={sumar}>Sumar</button>
          </div>

          <div className="app2-king-afi card">
            <button onClick={afiAlter}>Ver siguiente</button>
            <div> {mensaje} </div>
          </div>

          <div className="app2-cambiazo card">
            <label htmlFor="u0">{tasaCambios[0].moneda}</label>
            <input type="number" value={cambiario} onChange={cambiazo} id="u0"/>

            <label htmlFor="u1">{tasaCambios[1].moneda}</label>
            <input type="number" value={res1} readOnly id="u1"/>

            <label htmlFor="u2">{tasaCambios[2].moneda}</label>
            <input type="number" value={res2} readOnly id="u2"/>

            <label htmlFor="u3">{tasaCambios[3].moneda}</label>
            <input type="number" value={res3} readOnly id="u3"/>

            <label htmlFor="u4">{tasaCambios[4].moneda}</label>
            <input type="number" value={res4} readOnly id="u4"/>
          </div>

        </div>

      </section>
    </div>
  );

}

export default App;
