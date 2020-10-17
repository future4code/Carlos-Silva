import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

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
    ],
    inputUsuario:"",
    inputFotoUsuario:"",
    inputFotoPost: ""

  };
  
  adicionaPost = () =>{
    const novoPost = {
      nomeDousuario: this.state.inputUsuario,
      fotoDoUsuario: this.state.inputFotoUsuario,
      fotoDoPost: this.state.inputFotoPost
    };

    const novaArrayUsuarios = [novoPost, ...this.state.usuarios];

    this.setState({
      usuarios: novaArrayUsuarios,
      inputUsuario:"",
      inputFotoUsuario:"",
      inputFotoPost: ""
    });
  }
  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost= (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };
  
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
      <FormContainer>
          <input
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link foto perfil"}
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"link foto post"}
          />
          <button onClick={this.adicionaPost}>Novo post</button>
        {listaDeUsuarios}
      </FormContainer>
       
    );
  }
}

export default App;
