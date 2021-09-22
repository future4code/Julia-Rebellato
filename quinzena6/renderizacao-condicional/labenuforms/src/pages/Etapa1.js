// componente com a primeira parte do formulário;

import React from "react";
import styled from "styled-components";

const Titulo = styled.h1 `
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

const Formulario = styled.form `
color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
font-size: 20px;
`

const Escolaridade = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const NivelEscolaridade = styled.h2 `
color: black;
`
const EscolaridadeOpcoes = styled.select `
margin-bottom: 50px;
cursor: pointer;
`


function Etapa1() {
    return (
      <div>
          <Titulo> ETAPA 1 - DADOS GERAIS </Titulo>
          <Formulario>
                1. Qual o seu nome? <br /> <br />
                <input type="text" name="nome"></input> <br />
                2. Qual a sua idade? <br /> <br />
                <input type="number" name="idade"></input> <br />
                3. Qual o seu email? <br /> <br />
                <input type="text" name="email"></input>
          </Formulario>
          <Escolaridade>
              <NivelEscolaridade> Nível de Escolaridade </NivelEscolaridade>
        <EscolaridadeOpcoes>
            <option value="ensino-medio-incompleto">Ensino Médio Incompleto</option>
            <option value="ensino-medio-completo">Ensino Médio Completo</option>
            <option value="superior-incompleto">Ensino Superior Inompleto</option>
            <option value="superior-completo">Ensino Superior Completo</option>
        </EscolaridadeOpcoes>
        </Escolaridade>
      </div>
    );
  }
  
  export default Etapa1;
  