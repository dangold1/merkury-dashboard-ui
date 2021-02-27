import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { DashboardContextProvider } from "./context/dashboard.context";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
        <Router basename={process.env.PUBLIC_URL}>
            <MuiThemeProvider theme={theme} >
                <DashboardContextProvider>
                    <Dashboard />
                </DashboardContextProvider>
            </MuiThemeProvider>

        </Router>
    );
}

export default App;