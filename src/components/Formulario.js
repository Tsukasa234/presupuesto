import React, {useState} from 'react'

const Formulario = () => {
    return ( 
        <form>
            <h2>Agrega tus gastos aqui</h2>

            <div className="campo">
                <label htmlFor="Gasto">Nombre Gasto</label>
                <input 
                type="text" 
                name="Gasto" 
                id="Gasto"
                className='u-full-width'
                placeholder='ej. Transporte, Servicios...'
                />
            </div>
        </form>
     );
}
 
export default Formulario;