import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import books from "../assets/images/books.webp";
import computer from "../assets/images/computer.svg";
import demo from "../assets/images/demo.svg";
import card1 from "../assets/images/card1-bg.png";
import card2 from "../assets/images/card2-bg.png";
import card3 from "../assets/images/card3-bg.png";
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
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

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (button: string) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
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
            px: 5,
            py: 8,
            width: '100%'
          }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h5' component="p" gutterBottom sx={{
                  fontWeight: '600',
                  fontSize: '32px',
                  color: "#FFFFFF"
                }}>Освоение нового < br /> материала <br /></Typography>
              </Grid>
            </Grid>
            <Typography variant='body2' sx={{ color: "#FFFFFFCC" }} component="p" gutterBottom>Динамическая инфографика <br /><br /></Typography>
            <Box sx={{ textAlign: 'right' }}>
            <Tooltip title="Рекомендации" arrow placement="top">
              <IconButton size='large' aria-label="info" sx={{ color: "#FFFFFFCC" }} onClick={handleClickOpen}>
                <InfoIcon fontSize='inherit' />
              </IconButton>
            </Tooltip>
            <Tooltip title="Начать" arrow placement="top">
              <Box sx={{ display: 'inline-block' }}>
                <Button variant="contained" size="small" onClick={() => toEom(0)}
                  onMouseEnter={() => handleMouseEnter('button1')}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    borderRadius: '40px',
                    backgroundColor: hoveredButton === 'button1' ? '#FFFFFFCC' : '#ffffff',
                    p: '3px 35px',
                    border: 'none',
                    boxShadow: 'none',
                    color: "#798BFF",
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    "&:hover": {
                      backgroundColor: '#FFFFFFCC',
                      boxShadow: 'none'
                    }
                  }}>
                  Начать
                </Button>
                <IconButton aria-label="play" size="large"
                  onMouseEnter={() => handleMouseEnter('button1')}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    color: hoveredButton === 'button1' ? '#FFFFFFCC' : '#ffffff',
                    ml: hoveredButton === 'button1' ? '-23px' : '-25px',
                    p: '3px',
                    border: hoveredButton === 'button1' ? '3px solid #FFFFFFCC' : '3px solid #ffffff',
                    backgroundColor: '#798BFF',
                    transition: 'all 150ms ease',
                    "&:hover": {
                      backgroundColor: '#798BFF'
                    }
                  }} onClick={() => toEom(0)}>
                  <PlayArrow fontSize="large" sx={{ backgroundColor: '' }} />
                </IconButton>
              </Box>
            </Tooltip>
            </Box>
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
            px: 5,
            py: 8,
            width: '100%'
          }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h5' component="p" gutterBottom sx={{
                  fontWeight: '600',
                  fontSize: '32px',
                  color: "#FFFFFF"
                }}>Применение изученного < br /> материала <br /></Typography>
              </Grid>
            </Grid>
            <Typography variant='body2' sx={{ color: "#FFFFFFCC" }} component="p" gutterBottom>Виртуальный тренажер <br /><br /></Typography>
            <Box sx={{ textAlign: 'right' }}>
            <Tooltip title="Рекомендации" arrow placement="top">
              <IconButton size='large' aria-label="info" sx={{ color: "#FFFFFFCC" }} onClick={handleClickOpenVirtual}>
                <InfoIcon fontSize='inherit' />
              </IconButton>
            </Tooltip>
            <Tooltip title="Начать" arrow placement="top">
              <Box sx={{ display: 'inline-block' }}>
                <Button variant="contained" size="small" onClick={() => toEom(1)}
                  onMouseEnter={() => handleMouseEnter('button2')}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    borderRadius: '40px',
                    backgroundColor: hoveredButton === 'button2' ? '#FFFFFFCC' : '#ffffff',
                    p: '3px 35px',
                    border: 'none',
                    boxShadow: 'none',
                    color: "#798BFF",
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    "&:hover": {
                      backgroundColor: '#FFFFFFCC',
                      boxShadow: 'none'
                    }
                  }}>
                  Начать
                </Button>
                <IconButton aria-label="play" size="large"
                  onMouseEnter={() => handleMouseEnter('button2')}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    color: hoveredButton === 'button2' ? '#FFFFFFCC' : '#ffffff',
                    ml: hoveredButton === 'button2' ? '-23px' : '-25px',
                    p: '3px',
                    border: hoveredButton === 'button2' ? '3px solid #FFFFFFCC' : '3px solid #ffffff',
                    backgroundColor: '#798BFF',
                    transition: 'all 150ms ease',
                    "&:hover": {
                      backgroundColor: '#798BFF'
                    }
                  }} onClick={() => toEom(1)}>
                  <PlayArrow fontSize="large" sx={{ backgroundColor: '' }} />
                </IconButton>
              </Box>
            </Tooltip>
            </Box>
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
            px: 5,
            py: 8,
            width: '100%'
          }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h5' component="p" gutterBottom sx={{
                  fontWeight: '600',
                  fontSize: '32px',
                  color: "#FFFFFF"
                }}>Диагностика приобретенных < br /> знаний, умений, навыков <br /></Typography>
              </Grid>
            </Grid>
            <Typography variant='body2' sx={{ color: "#FFFFFFCC" }} component="p" gutterBottom>Интерактивная мини-игра <br /><br /></Typography>
            <Box sx={{ textAlign: 'right' }}>
            <Tooltip title="Рекомендации" arrow placement="top">
              <IconButton size='large' aria-label="info" sx={{ color: "#FFFFFFCC" }} onClick={handleClickOpenInter}>
                <InfoIcon fontSize='inherit' />
              </IconButton>
            </Tooltip>
            <Tooltip title="Начать" arrow placement="top">
              <Box sx={{ display: 'inline-block' }}>
                <Button variant="contained" size="small" onClick={() => toEom(2)}
                  onMouseEnter={() => handleMouseEnter('button3')}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    borderRadius: '40px',
                    backgroundColor: hoveredButton === 'button3' ? '#FFFFFFCC' : '#ffffff',
                    p: '3px 35px',
                    border: 'none',
                    boxShadow: 'none',
                    color: "#798BFF",
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    "&:hover": {
                      backgroundColor: '#FFFFFFCC',
                      boxShadow: 'none'
                    }
                  }}>
                  Начать
                </Button>
                <IconButton aria-label="play" size="large"
                  onMouseEnter={() => handleMouseEnter('button3')}
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    color: hoveredButton === 'button3' ? '#FFFFFFCC' : '#ffffff',
                    ml: hoveredButton === 'button3' ? '-23px' : '-25px',
                    p: '3px',
                    border: hoveredButton === 'button3' ? '3px solid #FFFFFFCC' : '3px solid #ffffff',
                    backgroundColor: '#798BFF',
                    transition: 'all 150ms ease',
                    "&:hover": {
                      backgroundColor: '#798BFF'
                    }
                  }} onClick={() => toEom(2)}>
                  <PlayArrow fontSize="large" sx={{ backgroundColor: '' }} />
                </IconButton>
              </Box>
            </Tooltip>
            </Box>
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