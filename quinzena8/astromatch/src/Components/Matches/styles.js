import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 70vh;
`;

export const CandidateContainer = styled.div`
  display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border: 1px solid black;
height: 70vh;
width: 40vw;
margin-top: 45px;
`;

export const ListItem = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
width: 80%;
margin-top: 20px;
padding-left: 10px;
padding-right: 10px;
`;

export const Avatar = styled.img`
    max-width: 60px;
    margin: 0.1em;
` 