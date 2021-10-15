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
border-start-end-radius: 5px;
border-end-start-radius: 5px;
display: flex;
justify-content:space-between;
text-align: center;
align-items:center;
margin:10px;
padding:10px;
width: 300px;
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

  
    
  

       
    render() {
      const listaNomesUsuarios = this.state.listaUsuarios.map((usuario) => {
        return <ContainerLista><ListaComBotao><ul key={usuario.id}>{usuario.name}</ul>
        </ListaComBotao>
        </ContainerLista>
      });
        return (
    <ContainerPrincipal>
      <ListaUsuarios>Lista de Usuários</ListaUsuarios>
       <ul>{listaNomesUsuarios}</ul>
       
    </ContainerPrincipal>
        )
    }
  }