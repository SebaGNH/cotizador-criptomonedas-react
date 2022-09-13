import React,{useState} from 'react';

const useMoneda = () => {//Esto es el state y otras operaciones
  //State de nuestro custom Hook
  //Estado es la moneda que el usuario elija
  const [estado, setEstado] = useState('');

  const SeleccionarMonedas = () => { //Esto se mostrará en pantalla
    return (
      <>
        <label htmlFor="">Moneda</label>
        <select name="" id="">
          <option value="MXN">Peso Mexicano</option>
        </select>
      </>
    );
  }
  // Retornar state, interface y función que modifica el state
  return [SeleccionarMonedas, estado ,setEstado] //No importa el orden
}
export default useMoneda;