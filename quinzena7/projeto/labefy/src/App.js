import React from 'react';
import Styled from 'styled-components';
import CriarLista from './Components/CriarLista/CriarLista';
import ListaPlaylist from './Components/ListaPlaylist/ListaPlaylist';
import Detalhes from './Components/Detalhes/Detalhes';



export default class App extends React.Component {
  state = {
    telaAtual: "criar-lista"
  }

  renderizaTela = () => {
    switch(this.state.telaAtual){
      case "criar-lista":
        return <CriarLista irParaListas={this.irParaListas}/>
      case "listas":
        return <ListaPlaylist irParaDetalhes={this.irParaDetalhes} irParaCriarLista={this.irParaCriarLista}/>
      case "detalhes":
        return <Detalhes irParaCriarLista={this.irParaCriarLista} irParaListas={this.irParaListas}/>
      default:
        return <div>Erro! Página não encontrada ☹️</div>
    }
  }

  irParaCriarLista = () => {
    this.setState({telaAtual: "criar-lista"})
  }

  irParaListas = () => {
    this.setState({telaAtual: "listas"})
  }

  irParaDetalhes = () => {
    this.setState({telaAtual: "detalhes"})
  }


  render(){
  return (
    <div>
      {this.renderizaTela()}
    </div>  
  )}
  }

