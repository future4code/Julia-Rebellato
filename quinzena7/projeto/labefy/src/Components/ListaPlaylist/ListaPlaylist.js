import axios from "axios";
import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const ContainerPrincipal = styled.div `
min-height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
margin-left: -8px;
margin-right: -8px;
margin-top: -8px;
padding: 0;
background-color: black;
min-height: 100vh;
`

const Header = styled.div `
display: flex;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 15vh;
border-bottom: 1px solid pink;
`

const TituloPrincipal = styled.h1 `
color: #3AD5A1;
margin-left: 20px;
font-size: 46px;
font-family: "Amatic SC";
display: flex;
justify-content: flex-start;
align-items: center;
`

const Imagem = styled.img`
height: 50px;
width: 90px;
`

const Titulo = styled.h1 `
color: white;
`

const ContainerPlaylist = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid white;
padding: 10px;
margin: 10px;
width: 400px;
color: white;
`

const CardPlaylist = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: left;
  font-size: 20px;
`

const Botoes = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
gap: 10px;
`

const BotaoDetalhes = styled.button `
font-size: 14px;
cursor: pointer;
border-radius: 24px;
padding: 12px;
:hover {
    background-color: #3AD5A1;
}
`

const BotaoDeletar = styled.button `
font-size: 14px;
cursor: pointer;
border-radius: 24px;
padding: 12px;
:hover {
    background-color: #3AD5A1;
}
`

const BotaoPaginaInicial = styled.button `
font-size: 16px;
cursor: pointer;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 24px;
padding: 12px;
margin: 20px;
:hover {
    background-color: #3AD5A1;
}
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
        <Header>
              <TituloPrincipal>labefy</TituloPrincipal>
              <Imagem src="https://i.pinimg.com/originals/fa/99/29/fa99295031ca46795469b0f7b4c9b498.png" />
        </Header>
        <Titulo>Minhas Playlists</Titulo>
        {listaCardPlaylist}
        <BotaoPaginaInicial onClick={this.props.irParaCriarLista}>Página inicial</BotaoPaginaInicial>
        <footer>
                    Labefy criado por Julia Rebellato
        </footer>
      </ContainerPrincipal>
    )}
}
  