import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './sass/app.scss?inline';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Eom from './components/Eom';
import { useEffect, useState } from 'react';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

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
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1800
      },
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
          },
          paperFullScreen: {
            borderRadius: '0'
          }
        }
      }
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      console.clear();
      console.log("%cДизайн и архитектурная сборка:", "color: black; font-size: 16px; font-weight: bold");
      console.log("%cDenPiligrim", "color: #207BB2; font-size: 20px; font-weight: bold");
      console.log("%cПо всем вопросам в Телеграм:", "color: black; font-size: 16px; font-weight: bold");
      console.log("%c@denpiligrim", "color: #207BB2; font-size: 16px; font-weight: bold");
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={newTheme}>
        <style>{`
            :root {
                --primary-main: ${newTheme.palette.primary.main};
            }
        `}</style>
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
    </BrowserRouter>
  )
}

export default App