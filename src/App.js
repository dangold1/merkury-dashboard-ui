import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5584ff',
    },
    secondary: {
      main: '#f83c7b',
    }
  }
});

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
