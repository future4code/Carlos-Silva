import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClear } from "react-icons/ai";

const MainDiv = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #f1d302;
`

const AplicationDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 25vw;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    background-color: pink;
    overflow: auto;

`

const ClearButtonDiv = styled.div`
    display: flex;
    position: absolute;
    right: 400px; 
    bottom: 40px; 
`

const HeaderDiv = styled.div`
    display: flex;
    position: relative;
    width: 340px;
    justify-content: center;
`

const HeaderButtonDiv = styled.div`
    display: flex;
    position: absolute;
    left: 20px;
    bottom: 16px;
`

const MatchInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

`

const AplicationTitle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: cursive;
    font-weight: 900;
    font-size: 20px;
    border: 1px solid black;
    color: white;
    background-color: #340068;
    width: 160px;
    height: 30px;
    border-radius: 20%;
`

const BackButton = styled.button`
    color: purple;
    border-radius: 40%;
    border: none;
    background-color: transparent;
    outline: none;

    &:hover{
        color: white;
        cursor: pointer;
        
    }

    &:active{
        color: hotpink;
        box-shadow: 1px 1px 10px 0;
    }
`

const ClearMatchesButton = styled.button`
    color: red;
    border-radius: 30%;
    border: none;
    background-color: transparent;
    outline: none;

    &:hover{
        color: green;
        cursor: pointer;
        
    }

    &:active{
        color: #258ea6;
        box-shadow: 1px 1px 10px 0;
    }
`
const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-silva/"

const ListPage = (props) => {
    const [matches, setMatches] = useState([])
    const renderMainPage = () => {
        props.renderMain("MainPage")
    }
    const clearMatches = () => {
        axios
        .put(`${baseUrl}clear`).then( () => {
            
        }).catch(error => {
            console.log(error)
        })
    }
    
    const getMatches = () => {
        axios
        .get(`${baseUrl}matches`).then(response => {
            setMatches(response.data.matches)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getMatches()
    }, [])

    return(
        <MainDiv>
            <AplicationDiv>
                <HeaderDiv>
                    <HeaderButtonDiv>
                        <BackButton
                         onClick={renderMainPage}>
                             <TiArrowBack size={30}/>
                        </BackButton>
                    </HeaderButtonDiv>
                    <AplicationTitle>ASTROMATCH</AplicationTitle>
                </HeaderDiv>
                {matches.map((match) => {
                    return (
                        <MatchInfoDiv>
                            <img src={match.photo} />
                            <p>{match.name}</p>
                        </MatchInfoDiv>
                    )
                })}
            </AplicationDiv>
            <ClearButtonDiv>
                <ClearMatchesButton
                 onClick={clearMatches}>
                     <AiOutlineClear size={50}/>
                </ClearMatchesButton>
            </ClearButtonDiv>
        </MainDiv>
    )
}


export default ListPage