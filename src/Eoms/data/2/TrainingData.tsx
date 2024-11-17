import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/trainingTypes';
import img4 from '@images/training4.webp';

const getTaskLabel = (type: string) => {
  let label = '';
  if (type === "single") {
    label = 'Задание с одним правильным ответом';
  } else if (type === "multiple") {
    label = 'Задание с несколькими вариантами ответа';
  } else if (type === "input") {
    label = 'Задание с вводом ответа';
  } else if (type === "multipleInput") {
    label = 'Задание с вводом ответа';
  } else if (type === "matchImages") {
    label = 'Задание на соотнесение';
  } else {
    label = 'Задание на установление верной последовательности';
  }
  return label;
}

const TrainingData: Test[] = [
  {
    type: 'single',
    answers: [
      {
        value: 'Сечение основной токопроводящей жилы в мм2',
        isCorrect: false
      },
      {
        value: 'Количество основных токопроводящих жил',
        isCorrect: false
      },
      {
        value: 'Количество жил в кабеле',
        isCorrect: true
      },
      {
        value: 'Сечение путевой жили',
        isCorrect: false
      },
      {
        value: 'Количество проволок в основной токопроводящей жиле',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В маркировке кабеля первое число обозначает?</Typography>          
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['треугольная', 'треугольную']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какую форму имеют бирки контрольных кабелей?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'обеспечивания необходимой электрической прочности жил',
        isCorrect: false
      },
      {
        value: 'для защиты внешних цепей от электромагнитных полей',
        isCorrect: false
      },
      {
        value: 'для предохранения внутренних элементов кабеля от разрушения',
        isCorrect: true
      },
      {
        value: 'устранения свободных промежутков между элементами кабеля',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Оболочка кабеля предназначена для?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'заполнитель',
        isCorrect: false
      },
      {
        value: 'поясная изоляция',
        isCorrect: false
      },
      {
        value: 'оболочка',
        isCorrect: true
      },
      {
        value: 'броня',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что обозначено под цифрой 5 на рисунке?</Typography>
          <Box><img src={img4} alt="ДРЛ" style={{ width: '100%', maxWidth: 400 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['круглая', 'круглую']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какую форму имеют бирки высоковольтных кабелей? </Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'установочные',
        isCorrect: true
      },
      {
        value: 'силовые',
        isCorrect: false
      },
      {
        value: 'монтажные',
        isCorrect: true
      },
      {
        value: 'контрольные',
        isCorrect: false
      },
      {
        value: 'обмоточные',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие бывают классы проводов?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'в скрутку',
        isCorrect: false
      },
      {
        value: 'угловая накладка',
        isCorrect: false
      },
      {
        value: 'в стык',
        isCorrect: true
      },
      {
        value: 'в нахлест',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Вид соединения проводов, который применяется при недостаточной длине провода и в труднодоступных местах?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'имеют большее электрическое сопротивление',
        isCorrect: true
      },
      {
        value: 'имеют равное электрическое сопротивление',
        isCorrect: false
      },
      {
        value: 'имеют меньшее электрическое сопротивление',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Чем отличаются диэлектрики от проводников?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'для защиты изоляции электрических станций, подстанций и линий электрических передач от коммутационных и атмосферных напряжений',
        isCorrect: false
      },
      {
        value: 'для понижения напряжения до величины 100В',
        isCorrect: false
      },
      {
        value: 'служит для защиты цепи от тока короткого замыкания и увеличенных больших перегрузок',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Для чего служит предохранитель?</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'уголь',
        isCorrect: false
      },
      {
        value: 'свинец',
        isCorrect: true
      },
      {
        value: 'фарфор',
        isCorrect: false
      },
      {
        value: 'медь',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие материалы не относятся к диэлектрическим?</Typography>
        </>
      )
    }
  }
];

TrainingData.forEach((item, index) => {
  item.id = index;
  item.title = getTaskLabel(item.type);
  item.score = 10;
  const answers = item.answers;
  const answersWithUid: Answer = [];
  answers.forEach(el => {
    answersWithUid.push({...el, uid: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`});
  });
  item.answers = answersWithUid;
  if (item.type === "single" || item.type === "multiple" || item.type === "order") {
    item.answers = shuffleArray(item.answers);
  }
});

export default TrainingData;