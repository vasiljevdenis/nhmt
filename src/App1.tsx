import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';
import style from './sass/app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Eom from './components/Eom';

function App() {

  const newTheme = createTheme({
    palette: {
      primary: {
        main: '#293896',
      }
    },
    typography: {
      fontFamily: [
        "Lato",
        'sans-serif'
      ].join(',')
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: style,
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: '#293896'
            },
            "& input::placeholder": {
              verticalAlign: 'middle'
            }
          }
        }
      }
    }
  });

  return (
    <HashRouter>
      <ThemeProvider theme={newTheme}>
        <CssBaseline />
            <Header />
            <Grid container sx={{ my: 'auto' }}>
              <Grid item xs={12} minHeight={300}>
                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/eom' element={<Eom />} />
                </Routes>
              </Grid>
            </Grid>
            <Footer />
      </ThemeProvider>
    </HashRouter>
  )
}

export default App