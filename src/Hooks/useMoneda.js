import React,{useState} from 'react';
import {Label,Select} from './useMoneda.jsx';


//El String recibido lo usaremos como "label"
const useMoneda = (labelString,stateInicial,opcionesMonedas) => {//Esto es el state y otras operaciones
  //State de nuestro custom Hook
  //Estado es la moneda que el usuario elija
  //stateInicial es un string vacío '' recibido desde Formuario
  const [moneda, setMoneda] = useState(stateInicial);


  const SeleccionarMonedas = () => { //Esto se mostrará en pantalla
    return (
      <>
        <Label htmlFor="">{labelString}</Label>
        <Select 
          onChange={(e)=> setMoneda(e.target.value)}
          value={moneda}
          > 
          <option value="">-- Seleccione una Opción --</option>
          {opcionesMonedas.map( moneda => (
            <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
          ))}
        </Select>
      </>
    );
  }
  // Retornar state, interface y función que modifica el state
  return [SeleccionarMonedas, moneda ,setMoneda] //No importa el orden
}
export default useMoneda;