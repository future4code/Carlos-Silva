import React from "react";
import axios from "axios";
import styled from "styled-components";
import CriaPlaylistPage from "./components/CriaPlaylistPage"
import ListaPlaylistPage from "./components/ListaPlaylistPage"



class App extends React.Component {
  state = {
    criaPlaylistPage: true
  }

  trocaPaginas =() => {
    this.setState({ criaPlaylistPage: !this.state.criaPlaylistPage });
  }

  render() {
    const paginaAtual = this.state.criaPlaylistPage ? <CriaPlaylistPage /> : <ListaPlaylistPage />;

    return (
      <div>
        {paginaAtual}
        <button onClick={this.trocaPaginas}>Trocar de página</button>
      </div>
    );

  }
  
}

export default App;
