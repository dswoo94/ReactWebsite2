import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/NavBar'
import './App.css';
import Footer from './components/Footer'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <NavBar/>
        <div>
          <Typography variant="h4"  color="primary">
          Hi EveryOne!!! This is my midterm website! Please Try not to Hack it~~
          </Typography>
          <Typography variant="h5"  color="primary">
            The weather is getting hotter and hotter. And it is slowly becoming more and more humid.
            That means summer is coming already!!! Hope Everyone is ready for the summer!
          </Typography>
        </div>
        <div>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
