import React from "react"
import styled from "styled-components"
import axios from "axios";

const ContainerPrincipal = styled.div`
width: 100vw;
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
// const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

// const headers = {
//     headers: {
//         Authorization: "julia-rebellato-banu"
//     }
// };

export default class Pagina1 extends React.Component {
  state = {
    nomeUsuario: "",
    emailUsuario: ""
  }

  onChangeNomeUsuario = (e) => {
    this.setState({nomeUsuario: e.target.value});
  }

  onChangeEmailUsuario = (e) => {
    this.setState({emailUsuario: e.target.value})
    }

  criarUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    };

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
          Authorization: "julia-rebellato-banu"
      }
  })
    .then((res) => {
      console.log(res);
      alert("Usuário criado com sucesso! 🥳")
      this.setState({nomeUsuario: "", emailUsuario: ""})
    })
    .catch((err) => {
      alert("Erro: usuário não pode ser criado 😔")
    }
    )};

    
    

    render () {
        return (
    <ContainerPrincipal>
      <CriarUsuario>Criar Usuário</CriarUsuario>
      <ContainerInputs>
      <input
         placeholder="Nome"
         value={this.state.nomeUsuario}
         onChange={this.onChangeNomeUsuario}
      />
       <input
         placeholder="Email"
         value={this.state.emailUsuario}
         onChange={this.onChangeEmailUsuario}
      />
      <BotaoCriar onClick={this.criarUsuario}> Criar </BotaoCriar>
      </ContainerInputs>
    </ContainerPrincipal>
        )}}