import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorkflowPage from "../pages/WorkflowPage";
import StatisticsPage from "../pages/StatisticsPage";
import CalendarPage from "../pages/CalendarPage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";


const DashboardRoutes = () => {
    return (
        <Switch>
            <Route path="/workflow" component={WorkflowPage} />
            <Route path="/statistics" component={StatisticsPage} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route exact path="/" component={HomePage} />
        </Switch>
    )
}

export default DashboardRoutes;