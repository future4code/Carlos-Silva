import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import space from "../img/nasa-rTZW4f02zY8-unsplash.jpg"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    background-image: url(${space});
    background-size: cover;
`

const TitleDiv = styled.div`
    display: flex;
    color: #cce6f4;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-weight: bold;
    font-size: 30px;
    height: 150px;
    width: 150px;
    border: 3px solid purple;
    border-radius: 50%;
`

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    bottom: 5vh;
    right: 42vw;
    height: 150px;
    width: 200px;
    justify-content: space-evenly;

` 

const GoToLoginPageButton = styled.button`
    height: 40px;
    color: white;
    background-color: #f77f00;
    border-radius: 10px;
    border: none;
    outline: none;

    &:hover{
        background-color: #80b918;
        color: black;
        cursor: pointer;
    }

    &:active{
        background-color: yellow;
        color: black;
    }
`

const GoToFormPageButton = styled.button`
    height: 40px;
    color: white;
    background-color: #7400b8;
    border-radius: 10px;
    border: none;
    outline: none;

    &:hover{
        background-color: #80b918;
        color: black;
        cursor: pointer;
    }

    &:active{
        background-color: yellow;
        color: black;
    }
`

const HomePage = () => {

    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToApplicationFormPage =() => {
        history.push("/application-form")
    }

    return(
        <MainDiv>
            <TitleDiv>
                <p>LabeX</p>
            </TitleDiv>
            <ButtonsDiv>
                <GoToLoginPageButton 
                onClick={goToLoginPage}>
                    Login Admin
                </GoToLoginPageButton>
                <GoToFormPageButton 
                onClick={goToApplicationFormPage}>
                    Quero viajar pelo espaço!
                </GoToFormPageButton>
            </ButtonsDiv>
        </MainDiv>
    )
}

export default HomePage