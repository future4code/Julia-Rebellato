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

const BotaoFinal = styled.button `
display: none;
`


class App extends React.Component {
  state = {
    etapa: 1,
  }

    renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />;
        case 2: 
          return <Etapa2 />;
        case 3: 
          return <Etapa3 />;
        case 4: 
          return <Final />;
  }
}

    irParaProximaEtapa  = () => {
      if(this.state.etapa === 1){
        this.setState( {etapa: 2});
      }else if(this.state.etapa === 2) {
        this.setState({etapa: 3})
      }else if(this.state.etapa === 3) {
        this.setState({etapa: 4})
      }
    }
  
  
    render () {
      let button;
      if (this.state.etapa !== 4) {
        button = <ProximaEtapa onClick={this.irParaProximaEtapa}>Próxima etapa</ProximaEtapa>
      } else {
        button = <BotaoFinal />
      }
    return (
    <Container>
      {this.renderizaEtapa()}
      {button}
    
      
    
    </Container> 
    )
    }
}

export default App;
