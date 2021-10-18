import React from "react";
// import Styled from "styled-components";
// import Axios from "axios";
// import Swal from "sweetalert2"; 

export default class Detalhes extends React.Component {
    render(){
    return (
      <div>
        <h1>Detalhes</h1>
        <button onClick={this.props.irParaListas}>Minhas playlists</button>
        <button onClick={this.props.irParaCriarLista}>Página inicial</button>
      </div>
    )}
    }
  