
import { Card, CardActionArea, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, Grid, IconButton, TextField, Tooltip, Typography, useTheme } from '@mui/material';
import TrainingData from '@data/TrainingData';
import { useCallback, useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import EomState from '../store/EomState';
import prev from '../assets/images/left-arrow.svg';
import next from '../assets/images/right-arrow.svg';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
// import { createRoot } from 'react-dom/client'
// import { flushSync } from 'react-dom';

interface Input {
  [n: number]: string;
}

const Training = observer(() => {

  const [store] = useState(EomState);

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState<Input>({});

  const refContent = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();

  const handleOpenImage = (i: string) => {
    store.setImage(i);
    store.setOpenImage(true);
  }

  const setSlide = (id: number) => {
    refContent.current?.scrollTo(0, 0);
    store.setSlideT(id);
    setTimeout(() => {
      store.addOpenedT(id);
    }, 1000);
  }

  const handleClickOpen = (id: number) => {
    setSlide(id);
    setOpen(true);
  };

  const handleClose = () => {
    navigator('/');
    setOpen(false);
  };
  const checkItem = (slideId: number, index: number) => {
    store.setCheck(slideId, index);
    console.log(store.answersT);

  };

  const keyListener = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === 'ArrowLeft') {
      if (store.currentSlT > 0) setSlide(store.currentSlT - 1);
    } else if (key === 'ArrowRight') {
      if (store.currentSlT < TrainingData.length - 1) setSlide(store.currentSlT + 1);
    }
  }, [store.currentSlT])

  useEffect(() => {
    handleClickOpen(0);
  }, []);

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
      if (store.currentSlT > 0) setSlide(store.currentSlT - 1);
    } else if (isLeftSwipe) {
      if (store.currentSlT < TrainingData.length - 1) setSlide(store.currentSlT + 1);
    }
  }

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [store.currentSlT]: event.target.value.toLowerCase() });
  }
  const blurInput = () => {
    if (TrainingData[store.currentSlT].answers?.slice()[0].value === input[store.currentSlT]) {
      store.setCheck(store.currentSlT, 0);
    }
  }

  useEffect(() => {
    const arr = TrainingData.filter(el => el.answers?.length === 1);
    if (arr.length > 0) {
      const result = arr.reduce((acc, item) => ({ ...acc, [item.id]: '' }), {});
      setInput({ ...result });
    }
  //   function getHtml() {
  //   window.navigator.clipboard.writeText(JSON.stringify(TrainingData, (key, value) => {
  //     if (typeof value === 'function') {
  //       const div = document.createElement('div');
  //       const root = createRoot(div);
  //       flushSync(() => {
  //         root.render(value());
  //       });
  //       return div.innerHTML;
  //     }
  //     return value;
  //   }));
  // }
  // setTimeout(() => {
  //   getHtml();
  // }, 5000);
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} sx={{
        background: theme.palette.primary.main,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        py: 1
      }}>
        <Typography variant='h6' component="h2" color={"common.white"} textAlign={'center'} fontWeight={600}>Виртуальный тренажер</Typography>
      </Grid>
      <Grid item xs={12} p={2}>
        <Typography variant='body1' component="p" gutterBottom>{import.meta.env.VITE_PREAMBLE}</Typography>
        <Typography variant='body1' component="p">Чтобы перейти к учебному материалу, кликните на каждую из иконок.</Typography>
      </Grid>
      {TrainingData.map(el => (
        <Grid key={'item' + el.id} item xs={12} sm={6} md={3} p={2}>
          <Card sx={{ maxWidth: 345, minHeight: 210, height: '100%', mx: 'auto', '& .MuiButtonBase-root': { height: '100%' }, position: 'relative' }}>
            <CardActionArea onClick={() => handleClickOpen(el.id)}>
              {el.imageContent || el.image ? (
                <CardMedia
                  component="img"
                  height="150"
                  image={el.image || ''}
                  alt={'img' + el.id + 1}
                  sx={{
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <></>
              )}
              <CardContent sx={el.imageContent || el.image ? { height: '100%' } : {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography gutterBottom variant="body1" component="div" fontWeight={600} textAlign={'center'}>
                  {el.answers ? 'Тестовое задание' : el.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Tooltip title={el.answers ? 'Тест пройден' : 'Просмотрено'} arrow placement="top">
              <CheckCircleIcon color='success' sx={{
                position: 'absolute',
                top: 1,
                right: 1,
                display: store.openedSlidesT.includes(el.id) ? 'block' : 'none'
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
          <p style={{ textAlign: 'center' }}><span>{TrainingData[store.currentSlT].title}</span></p>
          <p style={{ textAlign: 'center' }}>{(store.currentSlT + 1) + '/' + TrainingData.length}</p>
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
        <DialogContent ref={refContent} sx={{ fontWeight: '600', position: 'relative', px: { xs: 0, sm: 3 } }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <Grid container>
            {TrainingData[store.currentSlT].imageContent || TrainingData[store.currentSlT].image ? (
              <>
                <Grid item xs={12} md={4} p={2} textAlign={'center'}>
                  <img onClick={() => handleOpenImage(TrainingData[store.currentSlT].imageContent || TrainingData[store.currentSlT].image || '')} src={TrainingData[store.currentSlT].imageContent || TrainingData[store.currentSlT].image || ''} alt={'image' + store.currentSlT} style={{
                    width: '100%',
                    maxWidth: '500px',
                    position: window.innerWidth < 600 ? 'static' : 'sticky',
                    top: 0,
                    cursor: 'zoom-in'
                  }} />
                </Grid>
                <Grid item xs={12} md={8} p={2}>
                  {TrainingData[store.currentSlT].answers ? (
                    <>
                      {TrainingData[store.currentSlT].content()}
                      <FormGroup>
                        {TrainingData[store.currentSlT].answers?.map((item, i) => {
                          return (
                            <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} key={'checkbox' + i} control={<Checkbox sx={{
                              "&.Mui-checked": {
                                "& + .MuiFormControlLabel-label": {
                                  color: item.isCorrect ? "success.main" : "error.main"
                                }
                              }
                            }}
                              color={item.isCorrect ? "success" : "error"}
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={item.isCorrect ? <CheckCircleIcon /> : <CancelIcon />} />}
                              label={item.value}
                              onChange={() => checkItem(store.currentSlT, i)}
                              checked={store.answersT.find(el => { return el.slideId === store.currentSlT && el.index === i })?.checked || false} />
                          )
                        })}
                      </FormGroup>
                    </>
                  ) : (
                    <>
                      {TrainingData[store.currentSlT].content()}
                    </>
                  )}
                </Grid>
              </>
            ) : (
              <Grid item xs={12} p={2}>
                {TrainingData[store.currentSlT].answers ? (
                  <>
                    {TrainingData[store.currentSlT].content()}
                    {TrainingData[store.currentSlT].answers?.length === 1 ? (
                      <TextField
                        placeholder='Нажмите для ввода'
                        variant='standard'
                        value={input[store.currentSlT]}
                        onChange={changeInput}
                        onBlur={blurInput}
                        sx={{ mt: 2, "& .Mui-disabled": { color: 'rgba(0, 0, 0, 0.87)', WebkitTextFillColor: 'rgba(0, 0, 0, 0.87) !important' } }}
                        disabled={store.answersT.find(el => { return el.slideId === store.currentSlT && el.index === 0 })?.checked || false}
                        InputProps={{
                          endAdornment: input[store.currentSlT].length === 0 ? <div></div> : store.answersT.find(el => { return el.slideId === store.currentSlT && el.index === 0 })?.checked ? <CheckCircleIcon sx={{ color: "success.main" }} /> : <CancelIcon sx={{ color: "error.main" }} />,
                        }}
                      />
                    ) : (
                      <FormGroup>
                        {TrainingData[store.currentSlT].answers?.map((item, i) => {
                          return (
                            <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} key={'checkbox' + i} control={<Checkbox sx={{
                              "&.Mui-checked": {
                                "& + .MuiFormControlLabel-label": {
                                  color: item.isCorrect ? "success.main" : "error.main"
                                }
                              }
                            }}
                              color={item.isCorrect ? "success" : "error"}
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={item.isCorrect ? <CheckCircleIcon /> : <CancelIcon />} />}
                              label={item.value}
                              onChange={() => checkItem(store.currentSlT, i)}
                              checked={store.answersT.find(el => { return el.slideId === store.currentSlT && el.index === i })?.checked || false} />
                          )
                        })}
                      </FormGroup>
                    )}
                  </>
                ) : (
                  <>
                    {TrainingData[store.currentSlT].content()}
                  </>
                )}
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <IconButton aria-label="back" sx={{ visibility: store.currentSlT === 0 ? 'hidden' : 'visible' }}
            onClick={() => setSlide(store.currentSlT - 1)}>
            <img src={prev} alt="Назад" width={20} />
          </IconButton>
          <IconButton aria-label="next"
            sx={{
              mr: { xs: 0, sm: 4 },
              visibility: store.currentSlT === TrainingData.length - 1 ? 'hidden' : 'visible'
            }}
            onClick={() => setSlide(store.currentSlT + 1)}>
            <img src={next} alt="Далее" width={20} />
          </IconButton>
        </DialogActions>
      </Dialog>
      <ImageModal />
    </Grid>
  )
});

export default Training