import React from 'react'
import styled from 'styled-components';

const Cotizacion = ({resultadoAPI}) => {
  //Si el resultado está vacío no ejecuta nada
  if (Object.keys(resultadoAPI).length === 0) return null;
  return (
    <div>
      <Pprecio>El precio es: <span>{resultadoAPI.PRICE}</span></Pprecio>
      <Pinfo>- El precio más alto fue: <span>{resultadoAPI.HIGHDAY}</span></Pinfo>
      <Pinfo>- El precio más bajo fue: <span>{resultadoAPI.LOWDAY}</span></Pinfo>
      <Pinfo>- Variación últimas 24hs: <span>{resultadoAPI.CHANGEPCT24HOUR}</span></Pinfo>
      <Pinfo>- Última actualización: <span>{resultadoAPI.LASTUPDATE}</span></Pinfo>
    </div>
  )
}

export default Cotizacion

const Pprecio = styled.p`
  font-size: 30px;
`;

const Pinfo = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

