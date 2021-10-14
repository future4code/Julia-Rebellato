import React from "react";
import styled from "styled-components";
import Pagina1 from "./Components/Pagina1";
import Pagina2 from "./Components/Pagina2";

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

export default class App extends React.Component {
  state = {
    pagina: 1,
  }

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1: 
        return <Pagina1 />;
      case 2: 
        return <Pagina2 />;
}
}

irParaProximaPagina  = () => {
  if(this.state.pagina === 1){
    this.setState( {pagina: 2});
  }else if(this.state.pagina === 2) {
    this.setState({pagina: 1})
}
}

  render () {
    return (
      <ContainerPrincipal>
        <Titulo>Labenusers</Titulo>
        <BotaoPágina onClick={this.irParaProximaPagina} >Trocar de Página</BotaoPágina>
        {this.renderizaPagina()}
      </ContainerPrincipal>
    )
  }
}