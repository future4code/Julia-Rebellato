import React from "react"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
width: 100vw;
`

const Titulo = styled.h1 `
display: flex;
align-items: center;
justify-content: center;
`

const BotaoPágina = styled.button`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: auto;
`

const CriarUsuario = styled.h2`
display: flex;
justify-content: center;
align-items: center;
`

const ContainerInputs = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`

const BotaoCriar = styled.button `
width: auto;
`




export default class Pagina1 extends React.Component {
    render () {
        return (
    <ContainerPrincipal>
      <CriarUsuario>Criar Usuário</CriarUsuario>
      <ContainerInputs>
      <input
         placeholder="Nome"
        //  value={props.maxPrice}
        //  onChange={props.updateMaxPrice}
      />
       <input
         placeholder="Email"
        //  value={props.maxPrice}
        //  onChange={props.updateMaxPrice}
      />
      <BotaoCriar>Criar</BotaoCriar>
      </ContainerInputs>
    </ContainerPrincipal>
        )}}