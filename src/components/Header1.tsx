import { Box, Dialog, DialogContent, DialogTitle, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import professionalitet from '../assets/images/professionalitet.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MainData from '../Eoms/data/8/MainData';

const Header = () => {

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

  return (
    <Grid container>
      <Grid item xs={12} md={3} p={2}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={professionalitet} alt="Логотип Профессионалитет" style={{ width: '100%', maxWidth: '45px' }} />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant='body1' mt={1} gutterBottom sx={{
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontFamily: 'DeltaGothicOne',
            color: 'rgba(0, 0, 0, 0.87)'
          }}>Профессионалитет</Typography>
        </Link>
        <Typography variant='h6' component="p" sx={{
          position: 'relative',
          '&::after': {
            content: '""',
            width: '80px',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            borderRight: '1px solid #000000',
            transform: 'rotate(35deg)'
          }
        }}>2023</Typography>
        <Typography variant='body2' component="p" sx={{
          float: 'right',
          mr: 'calc(100% - 250px)'
        }}>клиническая <br /> и профилактическая <br /> медицина</Typography>
      </Grid>
      <Grid item xs={12} md={6} p={2} sx={{
        display: 'flex',
        alignItems: 'end'
      }}>
        <Box sx={{
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
        </Box>
      </Grid>
      <Grid item xs={12} md={3} p={2}>
        <Box sx={{
          borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          pl: 2,
          display: 'inline-block'
        }}>
          <Typography variant='body1' component="p" onClick={handleClickOpen} gutterBottom sx={{
            color: 'primary.main',
            cursor: 'pointer',
            "&:hover": {
              opacity: '.7'
            }
          }}>Информация <br /> о контенте</Typography>
        </Box>
        <Box sx={{
          borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          pl: 2,
          ml: 2,
          display: 'inline-block'
        }}>
          <Typography variant='body1' component="p" onClick={handleClickOpenKeywords} gutterBottom sx={{
            color: 'primary.main',
            cursor: 'pointer',
            "&:hover": {
              opacity: '.7'
            }
          }}>Ключевые <br /> слова</Typography>
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
};

export default Header