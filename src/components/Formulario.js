import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)


    //Validando
    const calculos = e => {
        e.preventDefault()

        //Validacion
        if (nombre.trim() === '' || (cantidad <= 0 || isNaN(cantidad))) {
            guardarError(true)
            return
        }

        //Borrando el mensaje de error
        guardarError(false)

        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasando gastos al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //Reiniciar formulario
        guardarNombre('')
        guardarCantidad(0)
    }

    return ( 
        <form
        onSubmit={calculos}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error? <Error mensaje='Campos Invalidos' /> : null}

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                type="text" 
                name="nombre" 
                id="nombre"
                className='u-full-width'
                placeholder='ej. Transporte, Servicios...'
                onChange={e => {
                    guardarNombre(e.target.value)
                }}
                value={nombre}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad Gasto</label>
                <input 
                type="number" 
                name="cantidad" 
                id="cantidad"
                className='u-full-width'
                onChange={e => {
                    guardarCantidad(parseInt(e.target.value))
                }}
                value={cantidad.toString()}
                />
            </div>

            <input 
            type="submit" 
            value="Calculo" 
            className='button button-primary u-full-width'
            />
        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.array.isRequired,
    guardarCrearGasto: PropTypes.bool.isRequired
}
 
export default Formulario;