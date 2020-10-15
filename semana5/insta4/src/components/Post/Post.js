import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeBookmarkBranco from '../../img/bookmark_icon.svg'
import iconeBookmarkPreto from '../../img/bookmarkblack-icon.svg'
import iconeCompartilharPreto from '../../img/share-icon.svg'
import iconeCompartilharBranco from '../../img/sharebranco-icon.svg'

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

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
        
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post