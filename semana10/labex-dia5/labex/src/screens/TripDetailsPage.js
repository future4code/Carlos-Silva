import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../hooks/useProtectedPage"

const TripDetailsPage = () => {
    useProtectedPage()  

    const history = useHistory()

    const goToTripsListPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const goToTripsCreatePage = () => {
        history.push("/trips/create")
    }

    return(
        <div>
            <p>Trips Details</p>
            <button onClick={goToTripsListPage}>Lista de viagens</button>
            <button onClick={goToTripsCreatePage}>Criar viagens</button>
            <button onClick={goToHomePage}>Página inicial</button>
        </div>
    )
}

export default TripDetailsPage