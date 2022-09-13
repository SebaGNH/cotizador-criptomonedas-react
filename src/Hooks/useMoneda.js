import React,{useState} from 'react';

//El String recibido lo usaremos como "label"
const useMoneda = (labelString,stateInicial,opcionesMonedas) => {//Esto es el state y otras operaciones
  //State de nuestro custom Hook
  //Estado es la moneda que el usuario elija
  //stateInicial es un string vacío '' recibido desde Formuario
  const [estado, setEstado] = useState(stateInicial);

  const SeleccionarMonedas = () => { //Esto se mostrará en pantalla
    return (
      <>
        <label htmlFor="">{labelString}</label>
        <select name="" id="">
          <option value="">-- Seleccione una Opción --</option>
          {opcionesMonedas.map( moneda => (
            <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
          ))}
        </select>
      </>
    );
  }
  // Retornar state, interface y función que modifica el state
  return [SeleccionarMonedas, estado ,setEstado] //No importa el orden
}
export default useMoneda;