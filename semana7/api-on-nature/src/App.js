import React from "react";
import axios from "axios";
import styled from "styled-components";

const Cabecalho = styled.div`

  display:flex;
  justify-content: center;
  background-color: #020004;
  color: yellow;

  h1 {

    font-size:50px;

  }

`
const DivSelect = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  /* background-color: limegreen; */

`
const DivResultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 390px;
`
const PersonagemSelect = styled.select`
  height: 30px;
  width: 250px;
`
const Subtitulo = styled.div`
  display:flex;
  justify-content: center;
  background-color: #1A1C22;
  color: #DDDEDA;
`

class App extends React.Component {
  state = {
    listaDePersonagens: [],
    infoPersonagem: "",
  };

  // componentDidMount(){
  //   this.pegaPersonagens();
  // }

  pegaPersonagens = () => {
    const url = "https://swapi.dev/api/people/";
    axios.get(url).then((response) => {
      this.setState({ listaDePersonagens: response.people.name})
    });
  };

  onChangeSelect = (event) => {
    const url = `https://swapi.dev/api/people/${event.target.value}`;
    axios.get(url).then((response) => {
      this.setState({ infoPersonagem: response.birth_year })
      this.setState({ infoPersonagem: response.hair_color })
      this.setState({ infoPersonagem: response.homeworld })
      this.setState({ infoPersonagem: response.gender })
    })
  }

  render() {
    console.log(this.state.listaDePersonagens)
    const novaListaDePersonagens = this.state.listaDePersonagens.map((personagem) => {
    return <option key={personagem.name} value={personagem.name}>{personagem.name}</option>;
    });

    return (
      <div>
        <Cabecalho>
          <h1>STAR WARS</h1>
        </Cabecalho>
        <Subtitulo>
          <h2>Quer saber mais sobre seu personagem favorito de Star Wars?</h2>  
        </Subtitulo>
        <DivSelect>
          <PersonagemSelect onChange={this.onChangeSelect}>
            {novaListaDePersonagens}
          </PersonagemSelect>
          <DivResultado>
            {this.state.infoPersonagem}
          </DivResultado>
          
        </DivSelect>
                
      </div> 
    );
  }
  
}

export default App;
