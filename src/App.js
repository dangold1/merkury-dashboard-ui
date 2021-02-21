import "./App.css";
import { HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { DashboardContextProvider } from "./context/dashboard.context";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#5584ff",
        },
        secondary: {
            main: "#f83c7b",
        },
    },
});

function App() {
    return (
        <HashRouter basename='/' >
            <MuiThemeProvider theme={theme} >
                <DashboardContextProvider>
                    <Dashboard />
                </DashboardContextProvider>
            </MuiThemeProvider>
        </HashRouter>
    );
}

export default App;