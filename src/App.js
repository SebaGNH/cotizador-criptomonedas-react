import React,{Fragment,useState,useEffect} from 'react';
import styled from 'styled-components';
import imagen from "./img/barChain.png";
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

function App() {

  const [moneda, setGuardarMoneda] = useState('');
  const [criptoMoneda, setGuardarCriptoMoneda] = useState('');
  const [resultadoAPI, setResultadoAPI] = useState({});

  useEffect( () => {
    //Evitamos la primera ejecución
    if (moneda === '') return;
    const consultarMonedas = async () =>{

      //Consultar API con lo que el usuario elija
    const urlAPI = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

    const resultado = await axios.get(urlAPI);
    //Accedemos dinamicamente a la respuesta de la API
    setResultadoAPI(resultado.data.DISPLAY[criptoMoneda][moneda]);
    }
    consultarMonedas();

  },[moneda,criptoMoneda]);

  return (
    <Fragment>
      <DivContenedor>
        <div>
          <H1>Cotiza Criptomonedas al instante</H1>
          <Formulario
            setGuardarMoneda={setGuardarMoneda}
            setGuardarCriptoMoneda={setGuardarCriptoMoneda}
          />
          <Cotizacion resultadoAPI={resultadoAPI}/>
        </div>
        <div className="img">
          <Imagen src={imagen} alt="Imagen Cripto" />
        </div>
      </DivContenedor>
    </Fragment>
  );
}

const DivContenedor = styled.div`
  max-width: 900px;
  margin: 0 1.5rem;
  @media (min-width: 692px){ //992
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 50% u 50%
    column-gap: 2rem;
  }
  `;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const H1 = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;


export default App;
