import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/URL";
import { CharacterCard } from "./style"


function CharacterListPage(props) {

    const [characterList, setCharacterList] = useState([])


    function getCharacterList() {
        axios
          .get(`${BASE_URL}/people/`)
          .then((res) => {
            console.log(res.data.results)
            setCharacterList(res.data.results)
          })
          .catch((err) => {
            alert('algo deu errado')
          });
        }
        
       useEffect(() => {
           getCharacterList()
       }, [])

    
       function showCharacters() {
        return characterList.map((character, id) => {
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={id}> {character.name} </CharacterCard>
        })
    }

    return(
        <div>
            <h1>
            CharacterListPage
            </h1>
            {showCharacters()}
        </div>
    )
}

export default CharacterListPage