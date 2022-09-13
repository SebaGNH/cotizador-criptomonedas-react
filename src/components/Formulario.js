import React from 'react';
import {Boton} from './Formulario.jsx';
import useMoneda from '../Hooks/useMoneda.js';



const Formulario = () => {

  const opcionesMonedas = [
    {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
    {codigo: 'ARS', nombre: 'Peso Argentino'},
    {codigo: 'MXN', nombre: 'Peso Mexicano'},
    {codigo: 'GBP', nombre: 'Libra Exterlina'},
    {codigo: 'EUR', nombre: 'Euro'}
  ];

  //Utilizar useMoneda
  //Seleccionar es lo que se mostrará en pantalla
  //Le pasamos valores por parámetros al hook
  //Segundo parámetro un string vacío
  const [SeleccionarMonedas, estado, setEstado,] = useMoneda('Elije tu moneda','',opcionesMonedas);


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