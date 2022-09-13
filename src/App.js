import styled from 'styled-components';
import imagen from "./img/cryptomonedas.png";
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <DivContenedor>
        {/* <div className="img">
          <Imagen src={imagen} alt="Imagen Cripto" />
        </div> */}
        <div>
          <H1>Cotiza Criptomonedas al instante</H1>
          <Formulario/>
        </div>
      </DivContenedor>
    </>
  );
}

const DivContenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
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
  font-size: 50px;
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
