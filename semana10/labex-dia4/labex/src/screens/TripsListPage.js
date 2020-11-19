import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../hooks/useProtectedPage"

const TripsListPage = () => {
    const history = useHistory()

    useProtectedPage()  

    const goToTripsDetails = () => {
        history.push("/trips/details")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return(
        <div>
           <p>Trips List</p> 
            <button onClick={goToTripsDetails}>Detalhes da viagem</button>
            <button onClick={goToHomePage}>Página inicial</button>
        </div>
        
    )
}

export default TripsListPage