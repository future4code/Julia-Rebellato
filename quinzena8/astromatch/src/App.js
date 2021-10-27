import react, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import TelaInicial from "./Components/Tela Inicial/TelaInicial";
import Matches from "./Components/Matches/Matches";

const Div = styled.div`
color: blue;
`;

const Titulo = styled.h1`
margin: 20px;
`

export const App = () => {
  const [pagina, setPagina] = useState("tela-inicial");

 const irParaTelaInicial = () => {
    setPagina("tela-inicial")
  }

 const irParaMatches = () => {
    setPagina("matches")
  }


const renderizarPagina = () => {
  switch(pagina){
    case "tela-inicial":
      return <TelaInicial irParaMatches={() => irParaMatches()} />;
    case "matches":
      return <Matches irParaTelaInicial={() => irParaTelaInicial()} />;
      default:
        alert("Ops! Alguma coisa deu errado");
  }
}



return (
  <div>
  <Titulo>Astromatch</Titulo>
  {renderizarPagina()}
  </div>
)
}

export default App;