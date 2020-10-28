import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledButton = styled.button`
    display: block;
    left: 50px;

    &:hover {
    cursor: pointer;
  }

`

const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const header = {
    headers: {
        Authorization: "carlos-augusto-dumont"
    }
};

class UserAssignPage extends React.Component {
    state = {
        userName: "",
        userEmail: ""
    };

    createUser = () => {
        const body = {
            name: this.state.userName,
            email: this.state.userEmail
        };

        axios.post(mainUrl, body, header).then((resp) => {
            alert("User has been created. Congratulations!");
            this.setState({userName: "", userEmail: ""});
        }).catch((error) => {
            console.log(error.message);
            alert("Sorry, your user can't be created. :(");
        });
    };
    
    onChangeUserName = (event) => {
        this.setState({userName: event.target.value});
    };

    onChangeUserEmail = (event) => {
        this.setState({userEmail: event.target.value});
    };
    
    render() {
        return (
            <div>
                <input 
                    value={this.state.userName} 
                    onChange={this.onChangeUserName} 
                    placeholder= "User name here"
                />
                <input 
                    value={this.state.userEmail} 
                    onChange={this.onChangeUserEmail} 
                    placeholder= "User email here"
                />
                <StyledButton onClick={this.createUser}>Create user</StyledButton>
            </div>
        );
    }    
}

export default UserAssignPage