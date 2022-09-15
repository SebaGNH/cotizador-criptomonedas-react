import React,{useState} from 'react'
import {Label,Select} from './useMoneda.jsx';

const useCriptoMoneda = (labelString,stateInicial,opcionesMonedas) => {

  const [criptoMoneda, setCriptoMoneda] = useState(stateInicial);

  const SeleccionarCripto = () => { 
    return (
      <>
        <Label htmlFor="">{labelString}</Label>
        <Select onChange={(e)=> setCriptoMoneda(e.target.value)}>
          <option value="">-- Seleccione una Opción --</option>
          {/*  {opcionesMonedas.map( criptoMoneda => (
            <option key={criptoMoneda.codigo} value={criptoMoneda.codigo}>{criptoMoneda.nombre}</option>
          ))} */}
        </Select>
      </>
    );
  }

  return [SeleccionarCripto, criptoMoneda ,setCriptoMoneda] 
}
export default useCriptoMoneda;