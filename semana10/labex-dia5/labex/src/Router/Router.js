import React from "react"
import {BrowserRouter, Route, Switch } from "react-router-dom"
import AdminLoginPage from "../screens/AdminLoginPage"
import ApplicationFormPage from "../screens/ApplicationFormPage"
import HomePage from "../screens/HomePage"
import TripDetailsPage from "../screens/TripDetailsPage"
import TripsCreatePage from "../screens/TripsCreatePage"
import TripsListPage from "../screens/TripsListPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <AdminLoginPage />
                </Route>
                <Route exact path="/application-form">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/trips/details">
                    <TripDetailsPage />
                </Route>
                <Route exact path="/trips/create">
                    <TripsCreatePage />
                </Route>
                <Route exact path="/trips/list">
                    <TripsListPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router