import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"

const TripDetailsPage = () => {
    const history = useHistory()

    const goToTripsListPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <div>
            <p>Trips Details</p>
            <button onClick={goToTripsListPage}>Lista de viagens</button>
            <button onClick={goToHomePage}>Página inicial</button>
        </div>
    )
}

export default TripDetailsPage