import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

const AdminLoginPage = () => {

    const history = useHistory()

    const goToTripsCreatePage = () => {
        history.push("/trips/create")
    }

    const goToTripsListPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <div>
            <p>Admin LoginPage</p>
            <button onClick={goToTripsCreatePage}>Criar nova viagem</button>
            <button onClick={goToTripsListPage}>Ver lista das viagens</button>
            <button onClick={goToHomePage}>Página inicial</button>
        </div>
    )
}

export default AdminLoginPage