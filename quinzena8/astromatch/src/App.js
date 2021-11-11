import React, { useState } from "react";
import axios from "axios";
import Index from "./Components/Home/Index";
import Matches from "./Components/Matches/Matches";
import {
  Titulo,
  Botoes
} from './AppStyles.js'
import { BASE_URL } from "./Constants/BaseURL";


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
      return <Index irParaMatches={() => irParaMatches()} />;
    case "matches":
      return <Matches irParaTelaInicial={() => irParaTelaInicial()} />;
      default:
        alert("Ops! Alguma coisa deu errado");
  }
};

const changePage = () => {
  if(pagina === "tela-inicial") {
    setPagina("matches");
  } else {
    setPagina("tela-inicial");
  }
}

const clearMatches = () => {
  const URL = `${BASE_URL}/clear`

  axios
  .put(URL)
  .then(() => {
    alert("Você apagou todos os matches")
    setPagina("tela-inicial")
  })
.catch(() => {

}) 
}


return (
  <div>
  <Titulo>Astromatch ❤️‍🔥</Titulo>
  {renderizarPagina()}
    <Botoes onClick={changePage}>{pagina === "tela-inicial" ? "Ver meus Matches" : "Ir para Tela Inicial"}</Botoes>
    <Botoes onClick={clearMatches} >Limpar Matches</Botoes>
  </div>
);
}

export default App;