import { Grid, useTheme } from "@mui/material"
import { useState } from "react";
import EomState from "../store/EomState";
import Infographics from "../Eoms/Infographics";
import Training from "../Eoms/Training";
import Game from "../Eoms/Game";
import { observer } from "mobx-react-lite";
import Animation from "../Eoms/Animation";
import Laboratory from "../Eoms/Laboratory";
import Tasks from "../Eoms/Tasks";

const Eom = observer(() => {

  const [store] = useState(EomState);
  const theme = useTheme();

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
      </Grid>
    </Grid>
  )
});
export default Eom;