import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/URL";

function CharacterDetailPage(props) {

    const [ details, setDetails ] = useState([])
    const [ planet, setPlanet ] = useState({})

    function getCharacterDetails(url, saveData) {
        axios
        .get(url)
        .then((res) => {
          console.log(res.data.results)
          saveData(res.data)
        })
        .catch((err) => {
          alert('algo deu errado')
        });
    }

    function getPlanetDetails(url, saveData) {
        axios.get(url)
            .then((response) => {
                saveData(response.data)
            }).catch((error) => {
               
            })
    }

    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])

    
    return (
        <div>
            <h1>Detalhes de personagem</h1>
           {details.name && planet.name ?
                <div>
                    <p>Nome: {details.name}</p>
                    <p>Planeta de origem: {planet.name}</p>
                </div> :
                <p>Carregando...</p>}
            <button onClick={props.goToListPage}>Voltar</button>
        </div>
    )
}

export default CharacterDetailPage;