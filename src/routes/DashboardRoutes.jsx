import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";

const DashboardRoutes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Fragment>
    )
}

export default DashboardRoutes;