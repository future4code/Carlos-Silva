import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

const MainDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const AplicationDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    width: 25vw;
`

const ChoiceButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
    width: 300px;
`

const ClearButtonDiv = styled.div`
    display: flex;
    margin-top: 20px;
    width: 340px;
    height: 28px;
    justify-content: flex-end;
    
    button{
        font-size: 10px;
        height: 20px;
        margin-top: 5px;
    }

`

const MainPage = (props) => {

    return(
        <MainDiv>
            <AplicationDiv>
                <p>ASTROMATCH</p>
                <img src="https://picsum.photos/300/350" />
                <ChoiceButtonsDiv>
                    <button>Nope</button>
                    <button>Match</button>
                </ChoiceButtonsDiv>
                <ClearButtonDiv>
                    <button>Resetar seleções</button>
                </ClearButtonDiv>
            </AplicationDiv>
        </MainDiv>
    )
}

export default MainPage