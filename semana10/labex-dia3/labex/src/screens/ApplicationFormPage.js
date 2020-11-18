import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"

const ApplicationFormPage = () => {
    const history = useHistory()

    const goToTripsListPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <div>
            <p>FormPage</p>
            <button onClick={goToTripsListPage}>Ver lista das viagens</button>
            <button onClick={goToHomePage}>Página inicial</button>
        </div>
    )
}

export default ApplicationFormPage