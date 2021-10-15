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

const ListaComBotao = styled.div `
display: flex;
justify-content: center;
align-items: center;
margin: 10px auto;
padding: 0 10px;
font-size: 20px;
`

const Lista = styled.li `
max-width: max-content;
padding: 5px;
border-radius: 5px;
background-color: salmon;
color: black;
:hover {
background-color: lightpink;
}
`

const BotaoDeletar = styled.button `
margin: 10px 20px;
font-size: 16px;
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

  pegarListaUsuarios = async () => {
    try {
      const response = await axios.get(url, headers)
      console.log(response.data)
      this.setState({listaUsuarios: response.data})
    } catch(error) {
      console.log(error)
    }
  }

  deletarUsuario = (id) => {
  axios
  .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
  .then(res => {
    console.log(res)
    alert("Usuário apagado com sucesso!")
    this.pegarListaUsuarios();
  })
  .catch((err) => {
    alert("Náo foi possível apagar esse usuário!");
    console.log(err);
  })

    
  
}
       
    render() {
      const listaNomesUsuarios = this.state.listaUsuarios.map((usuario) => {
        return <ListaComBotao><Lista key={usuario.id}>{usuario.name}</Lista>
        <BotaoDeletar onClick={() => this.deletarUsuario(this.pegarListaUsuarios.id)}> Deletar </BotaoDeletar></ListaComBotao>
      });
        return (
    <ContainerPrincipal>
      <ListaUsuarios>Lista de Usuários</ListaUsuarios>
       <ul>{listaNomesUsuarios}</ul>
       
    </ContainerPrincipal>
        )
    }
  }