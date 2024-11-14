
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import GameData from '@data/GameData';
import React, { useCallback, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GameState from '../store/GameState';
import { useNavigate } from 'react-router-dom';
import Multiple from './Game/Multiple';
import Single from './Game/Single';
import Input from './Game/Input';
import Order from './Game/Order';
import MultipleInput from './Game/MultipleInput';
import InputAnswer from './Game/InputAnswer';
import { Test } from '../types/gameTypes';
import PieChartWithCenterLabel from '../components/PieChartWithCenterLabel';

const Game = observer(() => {

  const [store] = useState(GameState);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const refContent = useRef<HTMLDivElement>(null);

  const navigator = useNavigate();

  const toMain = () => {
    navigator('/');
  }

  const setSlide = (id: number) => {
    refContent.current?.scrollTo(0, 0);
    store.setCurrentSlide(id);
  }

  const keyListener = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === 'ArrowLeft') {
      if (store.getCurrentSlide > 0) setSlide(store.getCurrentSlide - 1);
    } else if (key === 'ArrowRight') {
      if (store.getCurrentSlide < GameData.length - 1) setSlide(store.getCurrentSlide + 1);
    }
  }, [store.getCurrentSlide])

  const [time, setTime] = useState<number>(0);
  const [lastTime, setLastTime] = useState<number>(0);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    setTimeout(() => {
      setIsFirst(false);
    }, 1000);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleClickOpen = (id: number) => {
    store.resetAnswers();
    setSlide(id);
    setOpen(true);
    resetTimer();
    startTimer();
    store.resetScore();
  };
  const handleClose = () => {
    store.checkTotalScore();
    setOpen(false);
    pauseTimer();
    setLastTime(time);
  };

  function getScore(percent: number) {
    if (percent < 30) {
      return 1
    } else if (percent >= 30 && percent < 50) {
      return 2
    } else if (percent >= 50 && percent < 70) {
      return 3
    } else if (percent >= 70 && percent < 90) {
      return 4
    } else if (percent >= 90) {
      return 5
    }
  }

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
      if (store.getCurrentSlide > 0) setSlide(store.getCurrentSlide - 1);
    } else if (isLeftSwipe) {
      if (store.getCurrentSlide < GameData.length - 1) setSlide(store.getCurrentSlide + 1);
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} sx={{
        background: theme.palette.primary.main,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'relative',
        py: 1
      }}>
        <Typography variant='h6' component="h2" color={"common.white"} textAlign={'center'} fontWeight={600}>Интерактивная мини-игра</Typography>
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
        <Typography variant='body1' component="p">Чтобы перейти к выполнению заданий, кликните на кнопку Начать. Обратите внимание, что на выполнение заданий дается 1 попытка.</Typography>
      </Grid>
      <Grid container sx={{
        width: {
          xs: '100%',
          sm: 300,
          md: 400
        },
        mx: 'auto'
      }}>
        {GameData.map((el: Test) => {
          let level = 0;
          let maxScore = 0;
          if (el.id < 5) {
            level = 1;
            maxScore = 10;
          } else if (el.id < 10) {
            level = 2;
            maxScore = 20;
          } else if (el.id < 15) {
            level = 3;
            maxScore = 30;
          }
          return (
            <React.Fragment key={'item' + el.id}>
              {(el.id === 0 || el.id === 5 || el.id === 10) && (
                <Grid item xs={12}>
                  <Typography variant='body1' component="p" gutterBottom textAlign={'center'}>Уровень {level}</Typography>
                </Grid>
              )}
              <Grid key={'item' + el.id} item xs={2.4} p={2}>
                <Card sx={{
                  width: 50,
                  height: 50,
                  mx: 'auto',
                  '& .MuiButtonBase-root': {
                    height: '100%'
                  },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px ' + (
                    !isFirst && lastTime !== 0 ? (
                      store.getSlideScore(el.id) === maxScore
                        ? '#2e7d32'
                        : store.getSlideScore(el.id) === maxScore / 2
                        ? '#ed6c02'
                        : '#d32f2f'
                    )
                      : theme.palette.primary.main
                  )
                }}>
                  {!isFirst && lastTime !== 0 && (
                    <Tooltip title={!isFirst && lastTime !== 0 && store.getSlideScore(el.id) + ' из ' + el.score} arrow placement="top">
                      {store.getSlideScore(el.id) === maxScore ? (
                        <CheckCircleIcon color='success' sx={{
                          fontSize: 16,
                          position: 'absolute',
                          top: 1,
                          right: 1,
                          display: 'block'
                        }} />
                      ) : store.getSlideScore(el.id) === maxScore / 2 ? (
                        <CheckCircleIcon color='warning' sx={{
                          fontSize: 16,
                          position: 'absolute',
                          top: 1,
                          right: 1,
                          display: 'block'
                        }} />
                      ) : store.getSlideScore(el.id) === 0 ? (
                        <CancelIcon color='error' sx={{
                          fontSize: 16,
                          position: 'absolute',
                          top: 1,
                          right: 1,
                          display: 'block'
                        }} />
                      ) : (
                        <></>
                      )}
                    </Tooltip>
                  )
                  }
                  <Typography variant='body1' component="p" gutterBottom>{!isFirst && lastTime !== 0 ? store.getSlideScore(el.id) : el.score}</Typography>
                </Card>
              </Grid>
            </React.Fragment>
          )
        })}
      </Grid>
      <Grid item xs={12} p={2} textAlign={'center'}>
        <Button onClick={() => handleClickOpen(0)} variant="contained" sx={{ color: 'common.white', display: isFirst ? 'inline-flex' : 'none' }}>{isFirst ? 'Начать' : 'Повторить'}</Button>
      </Grid>
      {!isFirst && lastTime !== 0 && (
        <>
          <Grid item xs={12} p={2} textAlign={'center'}>
            <Typography variant='body1' component="p" gutterBottom fontWeight={700}>Ваш результат</Typography>
          </Grid>
          <Grid item xs={12} p={2} textAlign={'center'} sx={{ display: 'flex' }}>
            <PieChartWithCenterLabel />
          </Grid>
          <Grid item xs={12} md={4} p={2} textAlign={"center"}>
            <Typography variant='body1' component="p" gutterBottom color={"primary"}>Потрачено времени</Typography>
            <Typography variant='body2' component="p" gutterBottom>{formatTime(lastTime)}</Typography>
          </Grid>
          <Grid item xs={12} md={4} p={2} textAlign={"center"}>
            <Typography variant='body1' component="p" gutterBottom color={"primary"}>Баллов набрано</Typography>
            <Typography variant='body2' component="p" gutterBottom>{store.getTotalScore + '/' + GameData.reduce((sum, el) => sum + el.score, 0)}</Typography>
          </Grid>
          <Grid item xs={12} md={4} p={2} textAlign={"center"}>
            <Typography variant='body1' component="p" gutterBottom color={"primary"}>Оценка</Typography>
            <Typography variant='body2' component="p" gutterBottom>{getScore(Math.round((store.getTotalScore / 300) * 100))}</Typography>
          </Grid>
        </>
      )}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        onKeyDown={keyListener}
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600', position: 'relative' }}>
          <p style={{ textAlign: 'center' }}><span>{GameData[store.getCurrentSlide].title}</span></p>
          <p style={{ textAlign: 'center', fontSize: 14 }}>{GameData[store.getCurrentSlide].id < 5 ? '1' : GameData[store.getCurrentSlide].id > 9 ? '3' : '2'} уровень сложности ({GameData[store.getCurrentSlide].score} баллов)</p>
          <p style={{ textAlign: 'center' }}><span style={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            padding: '0.5rem 2rem',
            borderRadius: '30px'
          }}>{(store.getCurrentSlide + 1) + '/' + GameData.length}</span></p>
          <p style={{ textAlign: 'center' }}>{formatTime(time)}</p>
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
            <Grid item xs={12} p={2}>
              {GameData[store.getCurrentSlide].answers ? (
                <>
                  {GameData[store.getCurrentSlide].content()}
                  <FormGroup>
                    {GameData[store.getCurrentSlide].answers?.map((item: any, i: number) => {
                      return (
                        <React.Fragment key={'checkbox' + i}>
                          {GameData[store.getCurrentSlide].type === "multiple" ? (
                            <Multiple item={item} />
                          ) : GameData[store.getCurrentSlide].type === "single" ? (
                            <Single item={item} />
                          ) : GameData[store.getCurrentSlide].type === "input" ? (
                            <Input item={item} />
                          ) : GameData[store.getCurrentSlide].type === "multipleInput" ? (
                            <MultipleInput item={item} />
                          ) : GameData[store.getCurrentSlide].type === "inputAnswer" ? (
                            <InputAnswer item={item} />
                          ) : GameData[store.getCurrentSlide].type === "matchImages" ? (
                            <></>
                          ) : (
                            <Order item={item} />
                          )}
                        </React.Fragment>
                      )
                    })}
                  </FormGroup>
                </>
              ) : (
                <>
                  {GameData[store.getCurrentSlide].content()}
                </>
              )}
              {GameData[store.getCurrentSlide].type !== "single" && (
                <Button disabled={store.getScored.find(slide => slide.slideId === store.getCurrentSlide).answered} onClick={() => { store.setAnsweredSlide(store.getCurrentSlide) }} variant="contained" sx={{ color: 'common.white', mt: 2, display: store.getScored.find(slide => slide.slideId === store.getCurrentSlide).ready && !store.getScored.find(slide => slide.slideId === store.getCurrentSlide).answered ? 'inline-flex' : 'none' }}>Ответить</Button>
              )}
              {store.getScored.every(item => item.answered) && (
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <Button onClick={handleClose} variant="contained" sx={{ color: 'common.white', mt: 2 }}>Завершить</Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <IconButton aria-label="back" sx={{ visibility: store.getCurrentSlide === 0 ? 'hidden' : 'visible' }}
            onClick={() => setSlide(store.getCurrentSlide - 1)}>
            <ArrowBackIosIcon sx={{
              "&:hover": {
                color: theme.palette.primary.main
              }
            }} />
          </IconButton>
          <IconButton aria-label="next"
            disabled={!store.getScored.find(slide => slide.slideId === store.getCurrentSlide).answered}
            sx={{
              mr: { xs: 0, sm: 4 },
              visibility: store.getCurrentSlide === GameData.length - 1 ? 'hidden' : 'visible'
            }}
            onClick={() => setSlide(store.getCurrentSlide + 1)}>
            <ArrowForwardIosIcon sx={{
              "&:hover": {
                color: theme.palette.primary.main
              }
            }} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Grid>
  )
});

export default Game