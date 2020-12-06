import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { baseUrl } from "../../constants";

const SignUpPage = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            history.push("/feed")
        }
    }, [])

    const handleUserNameChange = (event) => {
        const newUserName = event.target.value
        setUserName(newUserName)
    }
    
    const handleEmailChange = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail)
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value
        setPassword(newPassword)
    }

    const handleSignup = async (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: password,
            username: userName
        }

        try{
            const response = await axios.post(`${baseUrl}/signup`, body)

            localStorage.setItem("token", (await response).data.token)

            history.push("/feed")

        } catch (error){
            alert("Cadastro falhou. Tente novamente.")
            console.error(error)
        }
        
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return(
        <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Cadastrar
          </Typography>
          <form onSubmit={handleSignup}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Nome de Usuário"
              name="userName"
              autoComplete="userName"
              autoFocus
              onChange={handleUserNameChange}
              value={userName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              onChange={handlePasswordChange}
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" onClick={goToLoginPage} variant="body2">
                  {"Já tem uma conta? Faça seu login!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default SignUpPage