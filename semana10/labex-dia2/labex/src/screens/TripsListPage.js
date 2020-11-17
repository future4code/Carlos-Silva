import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"

const TripsListPage = () => {
    const history = useHistory()

    const goToTripsDetails = () => {
        history.push("/trips/details")
    }

    return(
        <div>
           <p>Trips List</p> 
            <button onClick={goToTripsDetails}>Detalhes da viagem</button>
        </div>
        
    )
}

export default TripsListPage