import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginDiv = styled.div`
    border-radius: 10px;
    margin-top: 160px;
    background-color: grey;
    height: 50vh;
    width: 20vw;
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
                <p>Login Adm</p>
                <input placeholder="Email" value={email} onChange={handleEmail}/>
                <input placeholder="Senha" value={password} onChange={handlePassword}/>
                <button onClick={login}>Login</button>
            </LoginDiv>
        </MainDiv>
    )
}

export default AdminLoginPage