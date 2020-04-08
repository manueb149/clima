import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  // State para guardado de formulario
  const [busqueda, setBusqueda] = useState({
    pais: '',
    ciudad: ''
  });
  const {pais, ciudad} = busqueda;
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const consultarAPI = async () => {
      if(consultar){
        const apiKey = '807dbd879732f95cd70e0cd9bde41b52';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
  
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setResultado(datos);
        setConsultar(false);
      }
    }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo='API Clima'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              <Clima
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
