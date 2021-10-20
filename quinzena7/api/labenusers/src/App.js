import React from "react";
import styled from "styled-components";
import Pagina1 from "./Components/Pagina1/Pagina1";
import Pagina2 from "./Components/Pagina2/Pagina2";

const ContainerPrincipal = styled.div`
width: 100vw;
`

const Titulo = styled.h1 `
display: flex;
align-items: center;
justify-content: center;
`

export default class App extends React.Component {
  state = {
    pagina: "cadastro"
  }

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case "cadastro": 
        return <Pagina1 irParaLista={this.irParaLista}/>;
      case "lista":
        return <Pagina2 irParaCadastro={this.irParaCadastro}/>;
        default: 
        return <div>Erro! Página não encontrada ☹️</div>
  }
}

irParaCadastro  = () => {
  this.setState({pagina: "cadastro"})
}

irParaLista  = () => {
  this.setState({pagina: "lista"})
}

  render () {
    return (
      <ContainerPrincipal>
        <Titulo>Labenusers</Titulo>
        {this.renderizaPagina()}
      </ContainerPrincipal>
    )
  }
}