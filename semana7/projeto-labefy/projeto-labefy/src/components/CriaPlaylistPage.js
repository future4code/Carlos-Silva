import React from "react"
import axios from "axios"
import styled from "styled-components"

class CriaPlaylistPage extends React.Component {
    state = {
        nameValue: ""
    };

    criaPlaylist = () => {
            const body ={
                name: this.state.nameValue
            };  
            
            axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body, 
            {
                headers: {
                    Authorization: "carlos-augusto-dumont"
                }
            }).then ((response) => {
                alert("Playlist Criada!");
                this.setState({ nameValue: "" });
            }).catch((error) => {
                console.log(error.message);
            });
    };

    onChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value });
    };

    render() {
  
      return (
        <div>
          <input value={this.state.nameValue} onChange={this.onChangeNameValue} placeholder="Nova Playlist" />
          <button onClick={this.criaPlaylist} >Criar Playlist</button>
        </div>
      );
  
    }
    
  }
  
  export default CriaPlaylistPage;
  