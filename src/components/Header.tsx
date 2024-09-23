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
    <Grid container>
      <Grid item xs={12} md={4} p={2} sx={{
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
      <Grid item xs={12} md={4} p={2} sx={{
        display: 'flex',
        alignItems: 'end'
      }}>
        {/* <Box sx={{
          borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          pl: 2
        }}>
          <Typography variant='h6' component="p" gutterBottom sx={{
            color: 'primary.main'
          }}>Тема:</Typography>
          <Typography variant='h6' component="p" mt={2} sx={{
            fontWeight: '600',
            letterSpacing: '1px'
          }}>{MainData.title()}</Typography>
        </Box> */}
      </Grid>
      <Grid item xs={12} md={4} p={2} sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{
          pl: 2,
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