// componente com a segunda parte do formulário;

import React from "react";
import styled from "styled-components";

const ContainerEtapa2 = styled.div `
height: auto;
margin: auto;
`

const TituloEtapa2 = styled.h1 `
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

const FormularioEtapa2 = styled.form `
color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
font-size: 20px;
`

export default class Etapa2 extends React.Component {
  render () {
  return (
      <ContainerEtapa2>
      <TituloEtapa2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </TituloEtapa2>
      <FormularioEtapa2>
            3. Qual curso? <br /> <br />
            <input type="text" name="curso"></input> <br />
            4. Qual a unidade de ensino? <br /> <br />
            <input type="text" name="unidade"></input> <br />
      </FormularioEtapa2>
      </ContainerEtapa2>
    );
  }
}