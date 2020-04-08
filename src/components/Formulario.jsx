import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    // State para error de llenado de formulario
    const [error, setError] = useState(false);

    // Extraer ciudad y pais
    const { pais, ciudad } = busqueda;

    // Funcion para guardar valores en el state
    const handleChange = e => {
        e.preventDefault();
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    //Fucion para manejar el submit
    const handleSubmit = e => {
        e.preventDefault();
        if(pais.trim() === '' || ciudad.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        setConsultar(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error
                ? <p className="red darken-4 error">Todos los campos son obligatorios</p>
                : null
            }
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="DO">Republica Dominicana</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Enviar Datos
                </button>
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}
 
export default Formulario;