import React, { useState, useEffect} from "react";
import axios from "axios";
import {
    PageContainer,
    CandidateContainer,
    CandidateImage,
    CandidateName,
    CandidateDescription,
    ChooseButton
} from './styles'
import { BASE_URL } from "../../Constants/BaseURL";


export const Index = () => {
    const [profile, setProfile] = useState({});

const getProfile = () => {
    const URL = `${BASE_URL}/person`

    axios
    .get(URL)
    .then((response) => {
        setProfile(response.data.profile)
    })
    .catch((err) => {
        
    })

}

useEffect(() => {
    getProfile()
}, [])


const choosePerson = (boolean) => {
    const URL = `${BASE_URL}/choose-person`
    const body = {
        "id": profile.id,
        "choice": boolean
    }

    axios
    .post(URL, body)
    .then((res) => {
        getProfile()
    })
    .catch((err) => {
    
    })
}

return (
    <PageContainer>
        <CandidateContainer>
            <CandidateImage src={profile.photo} />
            <CandidateName>{profile.name}, {profile.age}</CandidateName>
            <CandidateDescription>{profile.bio} </CandidateDescription>
            <div>
                <ChooseButton onClick={() => choosePerson(false)} >❌</ChooseButton>
                <ChooseButton onClick={() => choosePerson(true)} >💚</ChooseButton>
            </div>
        </CandidateContainer>
    </PageContainer>
);
}

export default Index;