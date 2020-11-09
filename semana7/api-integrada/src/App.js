import React from "react";
import axios from "axios";


class App extends React.Component {
  state = {
    
    users: [],
    userName: "",
    userEmail: ""
    
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "carlos-augusto-dumont"
      }
    }).then ((response) => {
      this.setState({ user: response.data.result.list });
    }).catch((error) => {
      alert(error.message);
    });
  };

  createUser = () => {
    const body = {
      "name": this.state.userName,
      "email": this.state.userEmail
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "carlos-augusto-dumont"
      }
    }
    ).then((response) => {
      this.setState({userName: ""});
      this.getAllUsers();
    }).catch((error) => {
      console.log(error.message);
    })
  }

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value});
  };

  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value});
  };
  render() {

    const allUsers = this.state.users.map((user) => {
    return <p key={user.id}>{user.name}</p>
    })

      return (
        <div>
          <div>
            <input 
            type="text"
            placeholder="Digite seu nome" 
            value={this.state.userValue} 
            onChange={this.onChangeUserValue}
            />
            <input type="e-mail" 
            placeholder="Digite seu e-mail"
            value={this.state.userEmail} 
            onChange={this.onChangeUserEmail}
            />
            <button onClick={this.createUser}>Cadastrar</button>
          </div>
          {allUsers}
        </div>
      );
    }

  }
  

export default App;
