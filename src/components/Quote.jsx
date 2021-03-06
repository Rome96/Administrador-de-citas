import React from 'react';
import PropTypes from 'prop-types'

const Quote = ({ quote, deleteQuotes }) => {
  const { mascota, propietario, fecha, hora, sintomas, id } = quote
  return (
    <div className='cita'>
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button
        className='button eliminar u-full-width'
        onClick={() => deleteQuotes(id)}
      >
        eliminar &times;
      </button>
    </div>
  );
}

Quote.propType = {
  quote: PropTypes.object.isRequired,
  deleteQuotes: PropTypes.func.isRequired
}
 
export default Quote;