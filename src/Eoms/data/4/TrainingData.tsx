import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/trainingTypes';
import img1 from '@images/training1.webp';

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
        value: 'разветвленных, высших предельных',
        isCorrect: false
      },
      {
        value: 'неразветвленных, высших предельных',
        isCorrect: false
      },
      {
        value: 'низших предельных',
        isCorrect: true
      },
      {
        value: 'низших непредельных',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Природный газ состоит в основном из углеводородов:</Typography>          
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['октен']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Продуктом крекинга октадекана помимо декана является?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'количеством примесей',
        isCorrect: false
      },
      {
        value: 'содержанием метана',
        isCorrect: true
      },
      {
        value: 'агрегатным состоянием',
        isCorrect: false
      },
      {
        value: 'ничем не отличаются',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Природный и попутный нефтяные газы отличаются:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'шнековый питатель',
        isCorrect: false
      },
      {
        value: 'трубчатая сушилка',
        isCorrect: false
      },
      {
        value: 'циклон',
        isCorrect: false
      },
      {
        value: 'вальцево-гусеничная машина',
        isCorrect: true
      },
      {
        value: 'печь',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что обозначено под цифрой 4 на рисунке?</Typography>
          <Box><img src={img1} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'процесс отделения нефти от воды',
        isCorrect: false
      },
      {
        value: 'процесс разложения сложного вещества на более простые',
        isCorrect: false
      },
      {
        value: 'химический процесс первичной обработки нефти',
        isCorrect: false
      },
      {
        value: 'физический процесс разделения на компоненты',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Перегонка нефти – это:</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'бензин',
        isCorrect: false
      },
      {
        value: 'газойль',
        isCorrect: false
      },
      {
        value: 'мазут',
        isCorrect: true
      },
      {
        value: 'лигроин',
        isCorrect: false
      },
      {
        value: 'гурон',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К тяжелым фракциям нефти относятся:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'содержит большее количество гомологов метана ',
        isCorrect: true
      },
      {
        value: 'не содержит метана ',
        isCorrect: false
      },
      {
        value: 'состоит из одинаковых соединений, но в разных объемных отношениях ',
        isCorrect: false
      },
      {
        value: 'ничем не отличается',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Попутный газ отличается от природного тем, что:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Риформинг',
        isCorrect: false
      },
      {
        value: 'Фракционная перегонка',
        isCorrect: true
      },
      {
        value: 'Каталитический крекинг',
        isCorrect: false
      },
      {
        value: 'Термический крекинг',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите физический способ переработки нефти:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Уменьшается',
        isCorrect: false
      },
      {
        value: 'Увеличивается',
        isCorrect: false
      },
      {
        value: 'Не изменяется',
        isCorrect: true
      },
      {
        value: 'Сначала увеличивается, потом уменьшается',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>С увеличением числа атомов углерода в молекулах углеводородов температура кипения этих углеводородов:</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['пропан ']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Ректификационные газы, образующиеся при перегонке нефти, содержат преимущественно ... и бутан.</Typography>
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