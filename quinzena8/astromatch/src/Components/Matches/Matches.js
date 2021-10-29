import axios from "axios";
import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { BASE_URL } from "../../Constants/BaseURL";
import {
    PageContainer,
    CandidateContainer,
    ListItem,
    Avatar
} from './styles'


export const Matches = (props) => {

    const [matches, setMatches] = useState([]);

    const getMatches = () => {
        const URL = `${BASE_URL}/matches`

        axios
        .get(URL)
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })

    }
    
    const MapMatches = () => {
        const list = matches.map((match) => {
            return(
                <ListItem>
                    <Avatar src={match.photo} />
                    <h4> {match.name} </h4>
                </ListItem>
            )
        })
        return list
    }

    useEffect(() => {
        getMatches()
    }, [])


    return (
        <PageContainer>
            <CandidateContainer>
                { matches.length ? <MapMatches/> : <p> Continue tentando </p>}
            </CandidateContainer>
    </PageContainer>
    )
}

export default Matches;