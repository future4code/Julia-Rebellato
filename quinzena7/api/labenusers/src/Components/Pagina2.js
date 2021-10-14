import React from "react"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
width: 100vw;
`

const ListaUsuarios = styled.h2`
display: flex;
justify-content: center;
align-items: center;
`


export default class Pagina2 extends React.Component {
    
    render () {
        return (
    <ContainerPrincipal>
      <ListaUsuarios>Lista de Usuários</ListaUsuarios>
    </ContainerPrincipal>
        )}}