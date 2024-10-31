import { Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import InfographicsData from '@data/InfographicsData';
import { useCallback, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import EomState from '../store/EomState';
import prev from '../assets/images/left-arrow.svg';
import next from '../assets/images/right-arrow.svg';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ImageModal from '../components/ImageModal';
import { useNavigate } from 'react-router-dom';
import bgCard from "../assets/images/bg-card.png";

const Infographics = observer(() => {

  const [store] = useState(EomState);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const navigator = useNavigate();

  const toMain = () => {
    navigator('/');
  }

  const refContent = useRef<HTMLDivElement>(null);

  const handleOpenImage = (i: string) => {
    store.setImage(i);
    store.setOpenImage(true);
  }

  const setSlide = (id: number) => {
    refContent.current?.scrollTo(0, 0);
    store.setSlide(id);
    setTimeout(() => {
      store.addOpened(id);
    }, 1000);
  }

  const handleClickOpen = (id: number) => {
    setSlide(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const keyListener = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === 'ArrowLeft') {
      if (store.currentSl > 0) setSlide(store.currentSl - 1);
    } else if (key === 'ArrowRight') {
      if (store.currentSl < InfographicsData.length - 1) setSlide(store.currentSl + 1);
    }
  }, [store.currentSl])

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 75

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe) {
      if (store.currentSl > 0) setSlide(store.currentSl - 1);
    } else if (isLeftSwipe) {
      if (store.currentSl < InfographicsData.length - 1) setSlide(store.currentSl + 1);
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} sx={{
        background: theme.palette.primary.main,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        py: 1,
        position: 'relative'
      }}>
        <Typography variant='h6' component="h2" color={"common.white"} textAlign={'center'} fontWeight={600}>Динамическая инфографика</Typography>
        <Button variant="text" startIcon={<ArrowBackIosIcon />}
          sx={{
            textTransform: 'none',
            color: 'white',
            position: 'absolute',
            top: '12%',
            left: 20
          }}
          onClick={toMain}>
          {isMobile ? '' : 'На главную'}
        </Button>
      </Grid>
      <Grid item xs={12} p={2}>
        <Typography variant='body1' component="p" gutterBottom>{import.meta.env.VITE_PREAMBLE}</Typography>
        <Typography variant='body1' component="p">Чтобы перейти к учебному материалу, нажмите на слайд.</Typography>
      </Grid>
      {InfographicsData.map(el => (
        <Grid key={'item' + el.id} item xs={12} sm={6} md={3} p={2}>
          <Card sx={{
            maxWidth: 345,
            height: '100%',
            mx: 'auto',
          backgroundImage: `url(${bgCard})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
            '& .MuiButtonBase-root': {
              height: '100%'
            },
            position: 'relative',
            boxShadow: `0px 2px 1px -1px ${store.openedSlides.includes(el.id) ? 'rgba(46,125,50,0.2)' : 'rgba(0,0,0,0.2)'},0px 1px 1px 0px ${store.openedSlides.includes(el.id) ? 'rgba(46,125,50,0.2)' : 'rgba(0,0,0,0.14)'},0px 1px 3px 0px ${store.openedSlides.includes(el.id) ? 'rgba(46,125,50,0.2)' : 'rgba(0,0,0,0.12)'}`
          }}>
            <CardActionArea onClick={() => handleClickOpen(el.id)}>
              <CardMedia
                component="img"
                height="150"
                image={el.image}
                alt={'img' + el.id + 1}
                sx={{
                  objectFit: 'contain'
                }}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="body1" component="div" fontWeight={700} textAlign={'center'}>
                  Слайд {el.id + 1}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" fontWeight={600} textAlign={'center'}>
                  {el.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Tooltip title="Просмотрено" arrow placement="top">
              <DoneOutlineIcon color='success' sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                display: store.openedSlides.includes(el.id) ? 'block' : 'none'
              }} />
            </Tooltip>
          </Card>
        </Grid>
      ))}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        onKeyDown={keyListener}
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600', position: 'relative' }}>
          <p style={{ textAlign: 'center' }}><span>{InfographicsData[store.currentSl].title}</span></p>
          <p style={{ textAlign: 'center' }}>{(store.currentSl + 1) + '/' + InfographicsData.length}</p>
          <CloseIcon sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            cursor: 'pointer',
            "&:hover": {
              opacity: '.7'
            }
          }} onClick={handleClose} />
        </DialogTitle>
        <DialogContent ref={refContent} sx={{ px: { xs: 0, sm: 3 } }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <Grid container>
            <Grid item xs={12} md={4} p={2} textAlign={'center'}>
              <img onClick={() => handleOpenImage(InfographicsData[store.currentSl].imageContent || InfographicsData[store.currentSl].image)} src={InfographicsData[store.currentSl].imageContent || InfographicsData[store.currentSl].image} alt={'image' + store.currentSl} style={{
                width: '100%',
                maxWidth: '500px',
                position: window.innerWidth < 600 ? 'static' : 'sticky',
                top: 0,
                cursor: 'zoom-in'
              }} />
            </Grid>
            <Grid item xs={12} md={8} p={2}>
              {InfographicsData[store.currentSl].content()}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <IconButton aria-label="back" sx={{ visibility: store.currentSl === 0 ? 'hidden' : 'visible' }}
            onClick={() => setSlide(store.currentSl - 1)}>
            <img src={prev} alt="Назад" width={20} />
          </IconButton>
          <IconButton aria-label="next"
            sx={{
              mr: { xs: 0, sm: 4 },
              visibility: store.currentSl === InfographicsData.length - 1 ? 'hidden' : 'visible'
            }}
            onClick={() => setSlide(store.currentSl + 1)}>
            <img src={next} alt="Далее" width={20} />
          </IconButton>
        </DialogActions>
      </Dialog>
      <ImageModal />
    </Grid>
  )
});

export default Infographics