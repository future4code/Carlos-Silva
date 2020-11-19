import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import testify from "../img/testify.jpg"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${testify});
    background-size: 100vw 100vh;

    p{
        color: white;
        font-size: 20px;
    }
`

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid red;
    height: 75vh;
    width: 50vw;
`

const Form = styled.form`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
`

const ApplicationFormPage = () => {
    const history = useHistory()

    const { id } = useParams()

    const { form, onChange} = useForm({name: "", age: 0, applicationText: "", profession: "", country: ""})

    const handleInput = (event) => {
        const {value, name } = event.target;
        onChange(value, name);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-silva-dumont/trips/${id}/apply`, form).then((response) => {
            alert(response.data.message)
        }).catch((error) => {
            console.log(error)
        })
    }

    const goToTripsListPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <MainDiv>
            <p>FORMULÁRIO DE INSCRIÇÃO</p>
            <FormDiv>
                <Form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Nome"
                        value={form.name}
                        type="text"
                        pattern="[A-Za-z ]{3,}"
                        title="Mínimo de 3 caracteres"
                        onChange={handleInput}
                        required 
                    />
                    <input
                        name="age"
                        placeholder="Idade"
                        value={form.age}
                        type="number"
                        min="18"
                        onChange={handleInput}
                        required 
                    />
                    <input
                        name="profession"
                        placeholder="Profissão"
                        value={form.profession}
                        type="text"
                        pattern="[A-Za-z ]{10,}"
                        title="Mínimo de 10 caracteres"
                        onChange={handleInput}
                        required 
                    />
                    <input 
                        name="country"
                        placeholder="País"
                        value={form.country}
                        onChange={handleInput}
                        required
                    />
                    <input 
                        name="applicationText"
                        placeholder="Porque você deveria ser aprovado?"
                        value={form.text}
                        pattern="[A-Za-z ]{30,}"
                        title="Mínimo de 30 caracteres"
                        onChange={handleInput}
                        required
                    />
                    <button type="submit">Quero essa viagem</button>
                </Form>
                <button onClick={goToTripsListPage}>Ver lista das viagens</button>
                <button onClick={goToHomePage}>Página inicial</button>
            </FormDiv>
        </MainDiv>
    )
}

export default ApplicationFormPage