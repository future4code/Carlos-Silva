import React from 'react'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeBookmarkBranco from '../../img/bookmark_icon.svg'
import iconeBookmarkPreto from '../../img/bookmarkblack-icon.svg'
import iconeCompartilharPreto from '../../img/share-icon.svg'
import iconeCompartilharBranco from '../../img/sharebranco-icon.svg'
import styled from 'styled-components'

const PostContainer = styled.div`
  margin: auto;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img`
  width: 100%;
`
const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhado: false
  }

  onClickCurtida = () => {
    this.setState({ 
      curtido: !this.state.curtido
    })

    if(!this.state.curtido){ 
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })

    }else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })

    console.log('Curtiu!')
      }
  }

  onClickBookmark = () => {
    this.setState({ 
      marcado: !this.state.marcado
    })
  
  }

  onClickShare = () => {
    this.setState({ 
      compartilhado: !this.state.compartilhado
    })
  
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

    let iconeShare

    if(this.state.compartilhado) {
      iconeShare = iconeCompartilharPreto
    } else {
      iconeShare = iconeCompartilharBranco
    }

    let iconeBookmark

    if(this.state.marcado) {
      iconeBookmark = iconeBookmarkPreto
    } else {
      iconeBookmark = iconeBookmarkBranco
    }

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

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
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

        <IconeComContador
          icone={iconeBookmark}
          onClickIcone={this.onClickBookmark}
        />

        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />
        
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post