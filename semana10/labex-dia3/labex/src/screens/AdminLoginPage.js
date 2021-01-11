import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import planet from "../img/planet.jpg"

const MainDiv = styled.div`
    display: flex;
    background-color: black;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-image: url(${planet});
    background-size: cover;
`

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    /* background-color: grey; */
    height: 60vh;
    width: 25vw;

    input{
        width: 65%;
        border-radius: 5px;
        border: 1px solid black;
        height: 20px;
    }
`

const LoginButton = styled.button`
    border-radius: 10px;
    border: none;
    outline: none;
    height: 30px;
    width: 80px;
    background-color: #ffb703;
    font-weight: 700;
    
    &:hover{
        background-color: #312244;
        color: white;
        cursor: pointer;
    }

    &:active{
        background-color: brown;
        color: white;
    }
`


const AdminLoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token) {
            history.push("/trips/details")
        }
    }, [history])

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login =() => {
        const body = {
            email: email,
            password: password
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-silva-dumont/login",
        body
        ).then((response) => {
            localStorage.setItem("token", response.data.token)
            history.push("/trips/details")
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <MainDiv>
            <LoginDiv>
                <input placeholder="Email" value={email} onChange={handleEmail}/>
                <input placeholder="Senha" value={password} onChange={handlePassword}/>
                <LoginButton onClick={login}>Login</LoginButton>
            </LoginDiv>
        </MainDiv>
    )
}

export default AdminLoginPage