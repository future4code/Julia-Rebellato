import React from 'react';
// import './App.css';
import styled from 'styled-components';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Final from './pages/Final';

const Container = styled.div `
width: 100;
height: 80vh;
`

const ProximaEtapa = styled.button `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: auto;
cursor: pointer;
`

function App() {
  return (
    <Container>
      <Etapa1 />
      <ProximaEtapa>Próxima etapa</ProximaEtapa>
    </Container>
  );
}

export default App;
