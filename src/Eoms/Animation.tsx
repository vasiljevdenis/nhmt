import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, SvgIcon, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import AnimationData from '@data/AnimationData';
import { useCallback, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import AnimationState from '../store/AnimationState';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageModal from '../components/ImageModal';
import { useNavigate } from 'react-router-dom';
import bgCard from "../assets/images/bg-card.webp";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

const Animation = observer(() => {

  const [store] = useState(AnimationState);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const navigator = useNavigate();

  const toMain = () => {
    navigator('/');
  }

  const refContent = useRef<HTMLDivElement>(null);

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
      if (store.currentSl < AnimationData.length - 1) setSlide(store.currentSl + 1);
    }
  }, [store.currentSl])

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 75

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".slick-slider") || target.closest(".image-gallery")) return
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".slick-slider") || target.closest(".image-gallery")) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".slick-slider") || target.closest(".image-gallery")) return
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe) {
      if (store.currentSl > 0) setSlide(store.currentSl - 1);
    } else if (isLeftSwipe) {
      if (store.currentSl < AnimationData.length - 1) setSlide(store.currentSl + 1);
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
        <Typography variant='h6' component="h2" color={"common.white"} textAlign={'center'} fontWeight={600}>Анимация</Typography>
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
        <Typography variant='body1' component="p">Чтобы перейти к учебному материалу, нажмите на видеоролик.</Typography>
      </Grid>
      {AnimationData.map(el => (
        <Grid key={'item' + el.id} item xs={12} sm={6} md={3} p={2}>
          <Card sx={{
            maxWidth: 345,
            minHeight: 290,
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
            borderRadius: '40px',
            boxShadow: `0px 2px 1px -1px ${store.openedSlides.includes(el.id) ? 'rgba(46,125,50,0.2)' : 'rgba(0,0,0,0.2)'},0px 1px 1px 0px ${store.openedSlides.includes(el.id) ? 'rgba(46,125,50,0.2)' : 'rgba(0,0,0,0.14)'},0px 1px 3px 0px ${store.openedSlides.includes(el.id) ? 'rgba(46,125,50,0.2)' : 'rgba(0,0,0,0.12)'}`
          }}>
            <CardActionArea onClick={() => handleClickOpen(el.id)}>
              <CardMedia
                component="img"
                height="150"
                image={el.previewImage}
                alt={'img' + el.id + 1}
                sx={{
                  objectFit: 'contain'
                }}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="body1" component="div" fontWeight={700} textAlign={'center'}>
                  Видеоролик {el.id + 1}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" fontWeight={600} textAlign={'center'}>
                  {el.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Tooltip title="Просмотрено" arrow placement="top">
              <SvgIcon sx={{
                position: 'absolute',
                top: 15,
                right: 15,
                display: store.openedSlides.includes(el.id) ? 'block' : 'none'
              }}>
                <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512" xmlSpace="preserve">
                  <g>
                    <polygon fill={theme.palette.success.main} points="440.469,73.413 218.357,295.525 71.531,148.709 0,220.229 146.826,367.055 218.357,438.587 289.878,367.055 512,144.945" />
                  </g>
                </svg>
              </SvgIcon>
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
          <p style={{ textAlign: 'center' }}><span>{AnimationData[store.currentSl].title}</span></p>
          <p style={{ textAlign: 'center' }}><span style={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            padding: '0.5rem 2rem',
            borderRadius: '30px'
          }}>{(store.currentSl + 1) + '/' + AnimationData.length}</span></p>
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
            <Grid item xs={12} p={2}>
              <Box style={{ aspectRatio: "16/9", width: "100%", maxWidth: "1200px", margin: '0 auto' }}>
                <MediaPlayer lang='ru' poster={AnimationData[store.currentSl].previewImage} title={AnimationData[store.currentSl].title} src={AnimationData[store.currentSl].videoContent}>
                  <MediaProvider />
                  <DefaultVideoLayout thumbnails={AnimationData[store.currentSl].previewImage} icons={defaultLayoutIcons} />
                </MediaPlayer>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <IconButton aria-label="back" sx={{ visibility: store.currentSl === 0 ? 'hidden' : 'visible' }}
            onClick={() => setSlide(store.currentSl - 1)}>
            <ArrowBackIosIcon sx={{
              "&:hover": {
                color: theme.palette.primary.main
              }
            }} />
          </IconButton>
          <IconButton aria-label="next"
            sx={{
              mr: { xs: 0, sm: 4 },
              visibility: store.currentSl === AnimationData.length - 1 ? 'hidden' : 'visible'
            }}
            onClick={() => setSlide(store.currentSl + 1)}>
            <ArrowForwardIosIcon sx={{
              "&:hover": {
                color: theme.palette.primary.main
              }
            }} />
          </IconButton>
        </DialogActions>
      </Dialog>
      <ImageModal />
    </Grid>
  )
});

export default Animation;

// export default function Animation() {
//   return <></>
// };