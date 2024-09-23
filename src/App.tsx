import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';
import style from './sass/app.scss?inline';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Eom from './components/Eom';
import { useEffect, useState } from 'react';

function App() {

  const [loaded, setLoaded] = useState<boolean>(false);

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
      },
      MuiDialog: {
        styleOverrides: {
          paperWidthMd: {
            borderRadius: 40
          }
        }
      }
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={newTheme}>
        <CssBaseline />
            <Header />
            <Grid container sx={{ my: 'auto' }}>
              <Grid item xs={12} minHeight={300}>
                <Routes>
                  {loaded && (
                  <Route path='/' element={<Main />} />
                  )}
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