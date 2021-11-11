import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");
  

  // método que roda após a montagem do componente
    // função axios que está batendo na API e buscando 151 pokemons
    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => {
          setPokeList(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const changePokeName = (event) => {
      setPokeName(event.target.value);
    };


    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokeName={pokeName} />}
      </div>
    );
  }


export default App;
