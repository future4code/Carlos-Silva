import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import { baseUrl } from "../../constants";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const LoginPage = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            history.push("/feed")
        }
    }, [])

    const handleUpdateEmail = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail)
    }

    const handleUpdatePassword = (event) => {
        const newPassword = event.target.value
        setPassword(newPassword)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const body ={
            email: email,
            password: password,
        }

        try{
            const response = await axios.post(`${baseUrl}/login`, body)

            localStorage.setItem("token", response.data.token)

            history.push("/feed")
        } catch (error) {
            alert("Login falhou. Cheque os dados e tente novamente.")
            console.error(error)
        }
    }

    const goToSignUpPage = () => {
        history.push("/signup")
    }

    return(
        <Container component="main" maxWidth="xs">
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Faça o login
          </Typography>
          <form onSubmit={handleLogin}>
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
              onChange={handleUpdateEmail}
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
              onChange={handleUpdatePassword}
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" onClick={goToSignUpPage} variant="body2">
                  {"Ainda não tem uma conta? Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default LoginPage