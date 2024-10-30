import { Box, Button, Grid, useTheme } from "@mui/material"
import { useState } from "react";
import EomState from "../store/EomState";
import Infographics from "../Eoms/Infographics";
import Training from "../Eoms/Training";
import Game from "../Eoms/Game";
import { observer } from "mobx-react-lite";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import Animation from "../Eoms/Animation";
import Laboratory from "../Eoms/Laboratory";
import Tasks from "../Eoms/Tasks";

const Eom = observer(() => {

  const [store] = useState(EomState);
  const theme = useTheme();
  const navigator = useNavigate();

  const toMain = () => {
    navigator('/');
  }

  return (
    <Grid container sx={{ width: '100%', height: '100%', p: {xs: 1, sm: 3, md: 5, lg: 7} }}>
      <Grid item xs={12} sx={{ 
        width: '100%',
        height: '100%',
        border: '1px solid ' + theme.palette.primary.main,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'relative'
         }}>
        {store.currentEx === 0 ? (
          import.meta.env.VITE_MASTERING_TYPE === "infographics" ? <Infographics /> : <Animation />
        ) : store.currentEx === 1 ? (
          import.meta.env.VITE_USAGE_TYPE === "training" ? <Training /> : <Laboratory />
        ) : (
          import.meta.env.VITE_DIAGNOSTICS_TYPE === "game" ? <Game /> : <Tasks />
        )
        }
        <Box sx={{
          position: 'absolute',
          bottom: -35,
          left: -5,
          zIndex: 100
        }}>
          <Button variant="text" startIcon={<ArrowBackIosIcon />}
            sx={{ textTransform: 'none' }}
            onClick={toMain}>
            На главную
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
});
export default Eom;