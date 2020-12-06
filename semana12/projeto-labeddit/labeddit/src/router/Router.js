import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import LoginPage from "../screens/LoginPage/LoginPage"
import FeedPage from "../screens/FeedPage/FeedPage"
import PostPage from "../screens/PostPage/PostPage"
import SignUpPage from "../screens/SignUpPage/SignUpPage"

const Router = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/feed"}>
                    <FeedPage />
                </Route>
                <Route exact path={"/signup"}>
                    <SignUpPage />
                </Route>
                <Route exact path={"/post/:postId"}>
                    <PostPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router