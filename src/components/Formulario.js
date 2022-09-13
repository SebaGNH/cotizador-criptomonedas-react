import React from 'react';
import {Boton} from './Formulario.jsx';
import useMoneda from '../Hooks/useMoneda.js';



const Formulario = () => {
  //Utilizar useMoneda
  //Seleccionar es lo que se mostrará en pantalla
  const [SeleccionarMonedas, estado, setEstado,] = useMoneda();

  return (
    <form action="">
      <SeleccionarMonedas/>
      <Boton
        type='submit'
        value='Calcular'
      />
    </form>
  );
}
export default Formulario;