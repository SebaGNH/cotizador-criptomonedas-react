import React from 'react'

const Cotizacion = ({resultadoAPI}) => {
  //Si el resultado está vacío no ejecuta nada
  if (Object.keys(resultadoAPI).length === 0) return null;
  return (
    <div>
      <p>- El precio es: <span>{resultadoAPI.PRICE}</span></p>
      <p>- El precio más alto fue: <span>{resultadoAPI.HIGHDAY}</span></p>
      <p>- El precio más bajo fue: <span>{resultadoAPI.LOWDAY}</span></p>
      <p>- Variación últimas 24hs: <span>{resultadoAPI.CHANGEPCT24HOUR}</span></p>
      <p>- Última actualización: <span>{resultadoAPI.LASTUPDATE}</span></p>
    </div>
  )
}

export default Cotizacion