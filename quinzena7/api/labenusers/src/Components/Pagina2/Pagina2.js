import React from "react"
import styled from "styled-components"
// import {url, headers} from "src/Components/Parametros/Parametros.js";
import axios from "axios";

const ContainerPrincipal = styled.div`
width: 100vw;
`

const ListaUsuarios = styled.h2`
display: flex;
justify-content: center;
align-items: center;
`

const ContainerLista = styled.div `
display: flex;
justify-content: center;
align-items: center;
margin: 10px auto;
padding: 0 10px;
font-size: 20px;
`

const ListaComBotao = styled.ul `
border: 1px solid black;
display: flex;
justify-content:space-between;
text-align: center;
align-items:center;
margin:10px;
padding:10px;
width: 300px;
`

const BotaoIrParaCadastro = styled.button `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: auto;
font-size: 16px;
`

const BotaoX = styled.button `
cursor: pointer;
:hover {
  color: red;
}
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
    headers: {
        Authorization: "julia-rebellato-banu"
    }
};

export default class Pagina2 extends React.Component {
  state = {
    listaUsuarios: [],
}

componentDidMount() {
    this.pegarListaUsuarios();
  }

  pegarListaUsuarios = () => {
      axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({listaUsuarios: res.data})
      })
      .catch((err) => {
        console.log(err)
        alert("Ocorreu um problema. Tente novamente!")
      })
  }

  deletarUsuario = (id) => {
    const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      axios
      .delete(urlDelete, headers)
      .then((res) => {
        console.log(res)
        alert("Usuário deletado com sucesso!")
        this.pegarListaUsuarios()
      })
      .catch((err) => {
        console.log(err.response.data)
        alert("Opa! Alguma coisa deu errado. O usuário não pode ser deletado ☹️")
      })
  }
  

       
    render() {
      const listaNomesUsuarios = this.state.listaUsuarios.map((usuario) => {
        return <ContainerLista>
        <ListaComBotao key={usuario.id}>
          {usuario.name}
          <BotaoX onClick={() => this.deletarUsuario(usuario.id)} >X</BotaoX>
        </ListaComBotao>
        </ContainerLista>
      });
        return (
    <ContainerPrincipal>
      <BotaoIrParaCadastro onClick={this.props.irParaCadastro}>Página inicial</BotaoIrParaCadastro>
      <ListaUsuarios>Lista de Usuários</ListaUsuarios>
       {listaNomesUsuarios}
    </ContainerPrincipal>
        )
    }
  }