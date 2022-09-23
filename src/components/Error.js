import React from 'react'
import styled from 'styled-components';


const Error = ({mensaje}) => {
  return (
    <P>{mensaje}</P>
  )
}

export default Error

const P = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;
