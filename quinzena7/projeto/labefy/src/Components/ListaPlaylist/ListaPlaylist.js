import axios from "axios";
import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const ContainerPlaylist = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 400px;
`

const CardPlaylist = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: left;
`
const BotaoDetalhes = styled.button `
font-size: 14px;
cursor: pointer;
`

const BotaoDeletar = styled.button `
font-size: 14px;
cursor: pointer;
`

const ContainerPrincipal = styled.div `
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

const Botoes = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
gap: 10px;
`

const BotaoPaginaInicial = styled.button `
font-size: 16px;
cursor: pointer;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`

export default class ListaPlaylist extends React.Component {
    state = {
      playlists: []
    }

    componentDidMount() {
      this.pegarPlaylists()
    }

    pegarPlaylists = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      axios.get(url, {
        headers: {
          Authorization: "julia-rebellato-banu"
        }
      })
      .then((res) => {
        this.setState({playlists: res.data.result.list})
      })
      .catch((err) => {
        console.log(err)
      })
    }

    deletarPlaylist = (id) => {
      if (window.confirm("Você tem certeza que deseja deletar essa playlist?")){  
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
      
      axios.delete(url, {
          headers: {
            Authorization: "julia-rebellato-banu"
          }
        })
        .then((res) => {
          Swal.fire(
            "",
            'Playlist deletada com sucesso!',
            'success'
          )
          this.pegarPlaylists()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não foi possível deletar essa playlist',
            footer: ""
          })
        })
    }}

    render() {
      const listaCardPlaylist = this.state.playlists.map((playlist) => {
        return (
          <ContainerPlaylist>
            <CardPlaylist key={playlist.id}>
                {playlist.name}
              </CardPlaylist>
              <Botoes>
                <BotaoDetalhes onClick={this.props.irParaDetalhes}>Detalhes</BotaoDetalhes>
                <BotaoDeletar onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</BotaoDeletar>
              </Botoes>
            </ContainerPlaylist>
        )
    })

  

    return (
      <ContainerPrincipal>
        
        <h1>Minhas Playlists</h1>
        {listaCardPlaylist}
        
        <BotaoPaginaInicial onClick={this.props.irParaCriarLista}>Página inicial</BotaoPaginaInicial>
      </ContainerPrincipal>
    )}
}
  