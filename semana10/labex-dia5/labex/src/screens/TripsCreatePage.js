import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../hooks/useProtectedPage"
import { useForm } from "../hooks/useForm"
import rocket from "../img/rocket.jpg"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${rocket});
    background-size: 100vw 100vh;

    label{
        outline: none;
        border: none;
        color: white;
        font-size: 20px;
    }
`

const PageTitle = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 600;
`

const Form = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
    width: 50vw;
    height: 80vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const NameInput = styled.input`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const PlanetSelect = styled.select`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const DateInput = styled.input`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const DurationInput = styled.input`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const DescriptionInput = styled.input`
    display: flex;
    width: 50%;
    height: 10%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const TripsCreateButton = styled.button`
    height: 40px;
    color: black;
    background-color: #80b918;
    border-radius: 10px;
    border: none;
    outline: none;

    &:hover{
        background-color: #3a0ca3;
        color: white;
        cursor: pointer;
    }

    &:active{
        background-color: yellow;
        color: black;
    }
`

const GoToListPageButton = styled.button`
    height: 20px;
    color: #3a0ca3;
    font-weight: bold;
    background-color: white;
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

const GoToHomePageButton = styled.button`
    height: 20px;
    color: #3a0ca3;
    font-weight: bold;
    background-color: white;
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

const ExternalButtonsDiv = styled.div`
    display: flex;
    width: 20vw;
    justify-content: space-between;
`

const TripsCreatePage = () => {
    const history = useHistory()

    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    const handleInput = (event) => {
        const { value, name } = event.target;
        onChange(value, name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    
        const token = window.localStorage.getItem("token")
        
        console.log(form)
    
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: Number(form.durationInDays)
        }
    
        const axiosConfig = {
            headers: { auth: token }
        }    
            
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-silva-dumont/trips", body, axiosConfig)
        .then((response) => {
            console.log(response)
            console.log(form)
        }).catch((error) => {
            console.log(error)
        })
    }

    useProtectedPage()  

    const goToHomePage = () => {
        history.push("/")
    } 

    const goToTripListPage = () => {
        history.push("/trips/list")
    }
    
    return(
        <MainDiv>
            <PageTitle>Cadastro de viagens</PageTitle>
            <Form onSubmit={handleSubmit}>
                <label>Título da viagem</label>
                <NameInput
                    required
                    name="name"
                    value={form.name}
                    pattern="{5,}"
                    onChange={handleInput} />
                <label>Planeta</label>
                <PlanetSelect
                    required
                    name="planet"
                    value={form.planet}
                    onChange={handleInput}>
                    <option
                        key=""
                        value="">
                    </option>
                    <option
                        key="Miller"
                        value="Miller">
                        Miller
                    </option>
                    <option
                        key="Mercúrio"
                        value="Mercúrio">
                        Mercúrio
                    </option>
                    <option
                        key="Vênus"
                        value="Vênus">
                        Vênus
                    </option>
                    <option
                        key="Marte"
                        value="Marte">
                        Marte
                    </option>
                    <option
                        key="Júpiter"
                        value="Júpiter">
                        Júpiter
                    </option>
                    <option
                        key="Saturno"
                        value="Saturno">
                        Saturno
                    </option>
                    <option
                        key="Urano"
                        value="Urano">
                        Urano
                    </option>
                    <option
                        key="Netuno"
                        value="Netuno">
                        Netuno
                    </option>
                </PlanetSelect>
                <label>Data</label>
                <DateInput
                    required
                    name="date"
                    value={form.date}
                    type="date"
                    onChange={handleInput} />
                <label>Duração em dias</label>
                <DurationInput
                    name="durationInDays"
                    value={form.durationInDays}
                    type="number"
                    min="50"
                    onChange={handleInput} />
                <label>Descrição</label>
                <DescriptionInput
                    required
                    name="description"
                    value={form.description}
                    pattern="{30,}"
                    onChange={handleInput} />
                <TripsCreateButton>CRIAR VIAGEM</TripsCreateButton>
            </Form>
            <ExternalButtonsDiv>
                <GoToHomePageButton onClick={goToHomePage}>Página inicial</GoToHomePageButton>
                <GoToListPageButton onClick={goToTripListPage}>Lista de viagens</GoToListPageButton>
            </ExternalButtonsDiv>
        </MainDiv>
    )
}

export default TripsCreatePage