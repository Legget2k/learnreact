import imagen0 from "./images/image0.jpg";
import imagen1 from "./images/image1.jpg";
import imagen2 from "./images/image2.jpg";
import './App.css';

function App() {

  const reyesGodos = [{picture: <img alt="stormTrooper" src={imagen0}/>}, {name: <span>storm trooper</span>},
                      {picture: <img alt="fox" src={imagen1}/>}, {name: <span>fooxi</span>},
                      {picture: <img alt="fox" src={imagen2}/>}, {name: <span>fooxi very happy</span>}
                     ]
                     
  return (
    <div className="App">
      <article className="cards-container">

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

      </article>
    </div>
  );
}

export default App;
