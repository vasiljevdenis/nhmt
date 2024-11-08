
import { Box, Button, Card, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, Grid, IconButton, LinearProgress, LinearProgressProps, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import GameData from '@data/GameData';
import React, { useCallback, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import prev from '../assets/images/left-arrow.svg';
import next from '../assets/images/right-arrow.svg';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GameState from '../store/GameState';
import { useNavigate } from 'react-router-dom';
import { getColorByPercentage } from '../helpers/getColorByPercentage';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress sx={{ backgroundColor: 'rgb(158 225 234 / 30%)', "& .MuiLinearProgress-bar": { backgroundColor: getColorByPercentage(props.value) } }} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

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
    store.setSlideG(id);
    setTimeout(() => {
      store.addOpenedG(id);
    }, 1000);
  }

  const checkItem = (slideId: number, index: number) => {
    store.setCheckG(slideId, index);
  };

  const keyListener = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === 'ArrowLeft') {
      if (store.currentSlG > 0) setSlide(store.currentSlG - 1);
    } else if (key === 'ArrowRight') {
      if (store.currentSlG < GameData.length - 1) setSlide(store.currentSlG + 1);
    }
  }, [store.currentSlG])

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
    store.resetCountedG();
  };
  const handleClose = () => {
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

  const changeMultiRes = (id: number) => {
    store.addCountedG(id);
  }

  const getAnsweredSlides = (): number => {
    const amount = store.answG.reduce((count: Set<number>, answer) => {
      if (answer.checked) {
        return new Set([...count, answer.slideId]);
      }
      return count;
    }, new Set<number>())
    return amount.size;
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
      if (store.currentSlG > 0) setSlide(store.currentSlG - 1);
    } else if (isLeftSwipe) {
      if (store.currentSlG < GameData.length - 1) setSlide(store.currentSlG + 1);
    }
  }

  const slideStatus = (id: number, type: string) => {
    const filtered = store.answG.filter(el => el.slideId === id && el.isCorrect);
    let res: string = '-1';
    if (!isFirst && lastTime !== 0) {
      if (type === 'single') {
        filtered[0].checked ? res = '100' : res = '0';
      } else {
        const mult = filtered.filter(el => el.checked);
        if (mult.length === filtered.length) {
          res = '100';
        } else if (mult.length > 0) {
          res = '50';
        } else {
          res = '0';
        }
      }
    }

    return res;
  }

  const getTotalScore = () => {
    let res: number = 0;
    GameData.forEach(el => {
      if (el.type === 'single') {
        const filtered = store.answG.filter(elem => elem.slideId === el.id && elem.isCorrect && elem.checked);
        if (filtered.length > 0) res += el.score;
      } else if (el.type === 'multiple') {
        const filtered = store.answG.filter(elem => elem.slideId === el.id && elem.isCorrect);
        const mult = filtered.filter(el => el.checked);
        if (mult.length === filtered.length) {
          res += el.score;
        } else if (mult.length > 0) {
          res += el.score / 2;
        }
      } else if (el.type === "input") {
        
      } else if (el.type === "multipleInput") {
        
      } else if (el.type === "inputAnswer") {
        
      } else if (el.type === "matchImages") {
        
      } else {
      }
    });

    return res;
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
        <Typography variant='body1' component="p">Чтобы перейти к выполнению заданий, кликните на кнопку Начать.</Typography>
      </Grid>
      <Grid container sx={{
        width: {
          xs: '100%',
          sm: 300,
          md: 320
        },
        mx: 'auto'
      }}>
        {GameData.map(el => {
          const status = slideStatus(el.id, el.type);
          return (
            <React.Fragment key={'item' + el.id}>
              {(el.id === 0 || el.id === 5 || el.id === 10) && (
                <Grid item xs={12}>
                  <Typography variant='body1' component="p" gutterBottom textAlign={'center'}>Уровень {el.id === 0 ? '1' : el.id === 5 ? '2' : '3'}</Typography>
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
                  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px ' + (status === '100' ? '#2e7d32' : status === '50' ? '#ed6c02' : status === '0' ? '#d32f2f' : 'rgba(0,0,0,0.12)')
                }}>
                  <Tooltip title={status === '100' ? el.score + ' из ' + el.score : status === '50' ? el.score / 2 + ' из ' + el.score : status === '0' ? '0 из ' + el.score : ''} arrow placement="top">
                    {status === '100' ? (
                      <CheckCircleIcon color='success' sx={{
                        fontSize: 16,
                        position: 'absolute',
                        top: 1,
                        right: 1,
                        display: 'block'
                      }} />
                    ) : status === '50' ? (
                      <CheckCircleIcon color='warning' sx={{
                        fontSize: 16,
                        position: 'absolute',
                        top: 1,
                        right: 1,
                        display: 'block'
                      }} />
                    ) : status === '0' ? (
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
                  <Typography variant='body1' component="p" gutterBottom>{!isFirst && lastTime !== 0 ? (status === '100' ? el.score : status === '50' ? el.score / 2 : status === '0' ? '0' : '') : el.score}</Typography>
                </Card>
              </Grid>
            </React.Fragment>
          )
        })}
      </Grid>
      <Grid item xs={12} p={2} textAlign={'center'}>
        <Button onClick={() => handleClickOpen(0)} variant="contained" sx={{ color: 'common.white' }}>{isFirst ? 'Начать' : 'Повторить'}</Button>
      </Grid>
      {!isFirst && lastTime !== 0 && (
        <>
          <Grid item xs={12} p={2} textAlign={'center'}>
            <Typography variant='body1' component="p" gutterBottom fontWeight={700}>Ваш результат</Typography>
          </Grid>
          <Grid item xs={12} md={3} p={2} textAlign={"center"}>
            <Typography variant='body1' component="p" gutterBottom color={"primary"}>Потрачено времени</Typography>
            <Typography variant='body2' component="p" gutterBottom>{formatTime(lastTime)}</Typography>
          </Grid>
          <Grid item xs={12} md={3} p={2} textAlign={"center"}>
            <Typography variant='body1' component="p" gutterBottom color={"primary"}>Баллов набрано</Typography>
            <Typography variant='body2' component="p" gutterBottom>{getTotalScore() + '/' + GameData.reduce((sum, el) => sum + el.score, 0)}</Typography>
          </Grid>
          <Grid item xs={12} md={3} p={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2 }}>
            <Box sx={{ width: '100%' }}>
              <LinearProgressWithLabel value={Math.round((store.answG.filter(el => el.isCorrect && el.checked).length / store.answG.filter(el => el.isCorrect).length) * 100)} />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} p={2} textAlign={"center"}>
            <Typography variant='body1' component="p" gutterBottom color={"primary"}>Оценка</Typography>
            <Typography variant='body2' component="p" gutterBottom>{getScore(Math.round((store.answG.filter(el => el.isCorrect && el.checked).length / store.answG.filter(el => el.isCorrect).length) * 100))}</Typography>
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
          <p style={{ textAlign: 'center' }}><span>{GameData[store.currentSlG].title}</span></p>
          <p style={{ textAlign: 'center', fontSize: 14 }}>{GameData[store.currentSlG].id < 5 ? '1' : GameData[store.currentSlG].id > 9 ? '3' : '2'} уровень сложности ({GameData[store.currentSlG].score} баллов)</p>
          <p style={{ textAlign: 'center' }}><span style={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            padding: '0.5rem 2rem',
            borderRadius: '30px'
          }}>{(store.currentSlG + 1) + '/' + GameData.length}</span></p>
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
              {GameData[store.currentSlG].answers ? (
                <>
                  {GameData[store.currentSlG].content()}
                  <FormGroup>
                    {GameData[store.currentSlG].answers?.map((item, i) => {
                      return (
                        <React.Fragment key={'checkbox' + i}>
                          {GameData[store.currentSlG].type === "multiple" ? (
                            <>
                              {store.allCountedG.includes(store.currentSlG) ? (
                                <FormControlLabel sx={{"& .MuiFormControlLabel-label": {fontSize: '18px'}}} control={<Checkbox sx={{
                                  "&.Mui-checked": {
                                    "&, & + .MuiFormControlLabel-label": {
                                      color: item.isCorrect ? "success.main" : "error.main"
                                    }
                                  },
                                  "&.Mui-disabled": {
                                    "&, & + .MuiFormControlLabel-label": {
                                      color: item.isCorrect ? "success.main" : "error.main"
                                    }
                                  },
                                }}
                                  color={item.isCorrect ? "success" : "error"}
                                  icon={<CheckBoxOutlineBlankIcon />}
                                  checkedIcon={item.isCorrect ? <CheckBoxIcon /> : <DisabledByDefaultIcon />} />}
                                  label={item.value}
                                  onChange={() => checkItem(store.currentSlG, i)}
                                  disabled={store.answG.find(el => { return el.slideId === store.currentSlG && el.checked }) ? true : false}
                                  checked={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.checked || false} />
                              ) : (
                                <FormControlLabel sx={{"& .MuiFormControlLabel-label": {fontSize: '18px'}}} control={<Checkbox
                                  icon={<CheckBoxOutlineBlankIcon />}
                                  checkedIcon={<IndeterminateCheckBoxIcon />} />}
                                  label={item.value}
                                  onChange={() => checkItem(store.currentSlG, i)}
                                  checked={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.checked || false} />
                              )}
                            </>
                          ) : GameData[store.currentSlG].type === "single" ? (
                            <FormControlLabel sx={{"& .MuiFormControlLabel-label": {fontSize: '18px'}}} control={<Checkbox sx={{
                              "&.Mui-checked": {
                                "&, & + .MuiFormControlLabel-label": {
                                  color: item.isCorrect ? "success.main" : "error.main"
                                }
                              }
                            }}
                              color={item.isCorrect ? "success" : "error"}
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={item.isCorrect ? <CheckCircleIcon /> : <CancelIcon />} />}
                              label={item.value}
                              onChange={() => checkItem(store.currentSlG, i)}
                              disabled={store.answG.find(el => { return el.slideId === store.currentSlG && el.checked }) ? true : false}
                              checked={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.checked || false} />
                          ) : GameData[store.currentSlG].type === "input" ? (
                            <></>
                          )
                          : GameData[store.currentSlG].type === "multipleInput" ? (
                            <></>
                          ) : GameData[store.currentSlG].type === "inputAnswer" ? (
                            <></>
                          ) : GameData[store.currentSlG].type === "matchImages" ? (
                            <></>
                          ) : (
                            <FormControlLabel sx={{"& .MuiFormControlLabel-label": {fontSize: '18px'}}} control={<Checkbox sx={{
                              "&.Mui-checked": {
                                "&, & + .MuiFormControlLabel-label": {
                                  color: item.isCorrect ? "success.main" : "error.main"
                                }
                              }
                            }}
                              color={item.isCorrect ? "success" : "error"}
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={item.isCorrect ? <CheckCircleIcon /> : <CancelIcon />} />}
                              label={item.value}
                              onChange={() => checkItem(store.currentSlG, i)}
                              disabled={store.answG.find(el => { return el.slideId === store.currentSlG && el.checked }) ? true : false}
                              checked={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.checked || false} />
                          )}
                        </React.Fragment>
                      )
                    })}
                  </FormGroup>
                </>
              ) : (
                <>
                  {GameData[store.currentSlG].content()}
                </>
              )}
              {GameData[store.currentSlG].type === "multiple" && (
                <Button disabled={store.answG.find(el => { return el.slideId === store.currentSlG && el.checked }) ? false : true} onClick={() => changeMultiRes(store.currentSlG)} variant="contained" sx={{ color: 'common.white', mt: 2, display: store.allCountedG.includes(store.currentSlG) ? 'none' : 'inline-flex' }}>Ответить</Button>
              )}
              {getAnsweredSlides() === GameData.length && (
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <Button onClick={handleClose} variant="contained" sx={{ color: 'common.white', mt: 2 }}>Завершить</Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <IconButton aria-label="back" sx={{ visibility: store.currentSlG === 0 ? 'hidden' : 'visible' }}
            onClick={() => setSlide(store.currentSlG - 1)}>
            <img src={prev} alt="Назад" width={20} />
          </IconButton>
          <IconButton aria-label="next"
            sx={{
              mr: { xs: 0, sm: 4 },
              visibility: store.currentSlG === GameData.length - 1 ? 'hidden' : 'visible'
            }}
            onClick={() => setSlide(store.currentSlG + 1)}>
            <img src={next} alt="Далее" width={20} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Grid>
  )
});

export default Game