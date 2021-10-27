import React from "react";
import styled from "styled-components";

const DivTotal = styled.div`
`

const ContainerPrincipal = styled.div`
display: flex;
justify-content: center;
`
const ContainerMatches = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
height: 70vh;
width: 60vh;
margin-top: 45px;
`

const BotaoPaginaInicial = styled.button`
margin: 10px;
margin-left: 20px;
`

const BotaoLimparMatches = styled.button`
`

export const Matches = (props) => {
    return (
        <DivTotal>
        <ContainerPrincipal>
        <ContainerMatches>
                <p>Oi</p>
        </ContainerMatches>
    </ContainerPrincipal>
    <BotaoPaginaInicial onClick={() => props.irParaTelaInicial()} >Ir para página inicial</BotaoPaginaInicial>
    <BotaoLimparMatches>Limpar matches</BotaoLimparMatches>
    </DivTotal>
    )
}

export default Matches;