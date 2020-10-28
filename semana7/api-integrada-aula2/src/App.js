import React from "react";
import UserAssignPage from "./components/UserAssignPage"
import ListPage from "./components/ListPage"
import styled from "styled-components"

const HeaderDiv = styled.div`
  height: 20vh;
  background-color: orange;
`
const BodyDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: orange;
  height: 96.8vh;
`
const ChangePageButton = styled.button`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

`

class App extends React.Component {
  state = {
    UserAssignPage: true
  };

  changePage = () => {
    this.setState({ UserAssignPage: !this.state.UserAssignPage})
  }

  render() {
    const page = this.state.UserAssignPage ? <UserAssignPage /> : <ListPage />;

    return (
      <div>
        <HeaderDiv>
          <ChangePageButton onClick={this.changePage}>
              Change pages
          </ChangePageButton>
          <BodyDiv>          
            {page}
          </BodyDiv>
        </HeaderDiv>
      </div>
    );
  }
}

export default App;
