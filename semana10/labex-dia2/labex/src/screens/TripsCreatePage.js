import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"

const TripsCreatePage = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    } 

    const goToTripListPage = () => {
        history.push("/trips/list")
    }
    
    return(
        <div>
            <p>Trips Create</p>
            <button onClick={goToTripListPage}>Lista de viagens</button>
            <button onClick={goToHomePage}>Página inicial</button>
        </div>
    )
}

export default TripsCreatePage