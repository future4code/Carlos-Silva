import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { AiTwotoneFire, AiOutlineClear } from "react-icons/ai";
import { ImHeartBroken } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";



const MainDiv = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #d33e43;
`

const AplicationDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 25vw;
    border-radius: 10%;
    background-color: pink;
`

const ChoiceButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
    width: 300px;
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
    right: 20px;
    bottom: 16px;
`

const ImageDiv = styled.div`
    display: flex;
    height: 350px;
    width: 300px;
    background: url(${(props) => props.imageUrl}) center center/cover;
    align-items: flex-end;
    justify-content: center;
    border-radius: 10%; 
    border: 1px solid black;


    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`

const ImageInfo = styled.div`
    display: flex;
    color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-weight: bold; 
    text-align: center; 
    padding: 5px;

    p{
        margin: 0;
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

const BrokenHeartButton = styled.button`
    color: red;
    border-radius: 40%;
    border: none;
    background-color: transparent;
    margin: 5px;
    outline: none;

    &:hover{
        color: purple;
        cursor: pointer;
        
    }

    &:active{
        color: black;
        box-shadow: 1px 1px 10px 0;
    }
`

const OnFireButton = styled.button`
    color: orange;
    border-radius: 40%;
    border: none;
    background-color: transparent;
    margin: 5px;
    outline: none;

    &:hover{
        color: red;
        cursor: pointer;
        
    }

    &:active{
        color: orange;
        box-shadow: 1px 1px 10px 0;
    }
`

const ViewMatchesButton = styled.button`
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
    color: yellow;
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

const MainPage = (props) => {
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        axios
        .get(`${baseUrl}person`).then(response => {
            setProfile(response.data.profile)
        }).catch(error => {
            console.log(error)
        })
    }

    const choosePerson = (id) => {
        const body = {
            id: id,
            choice: true
        }
        axios
        .post(`${baseUrl}choose-person`, body).then(response => {
            getProfile()
        }).catch(error => {
            console.log(error)
        })
    }

    const clearMatches = () => {
        axios
        .put(`${baseUrl}clear`).then( () => {
            getProfile()
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const renderListPage = () => {
        props.renderList("ListPage")
    }
    
    return(
        <MainDiv>
            <AplicationDiv>
                <HeaderDiv>
                    <AplicationTitle>ASTROMATCH</AplicationTitle>
                    <HeaderButtonDiv>
                        <ViewMatchesButton
                         onClick={renderListPage} >
                             <FaUserFriends size={30} />
                        </ViewMatchesButton>
                    </HeaderButtonDiv>
                </HeaderDiv>
                <ImageDiv 
                    imageUrl={ profile.photo }
                />
                <ImageInfo>
                        <p>{ profile.name }</p>
                        <p>{ profile.age }</p>
                        <p>{ profile.bio }</p>
                    </ImageInfo>
                <ChoiceButtonsDiv>
                    <BrokenHeartButton 
                    onClick={getProfile}>
                        <ImHeartBroken size={30}/>
                    </BrokenHeartButton>
                    <OnFireButton 
                    onClick={ () => choosePerson(profile.id) }>
                        <AiTwotoneFire size={30}/>
                    </OnFireButton>
                </ChoiceButtonsDiv>
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

export default MainPage