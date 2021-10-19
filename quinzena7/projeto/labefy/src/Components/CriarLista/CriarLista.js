import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";

const ContainerPrincipal = styled.div `
width: 100vw;
margin-left: -8px;
margin-right: -8px;
margin-top: -8px;
padding: 0;
background-color: black;;
`
const Header = styled.div `
display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 98, 5vw;
  height: 15vh;
`

const ContainerCriarPlaylist = styled.div `
color: #32bea6;
min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Titulo = styled.h1 `
color: #3AD5A1;
margin-left: 20px;
font-size: 46px;
font-family: "Amatic SC";
`

const Input = styled.input `
 border-bottom: 1px solid pink;
width: 300px;
height: 30px;
margin: 30px;
margin-bottom: 0;
`

const Footer = styled.footer`
height: 10vh;
color: white;
font-size: 12px;
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid pink;
`

const Imagem = styled.img`
height: 50px;
width: 90px;
`

const BotaoCriar = styled.button `
margin-top: 10px;
margin-bottom: 20px;
padding: 5px;
font-size: 16px;
cursor: pointer;
`

const BotaoMinhasPlaylists = styled.button `
font-size: 16px;
cursor: pointer;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`

export default class CriarLista extends React.Component {
    state = {
        nome: ""
    }

    onChangeNome = (ev) => {
        this.setState({nome: ev.target.value})
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }
        axios.post(url, body, {
            headers: {
                Authorization: "julia-rebellato-banu"
            }
        })
        .then((res) => {
            console.log(res)
                Swal.fire(
                    "",
                    'Playlist criada com sucesso!',
                    'success'
                  )
        })
        .catch((err) => {
            console.log(err.response.data)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Não foi possível criar a sua playlist. Tente outro nome! ',
                footer: ""
              });
        })
        this.setState({nome: ""});
    }
    

    render() {
        return (
            <ContainerPrincipal>
                <Header>
                <Titulo>labefy</Titulo>
                <Imagem src="https://i.pinimg.com/originals/fa/99/29/fa99295031ca46795469b0f7b4c9b498.png" />
                </Header>
                <ContainerCriarPlaylist>
                <Input 
                placeholder={"Dê um nome à sua playlist"} 
                value={this.state.nome}
                onChange={this.onChangeNome}
                />
                <BotaoCriar onClick={this.criarPlaylist}>Criar</BotaoCriar>
                <BotaoMinhasPlaylists onClick={this.props.irParaListas}>Minhas playlists</BotaoMinhasPlaylists>
                </ContainerCriarPlaylist>
                <Footer>
                    Labefy criado por Julia Rebellato
                </Footer>
            </ContainerPrincipal>
        )
    }
}
  