import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const Post2Container = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const Post2Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const Post2Footer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const Post2Photo = styled.img`
  width: 100%;
`

class Post2 extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 4,
    comentando: false,
    numeroComentarios: 4
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <Post2Container>
      <Post2Header>
        <UserPhoto src={this.props.fotoUsuario2} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario2}</p>
      </Post2Header>

      <Post2Photo src={this.props.fotoPost2} alt={'Imagem do post'}/>

      <Post2Footer>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </Post2Footer>
      {componenteComentario}
    </Post2Container>
  }
}

export default Post2;

// que loucura o react 🤯

// o valor icone, onClickIcone e valorContador vem do IconeComContador?

// o IconeComContador representa o número de curtidas e comentários no post.

// as 4 propriedades são utilizadas na class Post.

// quando eu mudo o valor inicial, o número de curtidas e comentários no post altera para o número que eu inseri.

// a função onClickCurtida aparece no console.

// a função onClickComentario altera a quantidade de comentários no post, não no console.

// clicando no botao de comentário, é aberto um input para que o comentário seja escrito.

// 