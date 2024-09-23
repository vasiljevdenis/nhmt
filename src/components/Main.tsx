import { Box, Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import books from "../assets/images/books.webp";
import computer from "../assets/images/computer.svg";
import teaching from "../assets/images/teaching.webp";
import demo from "../assets/images/demo.svg";
import card1 from "../assets/images/card1-bg.png";
import card2 from "../assets/images/card2-bg.png";
import card3 from "../assets/images/card3-bg.png";
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
          border: 'none',
          borderRadius: '40px',
          backgroundColor: 'primary.main',
          backgroundImage: `url(${card1})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 19px 18px 0 rgba(24, 36, 102, 0.37), 0 4px 6px 0 rgba(67, 75, 121, 0.71)',
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
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ px: { xs: 2, sm: 3, lg: 7 }, py: { xs: 1, sm: 2, lg: 4 } }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '40px',
          backgroundColor: '#3E3E3E',
          backgroundImage: `url(${card2})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 19px 18px 0 rgba(24, 36, 102, 0.37), 0 4px 6px 0 rgba(67, 75, 121, 0.71)',
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
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ px: { xs: 2, sm: 3, lg: 7 }, py: { xs: 1, sm: 2, lg: 4 } }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '40px',
          backgroundColor: '#798BFF',
          backgroundImage: `url(${card3})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 19px 18px 0 rgba(24, 36, 102, 0.37), 0 4px 6px 0 rgba(67, 75, 121, 0.71)',
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