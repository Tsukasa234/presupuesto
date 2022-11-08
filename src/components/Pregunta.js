import React, {Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //State de cantidad de presupuesto
    const [cantidad, guardarCantidad] = useState(0)

    //State de error
    const [error, guardarError] = useState(false)

    //Leer el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))
    }

    //Validar el input del presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        //Validar
        if (cantidad <= 0 || isNaN(cantidad)) {
            guardarError(true)
            return
        }

        //Cambiar state de error
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form 
            onSubmit={agregarPresupuesto}
            >
                <input 
                type="number"
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                name="presupuesto" 
                id="presupuesto"
                onChange={definirPresupuesto}
                />

                <button 
                type="submit"
                className='button-primary u-full-width'
                >Añadir Presupuesto</button>
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired, 
    guardarRestante: PropTypes.func.isRequired, 
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;