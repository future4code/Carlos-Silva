import React from "react"
import axios from "axios";
import styled from "styled-components";

const DelButton = styled.span`
    color: red;
    margin-left: 10px;
    
    &:hover {
        color: white;
        background-color: red;
        border-radius: 5px;
        cursor: pointer;
    }

`
const DivLista = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    height: 10vh;
    width: 10vw;

    p {
        margin: 0;
    }

`

const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const header = {
    headers: {
        Authorization: "carlos-augusto-dumont"
    }
};


class ListPage extends React.Component {
    state = {
        userslist: []

    };

    componentDidMount = () => {
        this.getAllUsers();
    };

    getAllUsers = () => {
        axios.get(mainUrl, header).then((resp) => {
            this.setState({userslist: resp.data });
        }).catch((error) => {
            console.log(error.message);
        });
    };

    deleteUser = (userId) => {
        axios.delete(`${mainUrl}/${userId}`, header).then((resp) => {
            alert("User has been deleted");
            this.getAllUsers();
        }).catch ((error) => {
            console.log(error.message);
            alert("Sorry, we're having problems to delete this user");
        });
    };
    
    render() {
        const newUsersList = this.state.userslist.map((user) => {
            return (
                <DivLista>
                    <p key={user.id}>{user.name}
                        <DelButton onClick={() => this.deleteUser(user.id)}>
                                Delete
                        </DelButton>
                    </p>
                </DivLista>
            );
        });

        return <div>{newUsersList}</div>;

    } 
}

export default ListPage;
