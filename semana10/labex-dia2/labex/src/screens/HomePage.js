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
    background-color: grey;
`

const ImgLogoDiv = styled.div`
    display: flex;
    position: absolute;
    left: 33vw;
    top: 15vh;
    height: 300px;
    width: 500px;
`

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 8vh;
    right: 41vw;
    height: 150px;
    width: 200px;
    justify-content: space-evenly;

` 

const GoToLoginPageButton = styled.button`

`

const GoToFormPageButton = styled.button`

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
                    Login
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