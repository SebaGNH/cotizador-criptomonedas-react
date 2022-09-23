import React,{useState,useEffect} from 'react';
import {Boton} from './Formulario.jsx';
import useMoneda from '../Hooks/useMoneda.js';
import useCriptoMoneda from '../Hooks/useCriptoMoneda.js';
import axios from 'axios';
import Error from './Error.js';


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
  const [SeleccionarMonedas, moneda, setMoneda,] = useMoneda('Elije tu moneda','',opcionesMonedas);


  //State del listado de critoMonedas
  const [listaCripto, setListaCripto] = useState([]);

  //Error en consulta
  const [error, setError] = useState(false);

  //Utilizar useCriptoMoneda  //labelString,stateInicial,opcionesMonedas
  const [SeleccionarCripto, criptoMoneda ,setCriptoMoneda] = useCriptoMoneda('Elige tu CriptoMoneda','',listaCripto);





  //Ejecutar llamado a la API
  useEffect(()=>{
    const consutarAPI = async () =>{
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const resultado = await axios.get(url);
      setListaCripto(resultado.data.Data);
    }
    consutarAPI();
  },[]);

  //Botón consultar
  const submitHandler = (e) =>{
    e.preventDefault();


    //Validar campos custom Hooks
    if (moneda === ''|| criptoMoneda === '') {
      setError(true);
      return;
    }
    setError(false);

    

  }

  return (
    <form action="" onSubmit={submitHandler}>
      {error? <Error mensaje='Todos los campos son obligatorios' />: null}
      <SeleccionarMonedas/>
      <SeleccionarCripto/>
      <Boton
        type='submit'
        value='Calcular'
      />
    </form>
  );
}
export default Formulario;