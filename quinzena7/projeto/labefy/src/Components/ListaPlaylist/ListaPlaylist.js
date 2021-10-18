import axios from "axios";
import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const ContainerPlaylist = styled.div `
display: flex;
align-items: center;
justify-content: center;
`

const CardPlaylist = styled.div `
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: left;
`
const BotaoDetalhes = styled.button `
font-size: 14px;
display: flex;
align-items: right;
margin-left: 50px;
`

const BotaoDeletar = styled.button `
font-size: 14px;
display: flex;
align-items: right;
margin-right: 10px;
`

const ContainerPrincipal = styled.div `
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



export default class ListaPlaylist extends React.Component {
    state = {
      playlist: []
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
        this.setState({playlist: res.data.result.list})
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
      const listaCardPlaylist = this.state.playlist.map((playlists) => {
        return (
          <ContainerPlaylist>
            <CardPlaylist key={playlists.id}>
                {playlists.name}
                <BotaoDetalhes onClick={this.props.irParaDetalhes}>Detalhes</BotaoDetalhes>
                <BotaoDeletar onClick={() => this.deletarPlaylist(playlists.id)}>Deletar</BotaoDeletar>
            </CardPlaylist>
            </ContainerPlaylist>
        )
    })

  

    return (
      <ContainerPrincipal>
        
        <h1>Minhas Playlists</h1>
        {listaCardPlaylist}
        
        <button onClick={this.props.irParaCriarLista}>Página inicial</button>
      </ContainerPrincipal>
    )}
}
  