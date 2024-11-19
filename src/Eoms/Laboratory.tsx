
import { Alert, AppBar, Badge, Box, Button, Card, Dialog, DialogContent, DialogTitle, Grid, Link, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import LaboratoryData from '@data/LaboratoryData';
import { observer } from 'mobx-react-lite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import desk from '@images/laboratory-desk.jpg';
import { Experiment, Item, LaboratoryType, Step } from '../types/laboratoryTypes';

interface ModalOpen {
  goal: boolean;
  tasks: boolean;
  theory: boolean;
  experiment: boolean;
}

const Laboratory = observer(() => {

  const data: LaboratoryType = LaboratoryData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigator = useNavigate();

  const toMain = () => {
    navigator('/');
  }

  const [currentExperiment, setCurrentExperiment] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepData, setStepData] = useState<Step[]>(data.steps.map((el, i) => { return { ...el, isVisible: i === 0 ? true : false } }));
  const [inventory, setInventory] = useState<Item[]>(data.equipment);
  const [inventoryOnDesk, setInventoryOnDesk] = useState<Item[] | null>(null);
  const [modalOpen, setModalOpen] = useState<ModalOpen>({
    goal: false,
    tasks: false,
    theory: false,
    experiment: false
  });

  const experiments: Experiment[] = data.experiments;

  const removeInventory = (name: string) => {
    setInventory(prevInventory => {
      if (prevInventory.length === 1) setCurrentStep(2);
      return prevInventory
        .map(el => {
          if (el.name === name) {
            return el.count > 1 ? { ...el, count: el.count - 1 } : null;
          }
          return el;
        })
        .filter(Boolean) as Item[];
      }
    );
  };

  const addItemToTable = (item: Item) => {
    setInventoryOnDesk(prevInventory => {
      if (prevInventory) {
        const existingItem = prevInventory.find(el => el.name === item.name);
        if (existingItem) {
          return prevInventory.map(el =>
            el.name === item.name ? { ...el, count: el.count + 1 } : el
          );
        }
      } else {
        return [{ ...item }];
      }
      return [...prevInventory, { ...item, count: 1 }];
    });
    removeInventory(item.name);
  };

  const titleRef = useRef<HTMLDivElement>(null);
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      const titleWidth = titleRef.current.offsetWidth;
      const toolbarWidth = titleRef.current.parentElement?.offsetWidth || 0;
      const availableSpace = (toolbarWidth - titleWidth) / 2;

      setMarginLeft(availableSpace);
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sx={{
        background: theme.palette.primary.main,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'relative',
        py: 1
      }}>
        <Typography variant='h6' component="h2" color={"common.white"} textAlign={'center'} fontWeight={600}>Виртуальная лаборатория</Typography>
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
        <Typography variant='body1' component="p">Выполните лабораторную работу, следуя инструкциям ниже.</Typography>
      </Grid>

      <Grid item xs={12} p={2} textAlign={'center'}>
        {isMobile ? (
          <AppBar position="static" sx={{ borderRadius: '40px' }}>
            <Toolbar>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ fontSize: '1.15rem' }}>
                    {data.title}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button color="inherit" onClick={() => setModalOpen(prev => { return { ...prev, theory: true } })}>
                    Теория
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button color="inherit" onClick={() => setModalOpen(prev => { return { ...prev, goal: true } })}>
                    Цель
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button color="inherit" onClick={() => setModalOpen(prev => { return { ...prev, tasks: true } })}>
                    Задачи
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        ) : (
          <AppBar position="static" sx={{ borderRadius: '40px' }}>
            <Toolbar>
              <Button color="inherit" onClick={() => setModalOpen(prev => { return { ...prev, theory: true } })}>
                Теория
              </Button>
              <Button color="inherit" sx={{ visibility: 'hidden' }}></Button>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {data.title}
              </Typography>
              <Button color="inherit" onClick={() => setModalOpen(prev => { return { ...prev, goal: true } })}>
                Цель
              </Button>
              <Button color="inherit" onClick={() => setModalOpen(prev => { return { ...prev, tasks: true } })}>
                Задачи
              </Button>
            </Toolbar>
          </AppBar>
        )}

        {/* Текущий опыт */}
        <Box textAlign="center" my={2}>
          <Typography variant="h5">Опыт {currentExperiment}</Typography>
          <Link href="" onClick={e => {
            e.preventDefault();
            setModalOpen(prev => { return { ...prev, experiment: true } })
            }}>Посмотреть задание</Link>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            maxWidth: '1024px',
            marginLeft: 'auto',
            marginRight: 'auto',
            aspectRatio: "1024 / 576", // Используем aspectRatio, чтобы блок сохранял пропорции
            border: "2px solid " + theme.palette.primary.main,
            borderRadius: '40px',
            backgroundImage: `url(${desk})`,
            backgroundSize: "contain", // Сохраняем пропорции изображения внутри блока
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#eff0db",
            mb: 2
          }}
        >
          {inventoryOnDesk && inventoryOnDesk.map((item, index) => (
            <Box
              key={item.name}
              sx={{
                position: "absolute",
                top: `${item.top}%`,
                left: `${item.left}%`,
                backgroundImage: `url(${item.thumb})`,
                backgroundSize: "contain", // Сохраняем пропорции изображения внутри блока
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: item.width + '%',
                height: "auto",
                aspectRatio: "100 / 100"
              }}
            >
            </Box>
          ))}
          <Alert severity="info" onClose={() => {
            setStepData(prev => {
                const existingItem = prev.find(el => el.id === currentStep);
                if (existingItem) {
                  return prev.map(el =>
                    el.id === currentStep ? { ...el, isVisible: false } : el
                  );
                }
            });
          }} sx={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            width: '40%',
            borderRadius: '20px'
          }}>{stepData.find(el => el.id === currentStep).text}</Alert>
          <Button variant='contained' color="inherit" onClick={() => {}} sx={{
            display: currentStep === 2 ? 'inline-flex' : 'none'
          }}>
            Выполнить
          </Button>
        </Box>


        {/* Панель реактивов */}
        <Box sx={{ borderTop: "2px solid " + theme.palette.primary.main, py: 2 }}>
          <Typography variant="h6" textAlign="center">
            Реактивы и оборудование
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {inventory.length === 0 ? (
              <Typography variant="body1" textAlign="center" py={5} sx={{ color: 'rgba(0, 0, 0, 0.12)' }}>
                Ничего нет
              </Typography>
            ) : inventory.map((item) => (
              <Grid item key={item.name}>
                <Tooltip title={item.name + ' ' + item.formula} arrow placement="top">
                  <Badge badgeContent={item.count} color="primary" invisible={item.count === 1} sx={{ '& .MuiBadge-badge': { top: '7px', right: '7px' } }}>
                    <Card sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      '& .MuiButtonBase-root': {
                        height: '100%'
                      },
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '20px',
                      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px ' + theme.palette.primary.main,
                      "&:hover": {
                        opacity: .8
                      }
                    }} onClick={() => addItemToTable(item)}>
                      <img
                        src={item.thumb}
                        alt={item.name}
                        style={{ width: '50px', height: '50px' }}
                      />
                    </Card>
                  </Badge>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Dialog
        fullScreen={isMobile}
        maxWidth="md"
        open={modalOpen.goal}
        onClose={() => setModalOpen(prev => { return { ...prev, goal: false } })}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600' }}>
          <span>Цель</span><CloseIcon sx={{ float: 'right', cursor: 'pointer', "&:hover": { opacity: '.7' } }} onClick={() => setModalOpen(prev => { return { ...prev, goal: false } })} />
        </DialogTitle>
        <DialogContent>
          {data.goal}
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={isMobile}
        maxWidth="md"
        open={modalOpen.tasks}
        onClose={() => setModalOpen(prev => { return { ...prev, tasks: false } })}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600' }}>
          <span>Задачи</span><CloseIcon sx={{ float: 'right', cursor: 'pointer', "&:hover": { opacity: '.7' } }} onClick={() => setModalOpen(prev => { return { ...prev, tasks: false } })} />
        </DialogTitle>
        <DialogContent>
          {data.tasks()}
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={isMobile}
        maxWidth="md"
        open={modalOpen.theory}
        onClose={() => setModalOpen(prev => { return { ...prev, theory: false } })}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600' }}>
          <span>Теоретическая часть</span><CloseIcon sx={{ float: 'right', cursor: 'pointer', "&:hover": { opacity: '.7' } }} onClick={() => setModalOpen(prev => { return { ...prev, theory: false } })} />
        </DialogTitle>
        <DialogContent>
          {data.theory()}
        </DialogContent>
      </Dialog>
      <Dialog
        fullScreen={isMobile}
        maxWidth="md"
        open={modalOpen.experiment}
        onClose={() => setModalOpen(prev => { return { ...prev, experiment: false } })}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: '600' }}>
          <span>Опыт {currentExperiment}</span><CloseIcon sx={{ float: 'right', cursor: 'pointer', "&:hover": { opacity: '.7' } }} onClick={() => setModalOpen(prev => { return { ...prev, experiment: false } })} />
        </DialogTitle>
        <DialogContent>
          {data.experiments[currentExperiment - 1].text}
        </DialogContent>
      </Dialog>
    </Grid>
  )
});

export default Laboratory;