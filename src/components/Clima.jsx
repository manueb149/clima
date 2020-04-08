import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // Extraer datos de resultado
    const { name, main } = resultado;

    if(!name || !main) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - 273.15, 10).toFixed(2)}°C
                </p>
                <p>Minima: 
                    {" "+parseFloat(main.temp_min - 273.15, 10).toFixed(2)}°C
                </p>
                <p>Maxima: 
                    {" "+parseFloat(main.temp_max - 273.15, 10).toFixed(2)}°C
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;