import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
// import Post2 from './components/Post2/Post2'
// import Post3 from './components/Post3/Post3'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/159'}
        />
        <Post
          nomeUsuario={'sophia'}
          fotoUsuario={'https://picsum.photos/50/83'}
          fotoPost={'https://picsum.photos/200/155'}
        />
         <Post
          nomeUsuario={'sophia'}
          fotoUsuario={'https://picsum.photos/50/57'}
          fotoPost={'https://picsum.photos/200/154'}
        />
      </MainContainer>
    );
  }
}

// class Insta extends React.Component {
//   render() {
//     return (
//       <MainContainer>
        // <Post2
        //   nomeUsuario2={'laura'}
        //   fotoUsuario2={'https://picsum.photos/50/51'}
        //   fotoPost2={'https://picsum.photos/200/152'}
        // />
//       </MainContainer>
//     );
//   }
// }

// class Instagram extends React.Component {
//   render() {
//     return (
//       <MainContainer>
        // <Post3
        //   nomeUsuario={'sophia'}
        //   fotoUsuario={'https://picsum.photos/50/57'}
        //   fotoPost={'https://picsum.photos/200/154'}
        // />
//       </MainContainer>
//     );
//   }
// }

export default App; 

// GENTE NAO FAÇO A MÍNIMA IDEIA DE COMO FAZ PRA TER MAIS DE UM POST NA MESMA PÁGINA SOCORRO MEU DEUS