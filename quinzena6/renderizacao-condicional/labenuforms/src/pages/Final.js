// componente com o agradecimento pelo preenchimento do formulário.

import React from "react";
import styled from "styled-components";

const ContainerFinal = styled.div `
width: 100vw;
`

const TituloFinal = styled.h1 `
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

const Agradecimentos = styled.div `
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

export default class Final extends React.Component {
  render () {
  return (
      <ContainerFinal>
        <TituloFinal> O formulário acabou! </TituloFinal>
        <Agradecimentos>Obrigada por participar! Entraremos em contato!</Agradecimentos>
      </ContainerFinal>
    );
  }
}