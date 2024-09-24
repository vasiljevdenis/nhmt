import { Box, Dialog, DialogContent, DialogTitle, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import logo from '../assets/images/logo.svg';
import chemical from '../assets/images/chemical.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MainData from '../Eoms/data/8/MainData';
import { observer } from 'mobx-react-lite';
import EomState from '../store/EomState';

const Header = observer(() => {

  const [store] = useState(EomState);
  const navigator = useNavigate();

  const [open, setOpen] = useState(false);
  const [openKeywords, setOpenKeywords] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenKeywords = () => {
    setOpenKeywords(true);
  };

  const handleCloseKeywords = () => {
    setOpenKeywords(false);
  };

  useEffect(() => {
    if (store.frst) {
      // navigator('/eom');
      store.setFirst();
    }
  }, []);

  return (
    <Grid container sx={{ px: { xs: 2, sm: 3, lg: 7 }, pt: 2 }}>
      <Grid item xs={12} md={4} px={0} py={2} sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Логотип Профессионалитет" style={{ width: '100%', maxWidth: '58px', marginRight: '1rem' }} />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={chemical} alt="Химическая отрасль" style={{ width: '100%', maxWidth: '58px', marginRight: '1rem' }} />
        </Link>
        <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
          <Typography variant='h5' gutterBottom sx={{
            fontWeight: '700',
            color: '#3e3e3e'
          }}>Химическая отрасль</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={4} p={2}></Grid>
      <Grid item xs={12} md={4} px={0} py={2} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'end'
        }
      }}>
        <Box sx={{
          display: 'inline-block'          
        }}>
          <Typography variant='body1' component="p" onClick={handleClickOpen} sx={{
            color: 'primary.main',
            cursor: 'pointer',
            position: 'relative',
            "&:hover": {
              opacity: '.7'
            },
            "&::after": {
              content: '""',
              height: '1px',
              width: '0%',
              backgroundColor: 'primary.main',
              position: 'absolute',
              top: '100%',
              left: '0',
              opacity: '1'
            },
            "&:hover::after": {
              width: '100%',
              transition: 'width .3s ease-out'
            }
          }}>Информация о контенте</Typography>
        </Box>
        <Box sx={{
          borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          pl: 2,
          ml: 2,
          display: 'inline-block'
        }}>
          <Typography variant='body1' component="p" onClick={handleClickOpenKeywords} sx={{
            color: 'primary.main',
            cursor: 'pointer',
            position: 'relative',
            "&:hover": {
              opacity: '.7'
            },
            "&::after": {
              content: '""',
              height: '1px',
              width: '0%',
              backgroundColor: 'primary.main',
              position: 'absolute',
              top: '100%',
              left: '0',
              opacity: '1'
            },
            "&:hover::after": {
              width: '100%',
              transition: 'width .3s ease-out'
            }
          }}>Ключевые слова</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} px={0} py={2} sx={{
        display: 'flex',
        alignItems: 'end'
      }}>
        <Box>
          <Typography variant='h4' component="p" gutterBottom sx={{
            color: '#3e3e3e'
          }}>Тема:</Typography>
          <Typography variant='h2' component="h1" mt={2} sx={{
            fontWeight: '800 !important',
            letterSpacing: '1px',
            color: '#3e3e3e',
            typography: {
              xs: 'h5',
              sm: 'h4',
              md: 'h3',
              lg: 'h2'
            }
          }}>{MainData.title()}</Typography>
        </Box>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600' }}>
          <span>Информация о контенте</span><CloseIcon sx={{ float: 'right', cursor: 'pointer' }} onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          {MainData.info()}
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={openKeywords}
        onClose={handleCloseKeywords}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600' }}>
          <span>Ключевые слова</span><CloseIcon sx={{ float: 'right', cursor: 'pointer' }} onClick={handleCloseKeywords} />
        </DialogTitle>
        <DialogContent>
          {MainData.keywords()}
        </DialogContent>
      </Dialog>
    </Grid>
  )
});

export default Header