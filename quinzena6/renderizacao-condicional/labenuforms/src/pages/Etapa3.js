// componente com a terceira parte do formulário;

import React from "react";
import styled from "styled-components";

const ContainerEtapa3 = styled.div `
height: auto;
margin: auto;
`

const TituloEtapa3 = styled.h1 `
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

const FormularioEtapa3 = styled.form `
color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
font-size: 20px;
`

const CursosOpcoes = styled.select `
margin-bottom: 50px;
cursor: pointer;
`


export default class Etapa3 extends React.Component {
    render () {
    return (
      <ContainerEtapa3>
      <TituloEtapa3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </TituloEtapa3>
      <FormularioEtapa3>
            5. Por que você não terminou um curso de graduação? <br /> <br />
            <input type="text" name="curso"></input> <br />
            6. Você fez algum curso complementar? <br /> <br />
            <CursosOpcoes>
            <option value="ensino-medio-incompleto">Nenhum</option>
            <option value="ensino-medio-completo">Curso técnico</option>
            <option value="superior-incompleto">Curso de Inglês</option>
        </CursosOpcoes>
      </FormularioEtapa3>
      </ContainerEtapa3>
    );
  }
}