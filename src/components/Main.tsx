import { Box, Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import books from "../assets/images/books.webp";
import computer from "../assets/images/computer.svg";
import teaching from "../assets/images/teaching.webp";
import demo from "../assets/images/demo.svg";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import EomState from '../store/EomState';
import { observer } from 'mobx-react-lite';
import MainData from '../Eoms/data/8/MainData';

const Main = observer(() => {

  const [store] = useState(EomState);
  const navigator = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openVirtual, setOpenVirtual] = useState<boolean>(false);
  const [openInter, setOpenInter] = useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenVirtual = () => {
    setOpenVirtual(true);
  };

  const handleCloseVirtual = () => {
    setOpenVirtual(false);
  };
  const handleClickOpenInter = () => {
    setOpenInter(true);
  };

  const handleCloseInter = () => {
    setOpenInter(false);
  };

  const toEom = (i: number) => {
    store.setExercise(i);
    navigator('/eom');
  }

  return (
    <Grid container sx={{ height: '100%', position: 'relative' }}>
      <Grid item xs={12} sm={4} sx={{ px: { xs: 2, sm: 3, lg: 7 }, py: { xs: 1, sm: 2, lg: 4 } }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          border: '1px solid #293896',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{
            textAlign: 'center',
            px: 1,
            py: 3,
            width: '100%'
          }}>
            <Grid container>
              <Grid item xs={2} textAlign={"center"}>
                <img src={teaching} alt="Динамическая инфографика" style={{ width: '50px' }} />
              </Grid>
              <Grid item xs={8} textAlign={"center"}>
                <Typography variant='h6' component="p" gutterBottom sx={{
                  fontWeight: '600'
                }}>Освоение < br />нового материала <br /><br /></Typography>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
            <Typography variant='body2' color={"primary.main"} component="p" gutterBottom>Динамическая инфографика</Typography>
            <Tooltip title="Рекомендации" arrow placement="top">
              <IconButton aria-label="info" sx={{ mr: 1 }} onClick={handleClickOpen}>
                <img src={books} alt="Динамическая инфографика" style={{ width: '44px', marginRight: 2 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Начать" arrow placement="top">
              <IconButton aria-label="play" size="large" sx={{ color: 'black', ml: 1 }} onClick={() => toEom(0)}>
                <PlayCircleOutlineIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          <svg style={{
            transform: 'rotate(180deg)',
            transformOrigin: 'center center',
            position: 'absolute',
            top: 0,
            right: 0
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#293896" fillOpacity="1" d="M0,0L1440,130L1440,320L0,320Z"></path>
          </svg>
          <svg style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#293896" fillOpacity="1" d="M0,0L1440,130L1440,320L0,320Z"></path>
          </svg>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ px: { xs: 2, sm: 3, lg: 7 }, py: { xs: 1, sm: 2, lg: 4 } }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          border: '1px solid #293896',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{
            textAlign: 'center',
            px: 1,
            py: 3,
            width: '100%'
          }}>
            <Grid container>
              <Grid item xs={2} textAlign={"right"}>
                <img src={demo} alt="Виртуальный тренажер" style={{ width: '42px' }} />
              </Grid>
              <Grid item xs={8} textAlign={"center"}>
                <Typography variant='h6' component="p" gutterBottom sx={{
                  fontWeight: '600'
                }}>Применение <br /> изученного материала <br /><br /></Typography>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>          
            <Typography variant='body2' color={"primary.main"} component="p" gutterBottom>Виртуальный тренажер</Typography>
            <Tooltip title="Рекомендации" arrow placement="top">
              <IconButton aria-label="info" sx={{ mr: 1 }} onClick={handleClickOpenVirtual}>
                <img src={books} alt="Виртуальный тренажер" style={{ width: '44px', marginRight: 2 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Начать" arrow placement="top">
              <IconButton aria-label="play" size="large" sx={{ color: 'black', ml: 1 }} onClick={() => toEom(1)}>
                <PlayCircleOutlineIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          <svg style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 1440" height={'100%'}>
            <path fill="#293896" fillOpacity="1" d="M0,0L0,1440L120,0Z"></path>
          </svg>
          <svg style={{
            position: 'absolute',
            top: 0,
            right: 0
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 1440" height={'100%'}>
            <path fill="#293896" fillOpacity="1" d="M120,1440L0,1440L120,0Z"></path>
          </svg>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ px: { xs: 2, sm: 3, lg: 7 }, py: { xs: 1, sm: 2, lg: 4 } }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          border: '1px solid #293896',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{
            textAlign: 'center',
            px: 1,
            py: 3,
            width: '100%'
          }}>
            <Grid container>
              <Grid item xs={2} textAlign={"right"}>
                <img src={computer} alt="Интерактивная мини-игра" style={{ width: '50px' }} />
              </Grid>
              <Grid item xs={8} textAlign={"center"}>
                <Typography variant='h6' component="p" sx={{
                  fontWeight: '600'
                }}>Диагностика <br /> приобретенных</Typography>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={12} textAlign={"center"}>
                <Typography variant='h6' component="p" gutterBottom sx={{
                  fontWeight: '600'
                }}>знаний, умений, навыков</Typography>
              </Grid>
            </Grid>
            <Typography variant='body2' color={"primary.main"} component="p" gutterBottom>Интерактивная мини-игра</Typography>
            <Tooltip title="Рекомендации" arrow placement="top">
              <IconButton aria-label="info" sx={{ mr: 1 }} onClick={handleClickOpenInter}>
                <img src={books} alt="Интерактивная мини-игра" style={{ width: '44px', marginRight: 2 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Начать" arrow placement="top">
              <IconButton aria-label="play" size="large" sx={{ color: 'black', ml: 1 }} onClick={() => toEom(2)}>
                <PlayCircleOutlineIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          <svg style={{
            transform: 'rotate(180deg)',
            transformOrigin: 'center center',
            position: 'absolute',
            top: 0,
            right: 0
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#293896" fillOpacity="1" d="M0,0L1440,130L1440,320L0,320Z"></path>
          </svg>
          <svg style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#293896" fillOpacity="1" d="M0,0L1440,130L1440,320L0,320Z"></path>
          </svg>
        </Box>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span>Динамическая инфографика</span><CloseIcon sx={{ float: 'right', cursor: 'pointer' }} onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
        {MainData.infographics()}
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={openVirtual}
        onClose={handleCloseVirtual}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span>Виртуальный тренажер</span><CloseIcon sx={{ float: 'right', cursor: 'pointer' }} onClick={handleCloseVirtual} />
        </DialogTitle>
        <DialogContent>
        {MainData.training()}
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={openInter}
        onClose={handleCloseInter}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span>Интерактивная мини-игра</span><CloseIcon sx={{ float: 'right', cursor: 'pointer' }} onClick={handleCloseInter} />
        </DialogTitle>
        <DialogContent>
        {MainData.game()}
        </DialogContent>
      </Dialog>
    </Grid>
  )
});

export default Main