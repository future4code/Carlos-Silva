import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import testify from "../img/testify.jpg"
import { useTrips } from "../hooks/useTrips"

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
    height: 75vh;
    width: 50vw;
`

const Form = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
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

const AgeInput = styled.input`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const ProfessionInput = styled.input`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const CountryInput = styled.input`
    display: flex;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const ApplicationInput = styled.input`
    display: flex;
    width: 50%;
    height: 80px;
    border-radius: 10px;
    border: none;
    outline: none;
`

const SubmitButton = styled.button`
    height: 40px;
    color: white;
    background-color: #3a0ca3;
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
    width: 80vw;
    height: 10vh;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-around;
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

const SelectTrips = styled.select`
    display: flex;
    height: 5%;
    width: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
`

const Option = styled.option`

`

const ApplicationFormPage = () => {
    const history = useHistory()

    const trips = useTrips()

    const { form, onChange} = useForm({name: "", age: 0, applicationText: "", profession: "", country: "", tripId: ""})

    const handleInput = (event) => {
        const {value, name } = event.target;
        onChange(value, name);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const id = form.tripId

        const body = {
            name: form.name,
            age: Number(form.age),
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-silva-dumont/trips/${id}/apply`, body).then((response) => {
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
                    <NameInput
                        name="name"
                        placeholder="Nome"
                        value={form.name}
                        type="text"
                        pattern="[A-Za-z ]{3,}"
                        title="Mínimo de 3 caracteres"
                        onChange={handleInput}
                        required 
                    />
                    <AgeInput
                        name="age"
                        placeholder="Idade"
                        value={form.age}
                        type="number"
                        min="18"
                        onChange={handleInput}
                        required 
                    />
                    <ProfessionInput
                        name="profession"
                        placeholder="Profissão"
                        value={form.profession}
                        type="text"
                        pattern="[A-Za-z ]{10,}"
                        title="Mínimo de 10 caracteres"
                        onChange={handleInput}
                        required 
                    />
                    <CountryInput 
                        name="country"
                        placeholder="País"
                        value={form.country}
                        onChange={handleInput}
                        required
                    />
                    <ApplicationInput 
                        name="applicationText"
                        placeholder="Porque você deveria ser aprovado?"
                        value={form.text}
                        pattern="[A-Za-z ]{30,}"
                        title="Mínimo de 30 caracteres"
                        onChange={handleInput}
                        required
                    />
                    <SelectTrips
                        onChange={handleInput}
                        value={form.tripId}
                        name={'tripId'}
                        >
                        <Option value={''} hidden>Viagem</Option>
                        {trips.map((trip) => {
                            return <Option key={trip.id} name={"tripId"} value={trip.id}>{trip.name}</Option>
                        })}
                    </SelectTrips>
                    <SubmitButton>Quero essa viagem</SubmitButton>
                </Form>
            </FormDiv>
            <ExternalButtonsDiv>
                <GoToListPageButton onClick={goToTripsListPage}>Ver lista das viagens</GoToListPageButton>
                <GoToHomePageButton onClick={goToHomePage}>Página inicial</GoToHomePageButton>
            </ExternalButtonsDiv>
        </MainDiv>
    )
}

export default ApplicationFormPage