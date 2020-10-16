import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {

    usuarios: [
      { nomeDoUsuario: 'Paulinha' ,
        fotoDoUsuario: 'https://picsum.photos/50/50?a1',
        fotoDoPost: 'https://picsum.photos/200/150?a1'
      },
      {
        nomeDoUsuario: 'Augusto' ,
        fotoDoUsuario: 'https://picsum.photos/50/50?a2',
        fotoDoPost: 'https://picsum.photos/200/150?a2'
      },
      {
        nomeDoUsuario: 'Helena' ,
        fotoDoUsuario: 'https://picsum.photos/50/50?a3',
        fotoDoPost: 'https://picsum.photos/200/150?a3'
      },
      
    ]
  }
  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario)=>{
      return (
          <Post
          nomeUsuario={usuario.nomeDoUsuario}
          fotoUsuario={usuario.fotoDoUsuario}
          fotoPost={usuario.fotoDoPost}
        />
      )
    })
    return (
      <div>
        {listaDeUsuarios}
      </div>
       
    );
  }
}

export default App;
