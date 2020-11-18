import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: black;
`

const ImgLogoDiv = styled.div`
    display: flex;
    position: absolute;
    border-radius: 10px;
    border: 1px solid white;
    left: 33vw;
    top: 15vh;
    height: 300px;
    width: 500px;

    img{
        border-radius: 10px;
    }
`

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 5vh;
    right: 41vw;
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
            <ImgLogoDiv>
                <img src="https://picsum.photos/id/1022/500/300"/>
            </ImgLogoDiv>
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